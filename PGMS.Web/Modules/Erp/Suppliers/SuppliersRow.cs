
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Suppliers]")]
    [DisplayName("Suppliers"), InstanceName("Suppliers")]
    [ReadPermission("Erp:Suppliers:General")]
    [ModifyPermission("Erp:Suppliers:General")]
    public sealed class SuppliersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Supplier Id"), Identity]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
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
        
        IIdField IIdRow.IdField
        {
            get { return Fields.SupplierId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SuppliersRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field SupplierId;
            public StringField Name;
            public StringField PhoneNumber;
            public StringField Address;
            public StringField City;
            public StringField Country;
		}
    }
}
