
using System.Collections.Generic;
using System.Linq;
using PGMS.Erp.Entities;

namespace PGMS.Erp.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.BudgetsRow;

    public class BudgetsRepository
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
                foreach (var responseEntity in Response.Entities)
                {
                    var expensesFld = ExpensesRow.Fields;
                    var expensesQuery = new SqlQuery()
                        .From(expensesFld)
                        .Select(expensesFld.Total, expensesFld.TransactionType)
                        .Where(~(
                            new Criteria(expensesFld.BudgetId) == responseEntity.BudgetId.Value
                            ));

                    //switch (responseEntity.BudgetPeriod)
                    //{
                    //    case BudgetPeriod.Week:
                    //        expensesQuery.Where(
                    //            expensesFld.TransactionDate >= DateTime.Today.AddDays(-1 * (int)(DateTime.Today.DayOfWeek))
                    //        && expensesFld.TransactionDate <= DateTime.Today.AddDays(7- (int)(DateTime.Today.DayOfWeek))
                    //        );
                    //        break;
                    //    case BudgetPeriod.Month:
                    //        expensesQuery.Where(
                    //            expensesFld.TransactionDate >= new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1)
                    //            && expensesFld.TransactionDate <= new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1)
                    //        );
                    //        break;
                    //    case BudgetPeriod.Year:
                    //        break;
                    //    case null:
                    //        break;
                    //    default:
                    //        throw new ArgumentOutOfRangeException();
                    //}

                    var expensesPerBudged = Connection.Query<ExpensesRow>(expensesQuery).ToList();
                    responseEntity.Total = Decimal.Zero;
                    responseEntity.LeftAfterExpenses = Decimal.Zero;
                    if (expensesPerBudged.Any())
                    {
                        if (expensesPerBudged.Any(e => e.TransactionType.Value == TransactionType.Income))
                        {
                            var totalIncome =
                                expensesPerBudged
                                    .Where(e => e.TransactionType.Value == TransactionType.Income)
                                    .Select(s => s.Total).Aggregate((a, x) => a + x);
                            responseEntity.Total = totalIncome;
                        }

                        if (expensesPerBudged.Any(e => e.TransactionType.Value == TransactionType.Expense))
                        {
                            var totalExpenses =
                                expensesPerBudged
                                    .Where(e => e.TransactionType.Value == TransactionType.Expense)
                                    .Select(s => s.Total).Aggregate((a, x) => a + x);

                            responseEntity.LeftAfterExpenses = responseEntity.Total - totalExpenses;
                        }
                    }
                }
            }
        }
    }
}