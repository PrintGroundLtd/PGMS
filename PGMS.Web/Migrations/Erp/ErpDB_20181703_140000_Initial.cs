using FluentMigrator;
using System;
using FluentMigrator.Builders.Create.Table;

namespace PGMS.Migrations.DefaultDB
{

    [Migration(20181703140000)]
    public class DefaultDB_20181703_140000_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            #region Notes
            Action<ICreateTableWithColumnSyntax> addCols = expr => expr
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();

            addCols(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Notes")
                .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable());

            addCols(IfDatabase("Oracle")
                .Create.Table("Notes")
                .WithColumn("NoteID").AsInt64().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Notes", "NoteID");


            #endregion

            #region PartnerTypes

            this.CreateTableWithId32("PartnerTypes", "PartnerTypeId", s => s
                .WithColumn("Name").AsString(500).NotNullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            Insert.IntoTable("PartnerTypes").Row(new
            {
                Name = "Partner",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PartnerTypes").Row(new
            {
                Name = "Client",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PartnerTypes").Row(new
            {
                Name = "Supplier",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            #endregion

            #region Attachments

            this.CreateTableWithId32("Attachments", "AttachmentId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Description").AsString().NotNullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            #endregion

            #region AccountAttachments

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("AccountAttachments")
                .WithColumn("AccountAttachmentID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("AttachmentId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("AccountAttachments")
                .WithColumn("AccountAttachmentID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("AttachmentId").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "AccountAttachments", "AccountAttachmentID");

            #endregion

            #region Account 

            this.CreateTableWithId32("Account", "AccountId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("PhoneNumber").AsString(500).Nullable()
                .WithColumn("IsVip").AsInt16().Nullable()
                .WithColumn("PartnerType").AsInt32().NotNullable()
                .ForeignKey("PartnerTypes", "PartnerTypeId")
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("City").AsString(500).Nullable()
                .WithColumn("Country").AsString(500).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            #endregion

            #region Companies
            
            this.CreateTableWithId32("Companies", "CompanyId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("PhoneNumber").AsString(500).Nullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("City").AsString(500).Nullable()
                .WithColumn("Country").AsString(500).Nullable()
                .WithColumn("Eik").AsString(500).Nullable()
                .WithColumn("Mol").AsString(500).Nullable()
                .WithColumn("Iban").AsString(500).Nullable()
                .WithColumn("BankName").AsString(500).Nullable()
                .WithColumn("BankSwift").AsString(200).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            #endregion
            
            #region CompanyAttachments

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("CompanyAttachments")
                .WithColumn("CompanyAttachmentID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CompanyId").AsInt32().NotNullable()
                .WithColumn("AttachmentId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("CompanyAttachments")
                .WithColumn("CompanyAttachmentID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("CompanyId").AsInt32().NotNullable()
                .WithColumn("AttachmentId").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "CompanyAttachments", "CompanyAttachmentID");

            #endregion

            #region AccountCompanies

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("AccountCompanies")
                .WithColumn("AccountCompanyID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("CompanyId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("AccountCompanies")
                .WithColumn("AccountCompanyID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("CompanyId").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "AccountAttachments", "AccountCompanyID");

            #endregion

            #region Suppliers

            this.CreateTableWithId32("Suppliers", "SupplierId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("PhoneNumber").AsString(500).Nullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("City").AsString(500).Nullable()
                .WithColumn("Country").AsString(500).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            #endregion

            #region SupplierRepresentatives

            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("SupplierRepresentatives")
                .WithColumn("RepresentativeID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("SupplierId").AsInt32().NotNullable();

            IfDatabase("Oracle")
                .Create.Table("SupplierRepresentatives")
                .WithColumn("RepresentativeID").AsInt32().PrimaryKey().NotNullable()
                .WithColumn("AccountId").AsInt32().NotNullable()
                .WithColumn("SupplierId").AsInt32().NotNullable();

            Utils.AddOracleIdentity(this, "SupplierRepresentatives", "RepresentativeID");

            #endregion
        }
    }
}