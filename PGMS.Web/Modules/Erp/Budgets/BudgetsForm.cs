
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
        [Category("General")]
        [Hidden]
        public Int32 BudgetId { get; set; }
        public String Name { get; set; }
       // public Decimal Total { get; set; }
        [HalfWidth]
        public DateTime StartDate { get; set; }
        [HalfWidth]
        public DateTime EndDate { get; set; }
        //public Int32 BudgetPeriod { get; set; }
        public Int32 PaymentTypeId { get; set; }
        public List<object> NoteList { get; set; }

    }
}