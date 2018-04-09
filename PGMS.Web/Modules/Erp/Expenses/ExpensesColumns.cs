﻿
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ExpenseId { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Decimal Total { get; set; }
        public DateTime TransactionDate { get; set; }
        public String BudgetName { get; set; }
        public String PaymentTypeName { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}