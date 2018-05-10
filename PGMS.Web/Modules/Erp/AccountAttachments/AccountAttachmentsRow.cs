
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[AccountAttachments]")]
    [DisplayName("Account Attachments"), InstanceName("Account Attachment")]
    [ReadPermission(PermissionKeys.AccountAttachments.ReadPermission)]
    [UpdatePermission(PermissionKeys.AccountAttachments.UpdatePermission)]
    [DeletePermission(PermissionKeys.AccountAttachments.DeletePermission)]
    [LookupScript]
    public sealed class AccountAttachmentsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Account Attachment Id"), Identity]
        public Int32? AccountAttachmentId
        {
            get { return Fields.AccountAttachmentId[this]; }
            set { Fields.AccountAttachmentId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        [HtmlNoteContentEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("File Path"), NotNull]
        [MultipleFileUploadEditor]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Account"), NotNull, ForeignKey("[dbo].[Accounts]", "AccountId"), LeftJoin("jAccount"), TextualField("AccountName")]
        [LookupEditor(typeof(AccountsRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }
        

        [DisplayName("Account Name"), Expression("jAccount.[Name]")]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Account Phone Number"), Expression("jAccount.[PhoneNumber]")]
        public String AccountPhoneNumber
        {
            get { return Fields.AccountPhoneNumber[this]; }
            set { Fields.AccountPhoneNumber[this] = value; }
        }

        [DisplayName("Account Is Vip"), Expression("jAccount.[IsVip]")]
        public Int16? AccountIsVip
        {
            get { return Fields.AccountIsVip[this]; }
            set { Fields.AccountIsVip[this] = value; }
        }

        [DisplayName("Account Partner Type"), Expression("jAccount.[PartnerType]")]
        public Int32? AccountPartnerType
        {
            get { return Fields.AccountPartnerType[this]; }
            set { Fields.AccountPartnerType[this] = value; }
        }

        [DisplayName("Account Address"), Expression("jAccount.[Address]")]
        public String AccountAddress
        {
            get { return Fields.AccountAddress[this]; }
            set { Fields.AccountAddress[this] = value; }
        }

        [DisplayName("Account City"), Expression("jAccount.[City]")]
        public String AccountCity
        {
            get { return Fields.AccountCity[this]; }
            set { Fields.AccountCity[this] = value; }
        }

        [DisplayName("Account Country"), Expression("jAccount.[Country]")]
        public String AccountCountry
        {
            get { return Fields.AccountCountry[this]; }
            set { Fields.AccountCountry[this] = value; }
        }
        

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountAttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field AccountAttachmentId;
            public StringField Name;
            public StringField Description;
            public StringField FilePath;
            public Int32Field AccountId;

            public StringField AccountName;
            public StringField AccountPhoneNumber;
            public Int16Field AccountIsVip;
            public Int32Field AccountPartnerType;
            public StringField AccountAddress;
            public StringField AccountCity;
            public StringField AccountCountry;
		}
    }
}
