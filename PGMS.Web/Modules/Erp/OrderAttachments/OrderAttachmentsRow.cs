
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[OrderAttachments]")]
    [DisplayName("Order Attachments"), InstanceName("Order Attachments")]
    [ReadPermission(PermissionKeys.OrderAttachments.ReadPermission)]
    [UpdatePermission(PermissionKeys.OrderAttachments.UpdatePermission)]
    [DeletePermission(PermissionKeys.OrderAttachments.DeletePermission)]
    [LookupScript]
    public sealed class OrderAttachmentsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Order Attachment Id"), Identity]
        public Int32? OrderAttachmentId
        {
            get { return Fields.OrderAttachmentId[this]; }
            set { Fields.OrderAttachmentId[this] = value; }
        }

        [DisplayName("Name"), Size(500), QuickSearch, NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description")]
        [HtmlNoteContentEditor]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("File Path"), NotNull]
        [MultipleFileUploadEditor]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Order"), NotNull, ForeignKey("[dbo].[Orders]", "OrderId"), LeftJoin("jOrder")]
        [LookupEditor(typeof(OrdersRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }


        [DisplayName("Order Account Id"), Expression("jOrder.[AccountId]")]
        public Int32? OrderAccountId
        {
            get { return Fields.OrderAccountId[this]; }
            set { Fields.OrderAccountId[this] = value; }
        }

        [DisplayName("Order Company Id"), Expression("jOrder.[CompanyId]")]
        public Int32? OrderCompanyId
        {
            get { return Fields.OrderCompanyId[this]; }
            set { Fields.OrderCompanyId[this] = value; }
        }

        [DisplayName("Order Payment Type Id"), Expression("jOrder.[PaymentTypeId]")]
        public Int32? OrderPaymentTypeId
        {
            get { return Fields.OrderPaymentTypeId[this]; }
            set { Fields.OrderPaymentTypeId[this] = value; }
        }

        [DisplayName("Order Width"), Expression("jOrder.[Width]")]
        public Int16? OrderWidth
        {
            get { return Fields.OrderWidth[this]; }
            set { Fields.OrderWidth[this] = value; }
        }

        [DisplayName("Order Height"), Expression("jOrder.[Height]")]
        public Int16? OrderHeight
        {
            get { return Fields.OrderHeight[this]; }
            set { Fields.OrderHeight[this] = value; }
        }

        [DisplayName("Order Order Date"), Expression("jOrder.[OrderDate]")]
        public DateTime? OrderOrderDate
        {
            get { return Fields.OrderOrderDate[this]; }
            set { Fields.OrderOrderDate[this] = value; }
        }

        [DisplayName("Order Shipped Date"), Expression("jOrder.[ShippedDate]")]
        public DateTime? OrderShippedDate
        {
            get { return Fields.OrderShippedDate[this]; }
            set { Fields.OrderShippedDate[this] = value; }
        }

        [DisplayName("Order Ship Name"), Expression("jOrder.[ShipName]")]
        public String OrderShipName
        {
            get { return Fields.OrderShipName[this]; }
            set { Fields.OrderShipName[this] = value; }
        }

        [DisplayName("Order Ship Address"), Expression("jOrder.[ShipAddress]")]
        public String OrderShipAddress
        {
            get { return Fields.OrderShipAddress[this]; }
            set { Fields.OrderShipAddress[this] = value; }
        }

        [DisplayName("Order Ship City"), Expression("jOrder.[ShipCity]")]
        public String OrderShipCity
        {
            get { return Fields.OrderShipCity[this]; }
            set { Fields.OrderShipCity[this] = value; }
        }

        [DisplayName("Order Ship Country"), Expression("jOrder.[ShipCountry]")]
        public String OrderShipCountry
        {
            get { return Fields.OrderShipCountry[this]; }
            set { Fields.OrderShipCountry[this] = value; }
        }

        [DisplayName("Order User Id"), Expression("jOrder.[UserId]")]
        public Int32? OrderUserId
        {
            get { return Fields.OrderUserId[this]; }
            set { Fields.OrderUserId[this] = value; }
        }

        [DisplayName("Order Order Status Id"), Expression("jOrder.[OrderStatusId]")]
        public Int32? OrderOrderStatusId
        {
            get { return Fields.OrderOrderStatusId[this]; }
            set { Fields.OrderOrderStatusId[this] = value; }
        }

        [DisplayName("Order Insert Date"), Expression("jOrder.[InsertDate]")]
        public DateTime? OrderInsertDate
        {
            get { return Fields.OrderInsertDate[this]; }
            set { Fields.OrderInsertDate[this] = value; }
        }

        [DisplayName("Order Insert User Id"), Expression("jOrder.[InsertUserId]")]
        public Int32? OrderInsertUserId
        {
            get { return Fields.OrderInsertUserId[this]; }
            set { Fields.OrderInsertUserId[this] = value; }
        }

        [DisplayName("Order Update Date"), Expression("jOrder.[UpdateDate]")]
        public DateTime? OrderUpdateDate
        {
            get { return Fields.OrderUpdateDate[this]; }
            set { Fields.OrderUpdateDate[this] = value; }
        }

        [DisplayName("Order Update User Id"), Expression("jOrder.[UpdateUserId]")]
        public Int32? OrderUpdateUserId
        {
            get { return Fields.OrderUpdateUserId[this]; }
            set { Fields.OrderUpdateUserId[this] = value; }
        }

        [DisplayName("Order Is Active"), Expression("jOrder.[IsActive]")]
        public Int16? OrderIsActive
        {
            get { return Fields.OrderIsActive[this]; }
            set { Fields.OrderIsActive[this] = value; }
        }

        [DisplayName("Order Dead Line"), Expression("jOrder.[DeadLine]")]
        public DateTime? OrderDeadLine
        {
            get { return Fields.OrderDeadLine[this]; }
            set { Fields.OrderDeadLine[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderAttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field OrderAttachmentId;
            public StringField Name;
            public StringField Description;
            public StringField FilePath;
            public Int32Field OrderId;

            public Int32Field OrderAccountId;
            public Int32Field OrderCompanyId;
            public Int32Field OrderPaymentTypeId;
            public Int16Field OrderWidth;
            public Int16Field OrderHeight;
            public DateTimeField OrderOrderDate;
            public DateTimeField OrderShippedDate;
            public StringField OrderShipName;
            public StringField OrderShipAddress;
            public StringField OrderShipCity;
            public StringField OrderShipCountry;
            public Int32Field OrderUserId;
            public Int32Field OrderOrderStatusId;
            public DateTimeField OrderInsertDate;
            public Int32Field OrderInsertUserId;
            public DateTimeField OrderUpdateDate;
            public Int32Field OrderUpdateUserId;
            public Int16Field OrderIsActive;
            public DateTimeField OrderDeadLine;
		}
    }
}
