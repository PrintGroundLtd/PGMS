using System;
using FluentMigrator;
using PGMS.Erp.Entities;
using Serenity.Data;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20181108151800)]
    public class ErpDB_20181108_151800_AlterOrdersOutsideOrdersPayments : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Orders")
                .AddColumn("WithVat").AsInt16().WithDefaultValue(1)
                ;
            this.Alter.Table("OutsideOrders")
                .AddColumn("WithVat").AsInt16().WithDefaultValue(1)
                ;

            this.Alter.Table("Expenses")
                .AddColumn("DepositPayment").AsInt16().WithDefaultValue(0)
                ;
        }
    }
}
