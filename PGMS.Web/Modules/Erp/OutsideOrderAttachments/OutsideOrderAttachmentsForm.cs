
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.OutsideOrderAttachments")]
    [BasedOnRow(typeof(Entities.OutsideOrderAttachmentsRow), CheckNames = true)]
    public class OutsideOrderAttachmentsForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public String FilePath { get; set; }
        public Int32 OutsideOrderId { get; set; }
    }
}