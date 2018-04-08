
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Budgets")]
    [BasedOnRow(typeof(Entities.BudgetsRow), CheckNames = true)]
    public class BudgetsForm
    {
        public String Name { get; set; }
        public Decimal Total { get; set; }
        public Int32 BudgetPeriod { get; set; }
        public Int32 PaymentTypeId { get; set; }
    }
}