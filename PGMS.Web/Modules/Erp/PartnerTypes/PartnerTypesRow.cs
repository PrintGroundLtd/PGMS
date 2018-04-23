
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[PartnerTypes]")]
    [DisplayName("Partner Types"), InstanceName("Partner Type")]
    [ReadPermission(PermissionKeys.PartnerTypes.ReadPermission)]
    [UpdatePermission(PermissionKeys.PartnerTypes.UpdatePermission)]
    [DeletePermission(PermissionKeys.PartnerTypes.DeletePermission)]
    [LookupScript]
    public sealed class PartnerTypesRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Partner Type Id"), Identity]
        public Int32? PartnerTypeId
        {
            get { return Fields.PartnerTypeId[this]; }
            set { Fields.PartnerTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch, SortOrder(1)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.PartnerTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PartnerTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field PartnerTypeId;
            public StringField Name;
		}
    }
}
