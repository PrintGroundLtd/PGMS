
using System.Collections.Generic;

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
    [DisplayName("Suppliers"), InstanceName("Supplier")]
    [LookupScript]
    [ReadPermission(PermissionKeys.Suppliers.ReadPermission)]
    [UpdatePermission(PermissionKeys.Suppliers.UpdatePermission)]
    [DeletePermission(PermissionKeys.Suppliers.DeletePermission)]
    public sealed class SuppliersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Supplier Id"), Identity, QuickSearch]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch, SortOrder(1)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone Number"), Size(500), QuickSearch]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Address"), Size(500), QuickSearch]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(500), QuickSearch]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Size(500), QuickSearch]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }


        [LookupEditor(typeof(AccountsRow), Multiple = true, InplaceAdd = true, FilterField = "IsActive", FilterValue = 1), NotMapped]
        [LinkingSetRelation(typeof(SupplierRepresentativesRow), "SupplierId", "AccountId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter()]
        // [QuickFilter(CssClass = "hidden-xs")]
        [DisplayName("Supplier Representatives")]
        public List<Int32> SupplierRepresentatives
        {
            get { return Fields.SupplierRepresentatives[this]; }
            set { Fields.SupplierRepresentatives[this] = value; }
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
            public ListField<Int32> SupplierRepresentatives;

        }
    }
}
