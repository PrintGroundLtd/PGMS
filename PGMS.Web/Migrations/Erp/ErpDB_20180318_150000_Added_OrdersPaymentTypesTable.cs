using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;


namespace PGMS.Migrations.DefaultDB
{

    [Migration(20180318150000)]
    public class ErpDB_20180318_150000_AddedOrdersPaymentTypesTable : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("PaymentTypes", "PaymentTypeId", s => s
                .WithColumn("Name").AsString(500).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            Insert.IntoTable("PaymentTypes").Row(new
            {
                Name = "Cache",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentTypes").Row(new
            {
                Name = "Bank payment",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("OrderStatuses", "OrderStatusId", s => s
                .WithColumn("Name").AsString(500).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            #region Seed Order statuses

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Question",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Question for another partner",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Offer",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Design",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Creating",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Manufacture",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Waiting for payment",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Delivery on place (Ekont)",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Finalize",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Waiting for advance",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Delivery",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Waiting for bank payment",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "Waiting for materials",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("OrderStatuses").Row(new
            {
                Name = "PrintGround payment",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            #endregion

            this.CreateTableWithId32("Orders", "OrderId", s => s
                .WithColumn("AccountId").AsInt32().Nullable()
                .ForeignKey("Accounts", "AccountId")
                .WithColumn("CompanyId").AsInt32().Nullable()
                .ForeignKey("Companies", "CompanyId")
                .WithColumn("PaymentTypeId").AsInt32().Nullable()
                .ForeignKey("PaymentTypes", "PaymentTypeId")

                .WithColumn("Width").AsInt16().Nullable()
                .WithColumn("Height").AsInt16().Nullable()
                .WithColumn("OrderDate").AsDateTime().NotNullable()
                .WithColumn("ShippedDate").AsDateTime().Nullable()
                .WithColumn("ShipName").AsString(500).Nullable()
                .WithColumn("ShipAddress").AsString(500).Nullable()
                .WithColumn("ShipCity").AsString(500).Nullable()
                .WithColumn("ShipCountry").AsString(500).Nullable()

                .WithColumn("UserId").AsInt32().Nullable()
                .ForeignKey("Users", "UserId")
                .WithColumn("OrderStatusId").AsInt32().Nullable()
                .ForeignKey("OrderStatuses", "OrderStatusId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("OrderDetails", "OrderDetailId", s => s
                .WithColumn("ProductId").AsInt32().Nullable()
                .ForeignKey("Products", "ProductId")
                .WithColumn("OrderId").AsInt32().Nullable()
                .ForeignKey("Orders", "OrderId")
            .WithColumn("UnitPrice").AsCurrency().NotNullable()
            .WithColumn("Quantity").AsInt16().NotNullable()
            .WithColumn("Discount").AsInt16().Nullable()

            );

        }
    }

}
