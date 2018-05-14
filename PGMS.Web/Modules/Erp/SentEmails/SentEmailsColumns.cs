
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.SentEmails")]
    [BasedOnRow(typeof(Entities.SentEmailsRow), CheckNames = true)]
    public class SentEmailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SentEmailsId { get; set; }
        [EditLink]
        public String FromEmail { get; set; }
        public String FromName { get; set; }
        public String Subject { get; set; }
        public String ToEmail { get; set; }
        public String ToName { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public Int16 IsActive { get; set; }
    }
}