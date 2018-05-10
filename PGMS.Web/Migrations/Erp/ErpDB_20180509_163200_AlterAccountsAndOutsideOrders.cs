using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180509163200)]
    public class ErpDB_20180509_163200_AlterAccountsAndOutsideOrders : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("OutsideOrders")
                .AddColumn("Description").AsString(Int32.MaxValue).Nullable();

            Alter.Table("Accounts")
                .AddColumn("Email").AsString(500).Nullable();
        }
    }
}
