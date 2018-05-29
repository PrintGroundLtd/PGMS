
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.ExpensesAttachments")]
    [BasedOnRow(typeof(Entities.ExpensesAttachmentsRow), CheckNames = true)]
    public class ExpensesAttachmentsForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public String FilePath { get; set; }
        public Int32 ExpenseId { get; set; }
    }
}