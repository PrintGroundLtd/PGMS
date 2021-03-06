﻿
using System;
using Serenity.Reporting;
using Serenity.Web;

namespace PGMS.Erp.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.OrdersRepository;
    using MyRow = Entities.OrdersRow;

    [Route("Services/Erp/Orders/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OrdersController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, OrderListRequest request)
        {
            return new MyRepository().List(connection, request);
        }


        public FileContentResult ListExcel(IDbConnection connection, OrderListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.OrdersColumns));
            var bytes = new ReportRepository().Render(report);
            var reportName = "Orders_";
            return ExcelContentResult.Create(bytes, reportName + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

    }
}
