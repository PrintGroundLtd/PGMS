
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[SentEmails]")]
    [DisplayName("Sent Emails"), InstanceName("Email")]
    [ReadPermission(PermissionKeys.SentEmails.ReadPermission)]
    [UpdatePermission(PermissionKeys.SentEmails.UpdatePermission)]
    [DeletePermission(PermissionKeys.SentEmails.DeletePermission)]
    [LookupScript]
    public sealed class SentEmailsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Sent Emails Id"), Identity]
        public Int32? SentEmailsId
        {
            get { return Fields.SentEmailsId[this]; }
            set { Fields.SentEmailsId[this] = value; }
        }

        [DisplayName("From Email"), Size(200), NotNull, QuickSearch]
        [EmailEditor]
        [Updatable(false)]
        public String FromEmail
        {
            get { return Fields.FromEmail[this]; }
            set { Fields.FromEmail[this] = value; }
        }

        [DisplayName("From Name"), Size(200), NotNull]
        [Updatable(false)]
        public String FromName
        {
            get { return Fields.FromName[this]; }
            set { Fields.FromName[this] = value; }
        }

        [DisplayName("Subject"), Size(200), NotNull]
        [Updatable(false)]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Body"), NotNull]
        [HtmlContentEditor(Rows = 20)]
        [Updatable(false)]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("To Email"), Size(200), NotNull]
        [EmailEditor]
        [Updatable(false)]
        public String ToEmail
        {
            get { return Fields.ToEmail[this]; }
            set { Fields.ToEmail[this] = value; }
        }

        [DisplayName("To Name"), Size(200), NotNull]
        [Updatable(false)]
        public String ToName
        {
            get { return Fields.ToName[this]; }
            set { Fields.ToName[this] = value; }
        }
        [DisplayName("Attachments")]
        [MultipleFileUploadEditor(AllowNonImage = true, CopyToHistory = true, FilenameFormat = "SentEmails/~")]
        [Updatable(false)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SentEmailsId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FromEmail; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SentEmailsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field SentEmailsId;
            public StringField FromEmail;
            public StringField FromName;
            public StringField Subject;
            public StringField Body;
            public StringField ToEmail;
            public StringField ToName;
            public StringField Attachments;
        }
    }
}
