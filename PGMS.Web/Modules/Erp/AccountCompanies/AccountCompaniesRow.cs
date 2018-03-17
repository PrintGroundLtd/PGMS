using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace PGMS.Erp.Entities
{
    [ConnectionKey("Default"), Module("Erp"), TableName("AccountCompanies")]
    [DisplayName("AccountCompanies"), InstanceName("AccountCompany")]
    [ReadPermission(PermissionKeys.Companies.ReadPermission)]
    [ModifyPermission(PermissionKeys.Companies.UpdatePermission)]
    public sealed class AccountCompaniesRow : Row, IIdRow
    {
        [DisplayName("AccountCompany ID"), Column("AccountCompanyID"), Identity]
        public Int32? AccountCompanyID
        {
            get { return Fields.AccountCompanyID[this]; }
            set { Fields.AccountCompanyID[this] = value; }
        }

        [DisplayName("Account Id"), Column("AccountId"), NotNull]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Company Id"), Column("CompanyId"), NotNull]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AccountCompanyID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AccountCompaniesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AccountCompanyID;
            public Int32Field AccountId;
            public Int32Field CompanyId;
        }
    }
}
