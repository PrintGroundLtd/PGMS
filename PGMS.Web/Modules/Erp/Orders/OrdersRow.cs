
using System.Collections.Generic;
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
    [ReadPermission(PermissionKeys.Orders.ReadPermission)]
    [UpdatePermission(PermissionKeys.Orders.UpdatePermission)]
    [DeletePermission(PermissionKeys.Orders.DeletePermission)]
    [LookupScript]
    public sealed class OrdersRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Identity, QuickSearch()]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }


        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "AccountId"), LeftJoin("jAccount"), TextualField("AccountName")]
        [LookupEditor(typeof(AccountsRow), FilterField = "IsActive", FilterValue = 1, InplaceAdd = true, InplaceAddPermission = PermissionKeys.Accounts.UpdatePermission)]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        [DisplayName("Company"), ForeignKey("[dbo].[Companies]", "CompanyId"), LeftJoin("jCompany"), TextualField("CompanyName")]
        [LookupEditor(typeof(CompaniesRow), FilterField = "IsActive", FilterValue = 1, InplaceAdd = true, InplaceAddPermission = PermissionKeys.Companies.UpdatePermission)]
        [QuickFilter()]
        public Int32? CompanyId
        {
            get { return Fields.CompanyId[this]; }
            set { Fields.CompanyId[this] = value; }
        }

        [DisplayName("Payment Type"), ForeignKey("[dbo].[PaymentTypes]", "PaymentTypeId"), LeftJoin("jPaymentType"), TextualField("PaymentTypeName"), NotNull]
        [LookupEditor(typeof(PaymentTypesRow), FilterField = "IsActive", FilterValue = 1, InplaceAdd = true, InplaceAddPermission = PermissionKeys.PaymentTypes.UpdatePermission)]
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

        [DisplayName("Order Date"), NotNull, SortOrder(1, true), QuickFilter() ]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayFormat("HH:mm dd/MM/yyyy"), DisplayName("Start Date"), QuickFilter()]
        [Width(150)]
        [DateTimeEditor]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }

        [DisplayFormat("HH:mm dd/MM/yyyy"), DisplayName("Dead Line"), QuickFilter()]
        [Width(150)]
        [DateTimeEditor]
        public DateTime? DeadLine
        {
            get { return Fields.DeadLine[this]; }
            set { Fields.DeadLine[this] = value; }
        }

        [DisplayName("Shipped Date")]
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

        [DisplayName("Assignet to User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserDisplayName")]
        [LookupEditor(typeof(UserRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Order Status"), ForeignKey("[dbo].[OrderStatuses]", "OrderStatusId"), LeftJoin("jOrderStatus"), TextualField("OrderStatusName"), NotNull]
        [LookupEditor(typeof(OrderStatusesRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter(), QuickFilterOption("multiple", true)]
        public Int32? OrderStatusId
        {
            get { return Fields.OrderStatusId[this]; }
            set { Fields.OrderStatusId[this] = value; }
        }
        
        [DisplayName("Account Name"), Expression("jAccount.[Name]"), QuickSearch()]
        public String AccountName
        {
            get { return Fields.AccountName[this]; }
            set { Fields.AccountName[this] = value; }
        }

        [DisplayName("Account Phone Number"), Expression("jAccount.[PhoneNumber]"), QuickSearch()]
        public String AccountPhoneNumber
        {
            get { return Fields.AccountPhoneNumber[this]; }
            set { Fields.AccountPhoneNumber[this] = value; }
        }

        [DisplayName("Account Email"), Expression("jAccount.[Email]"), QuickSearch()]
        public String AccountEmail
        {
            get { return Fields.AccountEmail[this]; }
            set { Fields.AccountEmail[this] = value; }
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

        [DisplayName("Account Partner Type Name"), Expression("(SELECT [Name] FROM [dbo].[PartnerTypes] WHERE PartnerTypeId = jAccount.PartnerType)")]
        public String AccountPartnerTypeName
        {
            get { return Fields.AccountPartnerTypeName[this]; }
            set { Fields.AccountPartnerTypeName[this] = value; }
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
        
        [DisplayName("Order Status Border Color"), Expression("jOrderStatus.[BorderColor]")]
        public String OrderStatusBorderColor
        {
            get { return Fields.OrderStatusBorderColor[this]; }
            set { Fields.OrderStatusBorderColor[this] = value; }
        }


        [DisplayName("Order Status Background Color"), Expression("jOrderStatus.[BackgroundColor]")]
        public String OrderStatusBackgroundColor
        {
            get { return Fields.OrderStatusBackgroundColor[this]; }
            set { Fields.OrderStatusBackgroundColor[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderId"), NotMapped]
        public List<OrderDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }


        [DisplayName("Total"), NotMapped]
        [AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Payments Total"), NotMapped]
        [AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? PaymentsTotal
        {
            get { return Fields.PaymentsTotal[this]; }
            set { Fields.PaymentsTotal[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        [DisplayName("Not Real")]
        [BooleanEditor]
        public Boolean? NotReal
        {
            get { return Fields.NotReal[this]; }
            set { Fields.NotReal[this] = value; }
        }

        [DisplayName("Order Id"), Expression("CONCAT('#', T0.[OrderId])")]
        public String OrderIdName
        {
            get { return Fields.OrderIdName[this]; }
            set { Fields.OrderIdName[this] = value; }
        }
        [DisplayName("Cutting By One")]
        [BooleanEditor]
        public Boolean? CuttingByOne
        {
            get { return Fields.CuttingByOne[this]; }
            set { Fields.CuttingByOne[this] = value; }
        }

        [DisplayName("Cutting Manual")]
        [BooleanEditor]
        public Boolean? CuttingManual
        {
            get { return Fields.CuttingManual[this]; }
            set { Fields.CuttingManual[this] = value; }
        }

        [DisplayName("Cutting Machine")]
        [BooleanEditor]
        public Boolean? CuttingMachine
        {
            get { return Fields.CuttingMachine[this]; }
            set { Fields.CuttingMachine[this] = value; }
        }

        [DisplayName("Printing")]
        [BooleanEditor]
        public Boolean? Printing
        {
            get { return Fields.Printing[this]; }
            set { Fields.Printing[this] = value; }
        }

        [DisplayName("Laminating")]
        [BooleanEditor]
        public Boolean? Laminating
        {
            get { return Fields.Laminating[this]; }
            set { Fields.Laminating[this] = value; }
        }

        [DisplayName("Transport Folio")]
        [BooleanEditor]
        public Boolean? TransportFolio
        {
            get { return Fields.TransportFolio[this]; }
            set { Fields.TransportFolio[this] = value; }
        }

        [DisplayName("Cleaning")]
        [BooleanEditor]
        public Boolean? Cleaning
        {
            get { return Fields.Cleaning[this]; }
            set { Fields.Cleaning[this] = value; }
        }

        [DisplayName("Cashing")]
        [BooleanEditor]
        public Boolean? Cashing
        {
            get { return Fields.Cashing[this]; }
            set { Fields.Cashing[this] = value; }
        }


        [DisplayName("With Vat"), QuickFilter()]
        [BooleanEditor]
        public Boolean? WithVat
        {
            get { return Fields.WithVat[this]; }
            set { Fields.WithVat[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return  Fields.Name; }
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
            public StringField Name;
            public StringField AccountPartnerTypeName;
            public Int16Field Width;
            public Int16Field Height;
            public DateTimeField OrderDate;
            public DateTimeField StartDate;
            public DateTimeField DeadLine;
            public DateTimeField ShippedDate;
            public StringField OrderIdName;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipCountry;
            public Int32Field UserId;
            public Int32Field OrderStatusId;
            public DecimalField Total;
            public DecimalField PaymentsTotal;
            public BooleanField WithVat;
            public BooleanField NotReal;

            public BooleanField CuttingByOne;
            public BooleanField CuttingManual;
            public BooleanField CuttingMachine;
            public BooleanField Printing;
            public BooleanField Laminating;
            public BooleanField TransportFolio;
            public BooleanField Cleaning;
            public BooleanField Cashing;


            public StringField AccountName;
            public StringField AccountPhoneNumber;
            public StringField AccountEmail;
            public Int16Field AccountIsVip;
            public Int32Field AccountPartnerType;

            public StringField CompanyName;

            public StringField PaymentTypeName;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserUserImage;

            public RowListField<NoteRow> NoteList;

            public RowListField<OrderDetailsRow> DetailList;
            public StringField OrderStatusName;
            public StringField OrderStatusBorderColor;
            public StringField OrderStatusBackgroundColor;
        }
    }
}
