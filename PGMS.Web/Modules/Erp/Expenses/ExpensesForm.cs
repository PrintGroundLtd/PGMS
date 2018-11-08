
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
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public Decimal Total { get; set; }
        [HalfWidth]
        public Int16 TransactionType { get; set; }
        [DefaultValue("now")]
        [HalfWidth]
        public DateTime TransactionDate { get; set; }

        [DefaultValue(1)]
        [HalfWidth]
        public Int32 PaymentTypeId { get; set; }

        [HalfWidth]
        public Int32 BudgetId { get; set; }
        [OneThirdWidth]
        public Boolean WithVat { get; set; }
        [OneThirdWidth]
        public Boolean DepositPayment { get; set; }
       
        [Category("Optional")]
        public String Description { get; set; }

        [Tab("Related to")]
        public Int32 AccountId { get; set; }
        public Int32 OrderId { get; set; }
        public Int32 OutsideOrderId { get; set; }
        public Int32 UserId { get; set; }

        public List<object> NoteList { get; set; }

    }
}