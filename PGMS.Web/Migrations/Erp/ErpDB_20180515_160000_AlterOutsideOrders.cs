using System;
using FluentMigrator;
using PGMS.Erp.Entities;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180515160000)]
    public class ErpDB_20180515_160000_AlterOutsideOrders : AutoReversingMigration
    {
        public override void Up()
        {

            this.Alter.Table("OutsideOrders")
                .AddColumn("DeadLine").AsDateTime().Nullable()
                .AddColumn("AssignUserId").AsInt32().Nullable()
                .ForeignKey("Users", "UserId")
                ;

        }
    }
}
