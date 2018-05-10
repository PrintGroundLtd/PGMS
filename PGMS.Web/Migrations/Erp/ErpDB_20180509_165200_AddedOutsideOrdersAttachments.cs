using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180509165200)]
    public class ErpDB_20180509_165200_AddedOutsideOrdersAttachments : AutoReversingMigration
    {
        public override void Up()
        {


            this.CreateTableWithId32("OutsideOrderAttachments", "OutsideOrderAttachmentId", s => s
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FilePath").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("OutsideOrderId").AsInt32().NotNullable()
                .ForeignKey("OutsideOrders", "OutsideOrderId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));


            this.CreateTableWithId32("OrderAttachments", "OrderAttachmentId", s => s
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FilePath").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("OrderId").AsInt32().NotNullable()
                .ForeignKey("Orders", "OrderId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));


            this.Alter.Table("OutsideOrders")
                .AddColumn("OrderStatusId").AsInt32().Nullable()
                .ForeignKey("OrderStatuses", "OrderStatusId");

            this.Alter.Table("Expenses")
                .AddColumn("UserId").AsInt32().Nullable()
                .ForeignKey("Users", "UserId");
        }
    }
}
