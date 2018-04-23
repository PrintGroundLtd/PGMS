
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[PaymentTypes]")]
    [DisplayName("Payment Types"), InstanceName("Payment Type")]
    [ReadPermission(PermissionKeys.PaymentTypes.ReadPermission)]
    [UpdatePermission(PermissionKeys.PaymentTypes.UpdatePermission)]
    [DeletePermission(PermissionKeys.PaymentTypes.DeletePermission)]
    [LookupScript]
    public sealed class PaymentTypesRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Payment Type Id"), Identity]
        public Int32? PaymentTypeId
        {
            get { return Fields.PaymentTypeId[this]; }
            set { Fields.PaymentTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.PaymentTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaymentTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field PaymentTypeId;
            public StringField Name;
		}
    }
}
