
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
        [Tab("General")]
        [Category("Required")]
        public String Name { get; set; }
        public Decimal Total { get; set; }
        public Int16 TransactionType { get; set; } 
      
        [DefaultValue(1)]
        public Int32 PaymentTypeId { get; set; }
        [DefaultValue("now")]
        public DateTime TransactionDate { get; set; }
        public Int32 BudgetId { get; set; }
        [Category("Optional")]
        public String Description { get; set; }

        [Tab("Related to")]
        public Int32 OrderId { get; set; }
        public Int32 OutsideOrderId { get; set; }
        public Int32 UserId { get; set; }

        public List<object> NoteList { get; set; }

    }
}