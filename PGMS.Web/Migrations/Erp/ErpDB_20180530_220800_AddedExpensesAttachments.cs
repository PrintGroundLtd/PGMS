using System;
using FluentMigrator;
using PGMS.Erp.Entities;
using Serenity.Data;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180530220800)]
    public class ErpDB_20180530_220800_AddedExpensesAttachments : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("ExpensesAttachments", "ExpenseAttachmentId", s => s
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FilePath").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("ExpenseId").AsInt32().NotNullable()
                .ForeignKey("Expenses", "ExpenseId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));


        }
    }
}
