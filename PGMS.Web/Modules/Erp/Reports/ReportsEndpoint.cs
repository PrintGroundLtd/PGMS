using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PGMS.Erp.Entities;
using Serenity.Data;
using Serenity.Services;

namespace PGMS.Erp.Endpoints
{
    [Route("Services/Erp/Reports/[action]")]
    [ConnectionKey(typeof(OrdersRow)), ServiceAuthorize(typeof(OrdersRow))]
    public class ReportsEndpoint : ServiceEndpoint
    {
        [ServiceAuthorize(PermissionKeys.Reports.IncomeVSExpense)]
        public RetrieveResponse<IncomeVSExpenseResponse> IncomeVSExpenseResponse(IDbConnection connection)
        {
            var response = new IncomeVSExpenseResponse();
            for (int i = 0; i < 12; i++)
            {

                response.labels.Add(DateTime.Now.AddMonths(-i).ToString("MMMM"));

                var firstDayOfMonth = new DateTime(DateTime.Now.AddMonths(-i).Year,
                    DateTime.Now.AddMonths(-i).Month, 1);
                var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);

                var dataset = new IncomeVSExpenseResponse.Dataset();
                dataset.label = DateTime.Now.AddMonths(-i).ToString("MMMM");
                dataset.backgroundColor = "#ff0000";
                dataset.borderColor = "#00ff00";
                //todo define data 
                for (int j = 0; j < 12; j++)
                {
                    var data = new Random().Next(0, 1000);
                    dataset.data.Add(data);
                }
                response.datasets.Add(dataset);

            }


            return new RetrieveResponse<IncomeVSExpenseResponse> { Entity = response };

        }
    }
}
