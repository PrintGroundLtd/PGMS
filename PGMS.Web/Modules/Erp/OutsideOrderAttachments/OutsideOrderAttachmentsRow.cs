
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[OutsideOrderAttachments]")]
    [DisplayName("Outside Order Attachments"), InstanceName("Outside Order Attachment")]
    [ReadPermission(PermissionKeys.OutsideOrderAttachments.ReadPermission)]
    [UpdatePermission(PermissionKeys.OutsideOrderAttachments.UpdatePermission)]
    [DeletePermission(PermissionKeys.OutsideOrderAttachments.DeletePermission)]
    [LookupScript]
    public sealed class OutsideOrderAttachmentsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Outside Order Attachment Id"), Identity]
        public Int32? OutsideOrderAttachmentId
        {
            get { return Fields.OutsideOrderAttachmentId[this]; }
            set { Fields.OutsideOrderAttachmentId[this] = value; }
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

        [DisplayName("Outside Order"), NotNull, ForeignKey("[dbo].[OutsideOrders]", "OutsideOrderId"), LeftJoin("jOutsideOrder"), TextualField("OutsideOrderName")]
        [LookupEditor(typeof(OutsideOrdersRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? OutsideOrderId
        {
            get { return Fields.OutsideOrderId[this]; }
            set { Fields.OutsideOrderId[this] = value; }
        }


        [DisplayName("Outside Order Name"), Expression("jOutsideOrder.[Name]")]
        public String OutsideOrderName
        {
            get { return Fields.OutsideOrderName[this]; }
            set { Fields.OutsideOrderName[this] = value; }
        }

        [DisplayName("Outside Order Price They Offer"), Expression("jOutsideOrder.[PriceTheyOffer]")]
        public Decimal? OutsideOrderPriceTheyOffer
        {
            get { return Fields.OutsideOrderPriceTheyOffer[this]; }
            set { Fields.OutsideOrderPriceTheyOffer[this] = value; }
        }

        [DisplayName("Outside Order Price We Sell"), Expression("jOutsideOrder.[PriceWeSell]")]
        public Decimal? OutsideOrderPriceWeSell
        {
            get { return Fields.OutsideOrderPriceWeSell[this]; }
            set { Fields.OutsideOrderPriceWeSell[this] = value; }
        }

        [DisplayName("Outside Order Account Represents Id"), Expression("jOutsideOrder.[AccountRepresentsId]")]
        public Int32? OutsideOrderAccountRepresentsId
        {
            get { return Fields.OutsideOrderAccountRepresentsId[this]; }
            set { Fields.OutsideOrderAccountRepresentsId[this] = value; }
        }

        [DisplayName("Outside Order Company Represents Id"), Expression("jOutsideOrder.[CompanyRepresentsId]")]
        public Int32? OutsideOrderCompanyRepresentsId
        {
            get { return Fields.OutsideOrderCompanyRepresentsId[this]; }
            set { Fields.OutsideOrderCompanyRepresentsId[this] = value; }
        }

        [DisplayName("Outside Order Insert Date"), Expression("jOutsideOrder.[InsertDate]")]
        public DateTime? OutsideOrderInsertDate
        {
            get { return Fields.OutsideOrderInsertDate[this]; }
            set { Fields.OutsideOrderInsertDate[this] = value; }
        }

        [DisplayName("Outside Order Insert User Id"), Expression("jOutsideOrder.[InsertUserId]")]
        public Int32? OutsideOrderInsertUserId
        {
            get { return Fields.OutsideOrderInsertUserId[this]; }
            set { Fields.OutsideOrderInsertUserId[this] = value; }
        }

        [DisplayName("Outside Order Update Date"), Expression("jOutsideOrder.[UpdateDate]")]
        public DateTime? OutsideOrderUpdateDate
        {
            get { return Fields.OutsideOrderUpdateDate[this]; }
            set { Fields.OutsideOrderUpdateDate[this] = value; }
        }

        [DisplayName("Outside Order Update User Id"), Expression("jOutsideOrder.[UpdateUserId]")]
        public Int32? OutsideOrderUpdateUserId
        {
            get { return Fields.OutsideOrderUpdateUserId[this]; }
            set { Fields.OutsideOrderUpdateUserId[this] = value; }
        }

        [DisplayName("Outside Order Is Active"), Expression("jOutsideOrder.[IsActive]")]
        public Int16? OutsideOrderIsActive
        {
            get { return Fields.OutsideOrderIsActive[this]; }
            set { Fields.OutsideOrderIsActive[this] = value; }
        }

        [DisplayName("Outside Order Description"), Expression("jOutsideOrder.[Description]")]
        public String OutsideOrderDescription
        {
            get { return Fields.OutsideOrderDescription[this]; }
            set { Fields.OutsideOrderDescription[this] = value; }
        }

        [DisplayName("Outside Order Order Status Id"), Expression("jOutsideOrder.[OrderStatusId]")]
        public Int32? OutsideOrderOrderStatusId
        {
            get { return Fields.OutsideOrderOrderStatusId[this]; }
            set { Fields.OutsideOrderOrderStatusId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OutsideOrderAttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OutsideOrderAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field OutsideOrderAttachmentId;
            public StringField Name;
            public StringField Description;
            public StringField FilePath;
            public Int32Field OutsideOrderId;

            public StringField OutsideOrderName;
            public DecimalField OutsideOrderPriceTheyOffer;
            public DecimalField OutsideOrderPriceWeSell;
            public Int32Field OutsideOrderAccountRepresentsId;
            public Int32Field OutsideOrderCompanyRepresentsId;
            public DateTimeField OutsideOrderInsertDate;
            public Int32Field OutsideOrderInsertUserId;
            public DateTimeField OutsideOrderUpdateDate;
            public Int32Field OutsideOrderUpdateUserId;
            public Int16Field OutsideOrderIsActive;
            public StringField OutsideOrderDescription;
            public Int32Field OutsideOrderOrderStatusId;
		}
    }
}
