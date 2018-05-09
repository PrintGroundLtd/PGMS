﻿
using System.Collections.Generic;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[OutsideOrders]")]
    [DisplayName("Outside Orders"), InstanceName("Outside Order")]
    [ReadPermission(PermissionKeys.OutsideOrders.ReadPermission)]
    [UpdatePermission(PermissionKeys.OutsideOrders.UpdatePermission)]
    [DeletePermission(PermissionKeys.OutsideOrders.DeletePermission)]
    [LookupScript]
    public sealed class OutsideOrdersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Outside Order Id"), Identity]
        public Int32? OutsideOrderId
        {
            get { return Fields.OutsideOrderId[this]; }
            set { Fields.OutsideOrderId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Price They Offer"), Size(19), Scale(2)]
        [DecimalEditor]
        public Decimal? PriceTheyOffer
        {
            get { return Fields.PriceTheyOffer[this]; }
            set { Fields.PriceTheyOffer[this] = value; }
        }

        [DisplayName("Price We Sell"), Size(19), Scale(2)]
        [DecimalEditor]
        public Decimal? PriceWeSell
        {
            get { return Fields.PriceWeSell[this]; }
            set { Fields.PriceWeSell[this] = value; }
        }

        [DisplayName("Account Represents"), ForeignKey(typeof(AccountsRow)), LeftJoin("jAccountRepresents"), TextualField("AccountRepresentsName")]
        [LookupEditor(typeof(AccountsRow), FilterField = "IsActive", FilterValue = 1)]
        public Int32? AccountRepresentsId
        {
            get { return Fields.AccountRepresentsId[this]; }
            set { Fields.AccountRepresentsId[this] = value; }
        }

        [DisplayName("Company Represents"), ForeignKey(typeof(CompaniesRow)), LeftJoin("jCompanyRepresents"), TextualField("CompanyRepresentsName")]
        [LookupEditor(typeof(CompaniesRow), FilterField = "IsActive", FilterValue = 1)]
        public Int32? CompanyRepresentsId
        {
            get { return Fields.CompanyRepresentsId[this]; }
            set { Fields.CompanyRepresentsId[this] = value; }
        }
        
        [DisplayName("Account Represents Name"), Expression("jAccountRepresents.[Name]")]
        public String AccountRepresentsName
        {
            get { return Fields.AccountRepresentsName[this]; }
            set { Fields.AccountRepresentsName[this] = value; }
        }

        [DisplayName("Account Represents Phone Number"), Expression("jAccountRepresents.[PhoneNumber]")]
        public String AccountRepresentsPhoneNumber
        {
            get { return Fields.AccountRepresentsPhoneNumber[this]; }
            set { Fields.AccountRepresentsPhoneNumber[this] = value; }
        }

        [DisplayName("Account Represents Is Vip"), Expression("jAccountRepresents.[IsVip]")]
        public Int16? AccountRepresentsIsVip
        {
            get { return Fields.AccountRepresentsIsVip[this]; }
            set { Fields.AccountRepresentsIsVip[this] = value; }
        }

        [DisplayName("Account Represents Partner Type"), Expression("jAccountRepresents.[PartnerType]")]
        public Int32? AccountRepresentsPartnerType
        {
            get { return Fields.AccountRepresentsPartnerType[this]; }
            set { Fields.AccountRepresentsPartnerType[this] = value; }
        }

        [DisplayName("Account Represents Address"), Expression("jAccountRepresents.[Address]")]
        public String AccountRepresentsAddress
        {
            get { return Fields.AccountRepresentsAddress[this]; }
            set { Fields.AccountRepresentsAddress[this] = value; }
        }

        [DisplayName("Account Represents City"), Expression("jAccountRepresents.[City]")]
        public String AccountRepresentsCity
        {
            get { return Fields.AccountRepresentsCity[this]; }
            set { Fields.AccountRepresentsCity[this] = value; }
        }

        [DisplayName("Account Represents Country"), Expression("jAccountRepresents.[Country]")]
        public String AccountRepresentsCountry
        {
            get { return Fields.AccountRepresentsCountry[this]; }
            set { Fields.AccountRepresentsCountry[this] = value; }
        }
        

        [DisplayName("Company Represents Name"), Expression("jCompanyRepresents.[Name]")]
        public String CompanyRepresentsName
        {
            get { return Fields.CompanyRepresentsName[this]; }
            set { Fields.CompanyRepresentsName[this] = value; }
        }

        [DisplayName("Company Represents Phone Number"), Expression("jCompanyRepresents.[PhoneNumber]")]
        public String CompanyRepresentsPhoneNumber
        {
            get { return Fields.CompanyRepresentsPhoneNumber[this]; }
            set { Fields.CompanyRepresentsPhoneNumber[this] = value; }
        }

        [DisplayName("Company Represents Address"), Expression("jCompanyRepresents.[Address]")]
        public String CompanyRepresentsAddress
        {
            get { return Fields.CompanyRepresentsAddress[this]; }
            set { Fields.CompanyRepresentsAddress[this] = value; }
        }

        [DisplayName("Company Represents City"), Expression("jCompanyRepresents.[City]")]
        public String CompanyRepresentsCity
        {
            get { return Fields.CompanyRepresentsCity[this]; }
            set { Fields.CompanyRepresentsCity[this] = value; }
        }

        [DisplayName("Company Represents Country"), Expression("jCompanyRepresents.[Country]")]
        public String CompanyRepresentsCountry
        {
            get { return Fields.CompanyRepresentsCountry[this]; }
            set { Fields.CompanyRepresentsCountry[this] = value; }
        }

        [DisplayName("Company Represents Eik"), Expression("jCompanyRepresents.[Eik]")]
        public String CompanyRepresentsEik
        {
            get { return Fields.CompanyRepresentsEik[this]; }
            set { Fields.CompanyRepresentsEik[this] = value; }
        }

        [DisplayName("Company Represents Mol"), Expression("jCompanyRepresents.[Mol]")]
        public String CompanyRepresentsMol
        {
            get { return Fields.CompanyRepresentsMol[this]; }
            set { Fields.CompanyRepresentsMol[this] = value; }
        }

        [DisplayName("Company Represents Iban"), Expression("jCompanyRepresents.[Iban]")]
        public String CompanyRepresentsIban
        {
            get { return Fields.CompanyRepresentsIban[this]; }
            set { Fields.CompanyRepresentsIban[this] = value; }
        }

        [DisplayName("Company Represents Bank Name"), Expression("jCompanyRepresents.[BankName]")]
        public String CompanyRepresentsBankName
        {
            get { return Fields.CompanyRepresentsBankName[this]; }
            set { Fields.CompanyRepresentsBankName[this] = value; }
        }

        [DisplayName("Company Represents Bank Swift"), Expression("jCompanyRepresents.[BankSwift]")]
        public String CompanyRepresentsBankSwift
        {
            get { return Fields.CompanyRepresentsBankSwift[this]; }
            set { Fields.CompanyRepresentsBankSwift[this] = value; }
        }
        [DisplayName("Description")]
        [HtmlNoteContentEditor]
        public string Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }
        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OutsideOrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutsideOrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field OutsideOrderId;
            public StringField Name;
            public DecimalField PriceTheyOffer;
            public DecimalField PriceWeSell;
            public Int32Field AccountRepresentsId;
            public Int32Field CompanyRepresentsId;
            public StringField Description;

            public StringField AccountRepresentsName;
            public StringField AccountRepresentsPhoneNumber;
            public Int16Field AccountRepresentsIsVip;
            public Int32Field AccountRepresentsPartnerType;
            public StringField AccountRepresentsAddress;
            public StringField AccountRepresentsCity;
            public StringField AccountRepresentsCountry;

            public StringField CompanyRepresentsName;
            public StringField CompanyRepresentsPhoneNumber;
            public StringField CompanyRepresentsAddress;
            public StringField CompanyRepresentsCity;
            public StringField CompanyRepresentsCountry;
            public StringField CompanyRepresentsEik;
            public StringField CompanyRepresentsMol;
            public StringField CompanyRepresentsIban;
            public StringField CompanyRepresentsBankName;
            public StringField CompanyRepresentsBankSwift;

            public RowListField<NoteRow> NoteList;

        }
    }
}
