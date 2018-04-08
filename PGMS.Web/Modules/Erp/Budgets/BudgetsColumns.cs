
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.Budgets")]
    [BasedOnRow(typeof(Entities.BudgetsRow), CheckNames = true)]
    public class BudgetsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BudgetId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Total { get; set; }
        public Decimal LeftAfterExpenses { get; set; }
        public Int32 BudgetPeriod { get; set; }
        public String PaymentTypeName { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}