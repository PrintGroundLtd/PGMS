
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.SentEmails")]
    [BasedOnRow(typeof(Entities.SentEmailsRow), CheckNames = true)]
    public class SentEmailsForm
    {
        [HalfWidth]
        public String FromEmail { get; set; }
        [HalfWidth]
        public String FromName { get; set; }

        public String Subject { get; set; }
        [HalfWidth]
        public String ToEmail { get; set; }
        [HalfWidth]
        public String ToName { get; set; }
        public String Attachments { get; set; }
        public String Body { get; set; }
    }
}