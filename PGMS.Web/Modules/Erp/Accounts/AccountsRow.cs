
using System.Collections.Generic;
using PMGS.Erp;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Accounts]")]
    [DisplayName("Accounts"), InstanceName("Account")]
    [ReadPermission(PermissionKeys.Accounts.ReadPermission)]
    [UpdatePermission(PermissionKeys.Accounts.UpdatePermission)]
    [DeletePermission(PermissionKeys.Accounts.DeletePermission)]
    [LookupScript]
    public sealed class AccountsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Account Id"), Identity]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone Number"), Size(500)]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Is Vip")]
        [BooleanEditor]
        public Int16? IsVip
        {
            get { return Fields.IsVip[this]; }
            set { Fields.IsVip[this] = value; }
        }

        [DisplayName("Partner Type"), NotNull, ForeignKey("[dbo].[PartnerTypes]", "PartnerTypeId"), LeftJoin("jPartnerType"), TextualField("PartnerTypeName")]
        [LookupEditor(typeof(PartnerTypesRow), InplaceAdd = false, FilterField = "IsActive", FilterValue = 1)]
        public Int32? PartnerType
        {
            get { return Fields.PartnerType[this]; }
            set { Fields.PartnerType[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(500)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Size(500)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }
        
        [DisplayName("Partner Type Name"), Expression("jPartnerType.[Name]")]
        public String PartnerTypeName
        {
            get { return Fields.PartnerTypeName[this]; }
            set { Fields.PartnerTypeName[this] = value; }
        }

        [LookupEditor(typeof(CompaniesRow), Multiple = true, InplaceAdd = true, FilterField = "IsActive", FilterValue = 1), NotMapped]
        [LinkingSetRelation(typeof(AccountCompaniesRow), "AccountId", "CompanyId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> AccountCompanies
        {
            get { return Fields.AccountCompanies[this]; }
            set { Fields.AccountCompanies[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field AccountId;
            public StringField Name;
            public StringField PhoneNumber;
            public Int16Field IsVip;
            public Int32Field PartnerType;
            public StringField Address;
            public StringField City;
            public ListField<Int32> AccountCompanies;
            public StringField Country;

            public RowListField<NoteRow> NoteList;
            public StringField PartnerTypeName;
        }
    }
}
