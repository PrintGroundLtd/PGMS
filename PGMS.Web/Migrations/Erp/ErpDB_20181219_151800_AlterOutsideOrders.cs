using System;
using FluentMigrator;
using PGMS.Erp.Entities;
using Serenity.Data;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20181219151800)]
    public class ErpDB_20181219_151800_AlterOutsideOrders : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("OutsideOrders")
                .AddColumn("StartDate").AsDateTime().Nullable()
                ;
            
        }
    }
}
