
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Partners]")]
    [DisplayName("Partners"), InstanceName("Partner")]
    [ReadPermission(PermissionKeys.Partners.ReadPermission)]
    [UpdatePermission(PermissionKeys.Partners.UpdatePermission)]
    [DeletePermission(PermissionKeys.Partners.DeletePermission)]
    [LookupScript]
    public sealed class PartnersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Partner Id"), Identity]
        public Int32? PartnerId
        {
            get { return Fields.PartnerId[this]; }
            set { Fields.PartnerId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Hard Percent"), NotNull]
        public Int32? HardPercent
        {
            get { return Fields.HardPercent[this]; }
            set { Fields.HardPercent[this] = value; }
        }

        [DisplayName("Partner Type"), NotNull, ForeignKey("[dbo].[PartnerTypes]", "PartnerTypeId"), LeftJoin("jPartnerType"), TextualField("PartnerTypeName")]
        [LookupEditor(typeof(PartnerTypesRow), InplaceAdd = false, FilterField = "IsActive", FilterValue = 1)]
        [MinSelectLevel(SelectLevel.Details), QuickFilter()]
        public Int32? PartnerType
        {
            get { return Fields.PartnerType[this]; }
            set { Fields.PartnerType[this] = value; }
        }
        [DisplayName("Partner Type Name"), Expression("jPartnerType.[Name]"), QuickSearch()]
        public String PartnerTypeName
        {
            get { return Fields.PartnerTypeName[this]; }
            set { Fields.PartnerTypeName[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.PartnerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PartnersRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field PartnerId;
            public StringField Name;
            public Int32Field HardPercent;
            public Int32Field PartnerType;
            public StringField PartnerTypeName;

        }
    }
}
