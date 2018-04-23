using System;
using FluentMigrator;

namespace PGMS.Migrations.DefaultDB
{
    [Migration(20180409164800)]
    public class ErpDB_20180409_164800_SentEmailsTable : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("SentEmails", "SentEmailsId", s => s
                .WithColumn("FromEmail").AsString(200).NotNullable()
                .WithColumn("FromName").AsString(200).NotNullable()
                .WithColumn("Subject").AsString(200).NotNullable()
                .WithColumn("Body").AsString(Int32.MaxValue).NotNullable()
                .WithColumn("ToEmail").AsString(200).NotNullable()
                .WithColumn("ToName").AsString(200).NotNullable()
                .WithColumn("Attachments").AsString(Int32.MaxValue).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
            
        }
    }
}
