using System;
using FluentMigrator;
using PGMS.Erp.Entities;
using Serenity.Data;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20181107101800)]
    public class ErpDB_20181107_101800_AlterOrders : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Orders")
                .AddColumn("Name").AsString(600).Nullable()
                .AddColumn("CuttingByOne").AsInt16().WithDefaultValue(0)
                .AddColumn("NotReal").AsInt16().WithDefaultValue(0)
                .AddColumn("StartDate").AsDateTime().Nullable()
                ;

        }
    }
}
