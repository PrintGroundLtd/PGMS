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
                .AddColumn("AdditionalCosts").AsCurrency().Nullable();

            Alter.Table("Products")
                .AddColumn("Description").AsString(Int32.MaxValue).Nullable()
                .AddColumn("UnitPriceWithDDS").AsCurrency().Nullable()
                .AddColumn("UnitPricePartner").AsCurrency().Nullable();

            Alter.Table("Expenses")
                .AddColumn("Name").AsString(200).NotNullable().WithDefaultValue("Add Name")
                .AddColumn("ExpenseType").AsInt16().NotNullable().WithDefaultValue(0);

        }
    }
}
