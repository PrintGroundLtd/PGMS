
using System.Collections.Generic;
using System.Linq;
using PGMS.Administration.Entities;
using PGMS.Erp.Entities;

namespace PGMS.Erp.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.OrdersRow;

    public class OrdersRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, OrderListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
               
                if (Response.Entity.DetailList.Any())
                {
                    var counter = 0;
                    Response.Entity.DetailList.ForEach(od =>
                    {
                        counter++;

                        od.NoteList = new NoteRepository().List(Connection, new ListRequest
                        {
                            ColumnSelection = ColumnSelection.List,
                            Criteria = 
                                (new Criteria(NoteRow.Fields.EntityType.Name) == "[dbo].[OrderDetails]")
                            & (new Criteria(NoteRow.Fields.EntityId.Name) == od.OrderDetailId.ToString())
                        }).Entities;
                        od.NotesCounter = 0;
                        #region BUG With EMPTY NOTE list in master detail dialog 
                        if (od.NoteList.Any())
                        {
                            od.NotesCounter = od.NoteList.Count;

                            // users might be in another database, in another db server, so we can't simply use a join here
                            var userIdList = od.NoteList.Where(x => x.InsertUserId != null)
                                .Select(x => x.InsertUserId.Value).Distinct();
                            if (userIdList.Any())
                            {
                                var u = UserRow.Fields;
                                IDictionary<int, string> userDisplayNames;
                                using (var connection = SqlConnections.NewFor<UserRow>())
                                    userDisplayNames = connection.Query(new SqlQuery()
                                            .From(u)
                                            .Select(u.UserId)
                                            .Select(u.DisplayName)
                                            .Where(u.UserId.In(userIdList)))
                                        .ToDictionary(x => (int) (x.UserId ?? x.USERID), x => (string) x.DisplayName);

                                string s;
                                foreach (var x in od.NoteList)
                                    if (x.InsertUserId != null &&
                                        userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                                        x.InsertUserDisplayName = s;
                            }
                        }
                        #endregion

                        od.OrderDetailCounter = counter;

                    });
                }

            }
        }
        private class MyListHandler : ListRequestHandler<MyRow, OrderListRequest>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                if (!Response.Entities.Any())
                    return;

                var orderDetailsFields = OrderDetailsRow.Fields;
                var orderDetailsListRequest = new ListRequest();
                orderDetailsListRequest.ColumnSelection = ColumnSelection.Details;

                orderDetailsListRequest.Criteria =
                    (new Criteria(orderDetailsFields.OrderId.Name).In(Response.Entities.Select(o => o.OrderId)));
                var orderDetailsList = new OrderDetailsRepository().List(Connection, orderDetailsListRequest)
                    .Entities;

                var expensesFields = ExpensesRow.Fields;
                var expensesListRequest = new ListRequest();
                expensesListRequest.ColumnSelection = ColumnSelection.Details;

                expensesListRequest.Criteria =
                    (new Criteria(expensesFields.OrderId.Name).In(Response.Entities.Select(o => o.OrderId)));
                var expensesList = new ExpensesRepository().List(Connection, expensesListRequest)
                    .Entities;

                foreach (var responseEntity in Response.Entities)
                {
                    responseEntity.Total = Decimal.Zero;
                    var orderDetails = orderDetailsList.Where(od => od.OrderId == responseEntity.OrderId).ToList();
                    if (orderDetails.Any())
                    {
                        responseEntity.Total = orderDetails.Select(od => od.LineTotal).Aggregate((a, b) => a + b) ?? Decimal.Zero;
                    }
                    var expenses = expensesList.Where(e => e.OrderId == responseEntity.OrderId).ToList();
                    responseEntity.PaymentsTotal = Decimal.Zero;
                    if (expenses.Any())
                    {
                        var incomeList = expenses.Where(e => e.TransactionType == TransactionType.Income).ToList();
                        var incomeTotal = Decimal.Zero;
                        if (incomeList.Any())
                            incomeTotal = incomeList.Select(e => e.Total).Aggregate((a, b) => a + b) ?? Decimal.Zero;

                        var expenseList = expenses.Where(e => e.TransactionType == TransactionType.Expense).ToList();
                        var expensesTotal = Decimal.Zero;
                        if (expenseList.Any())
                            expensesTotal = expenseList.Select(e => e.Total)?.Aggregate((a, b) => a + b) ?? Decimal.Zero;

                        responseEntity.PaymentsTotal = incomeTotal - expensesTotal;
                    }

                }

            }

            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.ProductId != null)
                {
                    var od = Entities.OrderDetailsRow.Fields.As("od");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(od)
                            .Where(
                                od.OrderId == fld.OrderId &
                                od.ProductId == Request.ProductId.Value)
                            .ToString()));
                }
            }
        }
    }
}