
using PGMS.Erp.Entities;

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
        public String Name { get; set; }
        public String Description { get; set; }
        public Decimal Total { get; set; }
        public Int16 TransactionType { get; set; }
        public Int32 BudgetId { get; set; }
        [DefaultValue(1)]
        public Int32 PaymentTypeId { get; set; }
        public Int32 UserId { get; set; }
        [DefaultValue("now")]
        public DateTime TransactionDate { get; set; }

    }
}