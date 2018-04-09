
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesForm
    {
        public String Description { get; set; }
        public Decimal Total { get; set; }
        [DefaultValue("now")]
        public DateTime TransactionDate { get; set; }

        public Int32 BudgetId { get; set; }
        public Int32 PaymentTypeId { get; set; }
    }
}