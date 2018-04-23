
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[SupplierRepresentatives]")]
    [DisplayName("Supplier Representatives"), InstanceName("Supplier Representatives")]
    [ReadPermission(PermissionKeys.Suppliers.ReadPermission)]
    [ModifyPermission(PermissionKeys.Suppliers.UpdatePermission)]
    public sealed class SupplierRepresentativesRow : Row, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity]
        public Int32? RepresentativeId
        {
            get { return Fields.RepresentativeId[this]; }
            set { Fields.RepresentativeId[this] = value; }
        }

        [DisplayName("Account Id"), NotNull]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Supplier Id"), NotNull]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RepresentativeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupplierRepresentativesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeId;
            public Int32Field AccountId;
            public Int32Field SupplierId;
		}
    }
}
