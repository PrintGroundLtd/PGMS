using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PGMS.Migrations.DefaultDB
{

    [Migration(20180318140000)]
    public class ErpDB_20180318_140000_AddedProductTable : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Products", "ProductId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("ProductImage").AsString(100).Nullable()
                .WithColumn("Discontinued").AsBoolean().Nullable()
                .WithColumn("SupplierId").AsInt32().Nullable()
                .ForeignKey("Suppliers", "SupplierId")
                .WithColumn("QuantityPerUnit").AsString(20).Nullable()
                .WithColumn("UnitPrice").AsCurrency().Nullable()
                .WithColumn("UnitsInStock").AsInt16().Nullable()
                .WithColumn("UnitsOnOrder").AsInt16().Nullable()
                .WithColumn("ReorderLevel").AsInt16().Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

        }
    }
}
