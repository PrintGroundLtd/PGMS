
using PGMS.Common;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[OrderStatuses]")]
    [DisplayName("Order Statuses"), InstanceName("Order Status")]
    [ReadPermission(PermissionKeys.OrderStatuses.ReadPermission)]
    [UpdatePermission(PermissionKeys.OrderStatuses.UpdatePermission)]
    [DeletePermission(PermissionKeys.OrderStatuses.DeletePermission)]
    [LookupScript]
    public sealed class OrderStatusesRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Order Status Id"), Identity]
        public Int32? OrderStatusId
        {
            get { return Fields.OrderStatusId[this]; }
            set { Fields.OrderStatusId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Border Color"), Size(200), NotNull]
        [ColorPickerEditor]
        public String BorderColor
        {
            get { return Fields.BorderColor[this]; }
            set { Fields.BorderColor[this] = value; }
        }

        [DisplayName("Background Color"), Size(200), NotNull]
        [ColorPickerEditor]
        public String BackgroundColor
        {
            get { return Fields.BackgroundColor[this]; }
            set { Fields.BackgroundColor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderStatusId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderStatusesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field OrderStatusId;
            public StringField Name;
            public StringField BorderColor;
            public StringField BackgroundColor;
        }
    }
}
