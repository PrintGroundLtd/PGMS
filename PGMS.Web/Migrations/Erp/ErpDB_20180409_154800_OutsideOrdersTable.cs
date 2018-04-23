using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentMigrator;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180409154800)]
    public class ErpDB_20180409_154800_OutsideOrdersTable : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("OutsideOrders", "OutsideOrderId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("PriceTheyOffer").AsCurrency().Nullable()
                .WithColumn("PriceWeSell").AsCurrency().Nullable()
                .WithColumn("AccountRepresentsId").AsInt32().Nullable()
                .ForeignKey("Accounts", "AccountId")
                .WithColumn("CompanyRepresentsId").AsInt32().Nullable()
                .ForeignKey("Companies", "CompanyId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
        }
    }
}
