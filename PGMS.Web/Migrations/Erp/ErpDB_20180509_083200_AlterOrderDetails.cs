using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180509083200)]
    public class ErpDB_20180509_083200_AlterOrderDetails : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("OrderDetails")
                .AddColumn("Description").AsString(Int32.MaxValue).Nullable()
                .AddColumn("Width").AsDecimal(8, 2).Nullable()
                .AddColumn("Height").AsDecimal(8, 2).Nullable();

            Alter.Table("Orders")
                .AddColumn("DeadLine").AsDateTime().Nullable();
        }
    }
}
