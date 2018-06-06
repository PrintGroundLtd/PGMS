
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
        [FilterOnly()]
        public int UserId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ExpenseId { get; set; }
        [FilterOnly()]
        public Int32 BudgetId { get; set; }
        [QuickFilter(), FilterOnly()]
        public int AccountId { get; set; }
        [EditLink]
        [AccountFormatter(IsVipProperty = "AccountIsVip")]
        public String AccountName { get; set; }
        [EditLink]
        public String AccountPhoneNumber { get; set; }
        [EditLink]
        public String AccountEmail { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Total { get; set; }
        [CheckboxColoredFormatter]
        public Boolean WithVat { get; set; }
        public DateTime TransactionDate { get; set; }
        public String BudgetName { get; set; }
        [TransactionTypeFormatter]
        public Int16 TransactionType { get; set; }
        public String PaymentTypeName { get; set; }
        public Int32 OrderName { get; set; }
        public Int32 OutsideOrderName { get; set; }
        public String UserDisplayName { get; set; }

        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}