using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180518093000)]
    public class ErpDB_20180518_093000_AlterOrders : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("Orders")
                .AddColumn("CuttingManual").AsBoolean().Nullable()
                .AddColumn("CuttingMachine").AsBoolean().Nullable()
                .AddColumn("Printing").AsBoolean().Nullable()
                .AddColumn("Laminating").AsBoolean().Nullable()
                .AddColumn("TransportFolio").AsBoolean().Nullable()
                .AddColumn("Cleaning").AsBoolean().Nullable()
                .AddColumn("Cashing").AsBoolean().Nullable()
                ;

        }
    }
}
