using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180423200500)]
    public class ErpDB_20180423_200500_AlterOrderStatus : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("OrderStatuses")
                .AddColumn("BorderColor").AsString(200).Nullable().WithDefaultValue("#a2ed02")
                .AddColumn("BackgroundColor").AsString(200).Nullable().WithDefaultValue("#a2ed02");
        }
    }
}
