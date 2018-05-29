
namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[ExpensesAttachments]")]
    [DisplayName("Expenses Attachments"), InstanceName("Expense Attachments")]
    [ReadPermission(PermissionKeys.ExpenseAttachments.ReadPermission)]
    [UpdatePermission(PermissionKeys.ExpenseAttachments.UpdatePermission)]
    [DeletePermission(PermissionKeys.ExpenseAttachments.DeletePermission)]
    [LookupScript]
    public sealed class ExpensesAttachmentsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Expense Attachment Id"), Identity]
        public Int32? ExpenseAttachmentId
        {
            get { return Fields.ExpenseAttachmentId[this]; }
            set { Fields.ExpenseAttachmentId[this] = value; }
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

        [DisplayName("Expense"), NotNull, ForeignKey("[dbo].[Expenses]", "ExpenseId"), LeftJoin("jExpense"), TextualField("ExpenseDescription")]
        [LookupEditor(typeof(ExpensesRow), InplaceAdd = true, FilterField = "IsActive", FilterValue = 1)]
        public Int32? ExpenseId
        {
            get { return Fields.ExpenseId[this]; }
            set { Fields.ExpenseId[this] = value; }
        }
        

        [DisplayName("Expense Description"), Expression("jExpense.[Description]")]
        public String ExpenseDescription
        {
            get { return Fields.ExpenseDescription[this]; }
            set { Fields.ExpenseDescription[this] = value; }
        }

        [DisplayName("Expense Total"), Expression("jExpense.[Total]")]
        public Decimal? ExpenseTotal
        {
            get { return Fields.ExpenseTotal[this]; }
            set { Fields.ExpenseTotal[this] = value; }
        }

        [DisplayName("Expense Transaction Date"), Expression("jExpense.[TransactionDate]")]
        public DateTime? ExpenseTransactionDate
        {
            get { return Fields.ExpenseTransactionDate[this]; }
            set { Fields.ExpenseTransactionDate[this] = value; }
        }

        [DisplayName("Expense Budget Id"), Expression("jExpense.[BudgetId]")]
        public Int32? ExpenseBudgetId
        {
            get { return Fields.ExpenseBudgetId[this]; }
            set { Fields.ExpenseBudgetId[this] = value; }
        }

        [DisplayName("Expense Payment Type Id"), Expression("jExpense.[PaymentTypeId]")]
        public Int32? ExpensePaymentTypeId
        {
            get { return Fields.ExpensePaymentTypeId[this]; }
            set { Fields.ExpensePaymentTypeId[this] = value; }
        }

        [DisplayName("Expense Insert Date"), Expression("jExpense.[InsertDate]")]
        public DateTime? ExpenseInsertDate
        {
            get { return Fields.ExpenseInsertDate[this]; }
            set { Fields.ExpenseInsertDate[this] = value; }
        }

        [DisplayName("Expense Insert User Id"), Expression("jExpense.[InsertUserId]")]
        public Int32? ExpenseInsertUserId
        {
            get { return Fields.ExpenseInsertUserId[this]; }
            set { Fields.ExpenseInsertUserId[this] = value; }
        }

        [DisplayName("Expense Update Date"), Expression("jExpense.[UpdateDate]")]
        public DateTime? ExpenseUpdateDate
        {
            get { return Fields.ExpenseUpdateDate[this]; }
            set { Fields.ExpenseUpdateDate[this] = value; }
        }

        [DisplayName("Expense Update User Id"), Expression("jExpense.[UpdateUserId]")]
        public Int32? ExpenseUpdateUserId
        {
            get { return Fields.ExpenseUpdateUserId[this]; }
            set { Fields.ExpenseUpdateUserId[this] = value; }
        }

        [DisplayName("Expense Is Active"), Expression("jExpense.[IsActive]")]
        public Int16? ExpenseIsActive
        {
            get { return Fields.ExpenseIsActive[this]; }
            set { Fields.ExpenseIsActive[this] = value; }
        }

        [DisplayName("Expense User Id"), Expression("jExpense.[UserId]")]
        public Int32? ExpenseUserId
        {
            get { return Fields.ExpenseUserId[this]; }
            set { Fields.ExpenseUserId[this] = value; }
        }

        [DisplayName("Expense Name"), Expression("jExpense.[Name]")]
        public String ExpenseName
        {
            get { return Fields.ExpenseName[this]; }
            set { Fields.ExpenseName[this] = value; }
        }

        [DisplayName("Expense Transaction Type"), Expression("jExpense.[TransactionType]")]
        public Int16? ExpenseTransactionType
        {
            get { return Fields.ExpenseTransactionType[this]; }
            set { Fields.ExpenseTransactionType[this] = value; }
        }

        [DisplayName("Expense Order Id"), Expression("jExpense.[OrderId]")]
        public Int32? ExpenseOrderId
        {
            get { return Fields.ExpenseOrderId[this]; }
            set { Fields.ExpenseOrderId[this] = value; }
        }

        [DisplayName("Expense Outside Order Id"), Expression("jExpense.[OutsideOrderId]")]
        public Int32? ExpenseOutsideOrderId
        {
            get { return Fields.ExpenseOutsideOrderId[this]; }
            set { Fields.ExpenseOutsideOrderId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ExpenseAttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExpensesAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field ExpenseAttachmentId;
            public StringField Name;
            public StringField Description;
            public StringField FilePath;
            public Int32Field ExpenseId;

            public StringField ExpenseDescription;
            public DecimalField ExpenseTotal;
            public DateTimeField ExpenseTransactionDate;
            public Int32Field ExpenseBudgetId;
            public Int32Field ExpensePaymentTypeId;
            public DateTimeField ExpenseInsertDate;
            public Int32Field ExpenseInsertUserId;
            public DateTimeField ExpenseUpdateDate;
            public Int32Field ExpenseUpdateUserId;
            public Int16Field ExpenseIsActive;
            public Int32Field ExpenseUserId;
            public StringField ExpenseName;
            public Int16Field ExpenseTransactionType;
            public Int32Field ExpenseOrderId;
            public Int32Field ExpenseOutsideOrderId;
		}
    }
}
