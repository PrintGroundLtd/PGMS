﻿
using PGMS.Administration.Entities;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Orders]")]
    [DisplayName("Orders"), InstanceName("Order")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class OrdersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "AccountId"), LeftJoin("jAccount"), TextualField("AccountName")]
        [LookupEditor(typeof(AccountsRow))]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Company"), ForeignKey("[dbo].[Companies]", "CompanyId"), LeftJoin("jCompany"), TextualField("CompanyName")]
        [LookupEditor(typeof(CompaniesRow))]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Payment Type"), ForeignKey("[dbo].[PaymentTypes]", "PaymentTypeId"), LeftJoin("jPaymentType"), TextualField("PaymentTypeName")]
        [LookupEditor(typeof(PaymentTypesRow))]
        public Int32? PaymentTypeId
        {
            get { return Fields.PaymentTypeId[this]; }
            set { Fields.PaymentTypeId[this] = value; }
        }

        [DisplayName("Width")]
        public Int16? Width
        {
            get { return Fields.Width[this]; }
            set { Fields.Width[this] = value; }
        }

        [DisplayName("Height")]
        public Int16? Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }

        [DisplayName("Order Date"), NotNull]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Shipped Date"), NotNull]
        public DateTime? ShippedDate
        {
            get { return Fields.ShippedDate[this]; }
            set { Fields.ShippedDate[this] = value; }
        }

        [DisplayName("Ship Name"), Size(500), QuickSearch]
        public String ShipName
        {
            get { return Fields.ShipName[this]; }
            set { Fields.ShipName[this] = value; }
        }

        [DisplayName("Ship Address"), Size(500)]
        public String ShipAddress
        {
            get { return Fields.ShipAddress[this]; }
            set { Fields.ShipAddress[this] = value; }
        }

        [DisplayName("Ship City"), Size(500)]
        public String ShipCity
        {
            get { return Fields.ShipCity[this]; }
            set { Fields.ShipCity[this] = value; }
        }

        [DisplayName("Ship Country"), Size(500)]
        public String ShipCountry
        {
            get { return Fields.ShipCountry[this]; }
            set { Fields.ShipCountry[this] = value; }
        }

        [DisplayName("Assignet to User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(UserRow))]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Order Status"), ForeignKey("[dbo].[OrderStatuses]", "OrderStatusId"), LeftJoin("jOrderStatus"), TextualField("OrderStatusName")]
        [LookupEditor(typeof(OrderStatusesRow))]
        public Int32? OrderStatusId
        {
            get { return Fields.OrderStatusId[this]; }
            set { Fields.OrderStatusId[this] = value; }
        }
        
        [DisplayName("Account Name"), Expression("jAccount.[Name]")]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Account Phone Number"), Expression("jAccount.[PhoneNumber]")]
        public String AccountPhoneNumber
        {
            get { return Fields.AccountPhoneNumber[this]; }
            set { Fields.AccountPhoneNumber[this] = value; }
        }

        [DisplayName("Account Is Vip"), Expression("jAccount.[IsVip]")]
        public Int16? AccountIsVip
        {
            get { return Fields.AccountIsVip[this]; }
            set { Fields.AccountIsVip[this] = value; }
        }

        [DisplayName("Account Partner Type"), Expression("jAccount.[PartnerType]")]
        public Int32? AccountPartnerType
        {
            get { return Fields.AccountPartnerType[this]; }
            set { Fields.AccountPartnerType[this] = value; }
        }
        

        [DisplayName("Company Name"), Expression("jCompany.[Name]")]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }
        

        [DisplayName("Payment Type Name"), Expression("jPaymentType.[Name]")]
        public String PaymentTypeName
        {
            get { return Fields.PaymentTypeName[this]; }
            set { Fields.PaymentTypeName[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }
        

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }
        

        [DisplayName("Order Status Name"), Expression("jOrderStatus.[Name]")]
        public String OrderStatusName
        {
            get { return Fields.OrderStatusName[this]; }
            set { Fields.OrderStatusName[this] = value; }
        }
        
        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ShipName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field OrderId;
            public Int32Field AccountId;
            public Int32Field CompanyId;
            public Int32Field PaymentTypeId;
            public Int16Field Width;
            public Int16Field Height;
            public DateTimeField OrderDate;
            public DateTimeField ShippedDate;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipCountry;
            public Int32Field UserId;
            public Int32Field OrderStatusId;

            public StringField AccountName;
            public StringField AccountPhoneNumber;
            public Int16Field AccountIsVip;
            public Int32Field AccountPartnerType;

            public StringField CompanyName;

            public StringField PaymentTypeName;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserUserImage;

            public StringField OrderStatusName;
		}
    }
}
