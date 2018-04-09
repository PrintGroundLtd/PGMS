using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180408155500)]
    public class ErpDB_20180408_155500_BudgetsExpensesPartners : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Budgets", "BudgetId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Total").AsCurrency().Nullable()
                .WithColumn("PaymentTypeId").AsInt32().NotNullable()
                .ForeignKey("PaymentTypes", "PaymentTypeId")
                .WithColumn("BudgetPeriod").AsInt32().Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            Insert.IntoTable("Budgets").Row(new
            {
                Name = "Budged for media, inks and materials",
                BudgetPeriod = 1,
                PaymentTypeId = 1,
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("Budgets").Row(new
            {
                Name = "Budged for office thinks",
                BudgetPeriod = 1,
                PaymentTypeId = 1,
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("Budgets").Row(new
            {
                Name = "Budged for cars and machines",
                BudgetPeriod = 1,
                PaymentTypeId = 1,
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("Budgets").Row(new
            {
                Name = "Salaries",
                BudgetPeriod = 1,
                PaymentTypeId = 1,
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("Expenses", "ExpenseId", s => s
                .WithColumn("Description").AsString(500).NotNullable()
                .WithColumn("Total").AsCurrency().Nullable()
                .WithColumn("TransactionDate").AsDateTime().NotNullable()

                .WithColumn("BudgetId").AsInt32().NotNullable()
                .ForeignKey("Budgets", "BudgetId")
                .WithColumn("PaymentTypeId").AsInt32().NotNullable()
                .ForeignKey("PaymentTypes", "PaymentTypeId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("Partners", "PartnerId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("HardPercent").AsInt32().NotNullable()
                .WithColumn("PartnerType").AsInt32().NotNullable()
                .ForeignKey("PartnerTypes", "PartnerTypeId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
        }
    }
}
