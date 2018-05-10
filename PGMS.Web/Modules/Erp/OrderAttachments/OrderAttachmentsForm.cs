
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.OrderAttachments")]
    [BasedOnRow(typeof(Entities.OrderAttachmentsRow), CheckNames = true)]
    public class OrderAttachmentsForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public String FilePath { get; set; }
        public Int32 OrderId { get; set; }
    }
}