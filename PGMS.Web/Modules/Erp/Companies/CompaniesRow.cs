
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Companies]")]
    [DisplayName("Companies"), InstanceName("Company")]
    [ReadPermission(PermissionKeys.Companies.ReadPermission)]
    [UpdatePermission(PermissionKeys.Companies.UpdatePermission)]
    [DeletePermission(PermissionKeys.Companies.DeletePermission)]
    [LookupScript]
    public sealed class CompaniesRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Company Id"), Identity]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone Number"), Size(500)]
        public String PhoneNumber
        {
            get { return Fields.PhoneNumber[this]; }
            set { Fields.PhoneNumber[this] = value; }
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(500)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Country"), Size(500)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Eik"), Size(500)]
        public String Eik
        {
            get { return Fields.Eik[this]; }
            set { Fields.Eik[this] = value; }
        }

        [DisplayName("Mol"), Size(500)]
        public String Mol
        {
            get { return Fields.Mol[this]; }
            set { Fields.Mol[this] = value; }
        }

        [DisplayName("Iban"), Size(500)]
        public String Iban
        {
            get { return Fields.Iban[this]; }
            set { Fields.Iban[this] = value; }
        }

        [DisplayName("Bank Name"), Size(500)]
        public String BankName
        {
            get { return Fields.BankName[this]; }
            set { Fields.BankName[this] = value; }
        }

        [DisplayName("Bank Swift"), Size(200)]
        public String BankSwift
        {
            get { return Fields.BankSwift[this]; }
            set { Fields.BankSwift[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.CompanyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CompaniesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field CompanyId;
            public StringField Name;
            public StringField PhoneNumber;
            public StringField Address;
            public StringField City;
            public StringField Country;
            public StringField Eik;
            public StringField Mol;
            public StringField Iban;
            public StringField BankName;
            public StringField BankSwift;
		}
    }
}
