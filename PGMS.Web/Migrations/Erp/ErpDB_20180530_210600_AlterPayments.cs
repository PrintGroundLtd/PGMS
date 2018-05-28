using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180530210600)]
    public class ErpDB_20180530_210600_AlterPayments : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Expenses")
                .AddColumn("OrderId").AsInt32().Nullable()
                .ForeignKey("Orders", "OrderId")
                .AddColumn("OutsideOrderId").AsInt32().Nullable()
                .ForeignKey("OutsideOrders", "OutsideOrderId")
                ;

        }
    }
}
