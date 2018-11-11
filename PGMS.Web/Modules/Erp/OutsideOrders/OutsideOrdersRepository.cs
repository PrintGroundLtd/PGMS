
using System.Linq;
using PGMS.Erp.Entities;

namespace PGMS.Erp.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.OutsideOrdersRow;

    public class OutsideOrdersRepository
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

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                if (!Response.Entities.Any())
                    return;


                var expensesFields = ExpensesRow.Fields;
                var expensesListRequest = new ListRequest();
                expensesListRequest.ColumnSelection = ColumnSelection.Details;

                expensesListRequest.Criteria =
                    (new Criteria(expensesFields.OutsideOrderId.Name).In(Response.Entities.Select(o => o.OutsideOrderId)));
                var expensesList = new ExpensesRepository().List(Connection, expensesListRequest)
                    .Entities;

                foreach (var responseEntity in Response.Entities)
                {
                    var expenses = expensesList.Where(e => e.OutsideOrderId == responseEntity.OutsideOrderId).ToList();
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
        }
    }
}