using System;
using FluentMigrator;
using PGMS.Erp.Entities;
using Serenity.Data;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180606190800)]
    public class ErpDB_20180606_190800_AlterExpenses : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Expenses")
                .AddColumn("WithVat").AsInt16().Nullable().WithDefaultValue(0)
                .AddColumn("AccountId").AsInt32().Nullable()
                .ForeignKey("Accounts", "AccountId");


        }
    }
}
