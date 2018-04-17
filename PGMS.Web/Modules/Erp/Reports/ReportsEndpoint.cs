using System;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PGMS.Erp.Entities;
using PGMS.Erp.Repositories;
using Serenity;
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
                response.labels.Add(DateTime.Now.AddMonths(-i).ToString("MMMM"));


            // Income
            var datasetIncome = new IncomeVSExpenseResponse.Dataset();
            datasetIncome.label = Texts.Site.Reports.IncomeVSExpenseIncomeLabel;
            datasetIncome.backgroundColor = "#00ff00";
            datasetIncome.borderColor = "#00ff00";

            // Expense
            var datasetExpense = new IncomeVSExpenseResponse.Dataset();
            datasetExpense.label = Texts.Site.Reports.IncomeVSExpenseExpenseLabel;
            datasetExpense.backgroundColor = "#ff0000";
            datasetExpense.borderColor = "#ff0000";
            for (int j = 0; j < 12; j++)
            {

                var firstDayOfMonth = new DateTime(DateTime.Now.AddMonths(-j).Year,
                    DateTime.Now.AddMonths(-j).Month, 1);
                var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);

                #region Income

                var orderFields = OrdersRow.Fields;
                var ordersRequest = new OrderListRequest();
                ordersRequest.ColumnSelection = ColumnSelection.KeyOnly;
                ordersRequest.Criteria = (new Criteria(orderFields.OrderDate.Name) >= firstDayOfMonth
                                          & new Criteria(orderFields.OrderDate.Name) <= lastDayOfMonth
                                              & new Criteria(orderFields.IsActive.Name) == 1
                                          );

                var orders = new OrdersRepository().List(connection, ordersRequest).Entities;
                if (!orders.Any())
                {
                    datasetIncome.data.Add(Decimal.Zero);
                    continue;
                }
                var orderDetailsFields = OrderDetailsRow.Fields;
                var orderDetailsListRequest = new ListRequest();
                orderDetailsListRequest.ColumnSelection = ColumnSelection.Details;

                orderDetailsListRequest.Criteria =
                    (new Criteria(orderDetailsFields.OrderId.Name).In(orders.Select(o => o.OrderId)));

                var orderDetails = new OrderDetailsRepository().List(connection, orderDetailsListRequest).Entities;

                var totalForMonth = orderDetails.Select(od => od.LineTotal).Aggregate((a, b) => a + b);

                datasetIncome.data.Add(totalForMonth ?? Decimal.Zero);

                #endregion

            }

            for (int j = 0; j < 12; j++)
            {
                var firstDayOfMonth = new DateTime(DateTime.Now.AddMonths(-j).Year,
                    DateTime.Now.AddMonths(-j).Month, 1);
                var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);

                #region Expense

                var expensesListRequest = new ListRequest();
                var expensesFields = ExpensesRow.Fields;
                expensesListRequest.ColumnSelection = ColumnSelection.KeyOnly;
                expensesListRequest.IncludeColumns = new HashSet<string>
                {
                    expensesFields.Total.Name,
                    expensesFields.TransactionDate.Name
                };

                expensesListRequest.Criteria = (new Criteria(expensesFields.TransactionDate.Name) >= firstDayOfMonth
                                                & new Criteria(expensesFields.TransactionDate.Name) <= lastDayOfMonth
                                              & new Criteria(expensesFields.IsActive.Name) == 1
                                                );

                var expenses = new ExpensesRepository().List(connection, expensesListRequest).Entities;
                if (!expenses.Any())
                {
                    datasetExpense.data.Add(Decimal.Zero);
                    continue;
                }

                var totalExpenses = expenses.Select(e => e.Total).Aggregate((a, b) => a + b);
                datasetExpense.data.Add(totalExpenses ?? Decimal.Zero);

                #endregion
            }

            response.datasets.Add(datasetIncome);
            response.datasets.Add(datasetExpense);

            return new RetrieveResponse<IncomeVSExpenseResponse> { Entity = response };

        }

        [ServiceAuthorize(PermissionKeys.Reports.OrdersPerStatus)]
        public RetrieveResponse<OrdersPerStatusResponse> OrdersPerStatus(IDbConnection connection)
        {
            var response = new OrdersPerStatusResponse();

            for (int i = 0; i < 12; i++)
                response.labels.Add(DateTime.Now.AddMonths(-i).ToString("MMMM"));


            var orderStatuses = new OrderStatusesRepository().List(connection, new ListRequest()).Entities;
            foreach (var orderStatus in orderStatuses)
            {
                var dataset = new OrdersPerStatusResponse.Dataset();

                Random r = new Random();
                dataset.backgroundColor = HexConverter(Color.FromArgb(r.Next(0, 256),
                    r.Next(0, 256), r.Next(0, 256)));

                dataset.borderColor = HexConverter(Color.FromArgb(r.Next(0, 256),
                    r.Next(0, 256), r.Next(0, 256)));

                dataset.label = orderStatus.Name;
                for (int j = 0; j < 12; j++)
                {
                    var firstDayOfMonth = new DateTime(DateTime.Now.AddMonths(-j).Year,
                        DateTime.Now.AddMonths(-j).Month, 1);
                    var lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);

                    var orderFields = OrdersRow.Fields;
                    var ordersRequest = new OrderListRequest();
                    ordersRequest.ColumnSelection = ColumnSelection.KeyOnly;
                    ordersRequest.Criteria = (new Criteria(orderFields.OrderDate.Name) >= firstDayOfMonth
                                              & new Criteria(orderFields.OrderDate.Name) <= lastDayOfMonth
                                              & new Criteria(orderFields.OrderStatusId.Name) == orderStatus.OrderStatusId.Value
                                              & new Criteria(orderFields.IsActive.Name) == 1

                                              );

                    var orders = new OrdersRepository().List(connection, ordersRequest).Entities;
                    if (!orders.Any())
                    {
                        dataset.data.Add(Decimal.Zero);
                        continue;
                    }

                    var orderDetailsFields = OrderDetailsRow.Fields;
                    var orderDetailsListRequest = new ListRequest();
                    orderDetailsListRequest.ColumnSelection = ColumnSelection.Details;

                    orderDetailsListRequest.Criteria =
                        (new Criteria(orderDetailsFields.OrderId.Name).In(orders.Select(o => o.OrderId)));

                    var orderDetails = new OrderDetailsRepository().List(connection, orderDetailsListRequest)
                        .Entities;

                    var totalForMonth = Decimal.Zero;
                    if (orderDetails.Any())
                        totalForMonth = orderDetails.Select(od => od.LineTotal).Aggregate((a, b) => a + b) ?? Decimal.Zero;

                    dataset.data.Add(totalForMonth);
                }

                response.datasets.Add(dataset);


            }



            return new RetrieveResponse<OrdersPerStatusResponse> { Entity = response };

        }

        private static String HexConverter(System.Drawing.Color c)
        {
            return "#" + c.R.ToString("X2") + c.G.ToString("X2") + c.B.ToString("X2");
        }
    }
}
