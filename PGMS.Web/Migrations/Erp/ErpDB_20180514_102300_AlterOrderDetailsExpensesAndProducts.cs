using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180514102300)]
    public class ErpDB_20180514_102300_AlterOrderDetailsExpensesAndProducts : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("OrderDetails")
                .AddColumn("AdditionalCosts").AsDecimal(18, 6).Nullable();

            Alter.Table("Products")
                .AddColumn("Description").AsString(Int32.MaxValue).Nullable()
                .AddColumn("UnitPriceWithDDS").AsCurrency().Nullable()
                .AddColumn("UnitPricePartner").AsCurrency().Nullable();

            Alter.Table("Expenses")
                .AddColumn("TransactionType").AsInt16().NotNullable().WithDefaultValue(1);

        }
    }
}
