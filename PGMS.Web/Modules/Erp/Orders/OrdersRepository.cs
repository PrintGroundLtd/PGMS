
using System.Linq;
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
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, OrderListRequest>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
                 
                foreach (var responseEntity in Response.Entities)
                {
                    var orderDetailsFields = OrderDetailsRow.Fields;
                    var orderDetailsListRequest = new ListRequest();
                    orderDetailsListRequest.ColumnSelection = ColumnSelection.Details;

                    orderDetailsListRequest.Criteria =
                        (new Criteria(orderDetailsFields.OrderId.Name) == responseEntity.OrderId.Value);

                    var orderDetails = new OrderDetailsRepository().List(Connection, orderDetailsListRequest)
                        .Entities;

                    responseEntity.Total = Decimal.Zero;
                    if (orderDetails.Any())
                        responseEntity.Total = orderDetails.Select(od => od.LineTotal).Aggregate((a, b) => a + b) ?? Decimal.Zero;
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