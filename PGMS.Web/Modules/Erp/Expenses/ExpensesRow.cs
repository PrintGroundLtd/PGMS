
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

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Expenses]")]
    [DisplayName("Expenses"), InstanceName("Expense")]
    [ReadPermission(PermissionKeys.Expenses.ReadPermission)]
    [UpdatePermission(PermissionKeys.Expenses.UpdatePermission)]
    [DeletePermission(PermissionKeys.Expenses.DeletePermission)]
    [LookupScript]
    public sealed class ExpensesRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Expense Id"), Identity]
        public Int32? ExpenseId
        {
            get { return Fields.ExpenseId[this]; }
            set { Fields.ExpenseId[this] = value; }
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
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

        [DisplayName("Transaction Type"), NotNull]
        public TransactionType? TransactionType
        {
            get { return (TransactionType?)Fields.TransactionType[this]; }
            set { Fields.TransactionType[this] = (Int16?)value; }
        }


        [DisplayName("Total"), Size(19), Scale(2), NotNull, DecimalEditor]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Deposit Payment")]
        [BooleanEditor]
        public Boolean? DepositPayment
        {
            get { return Fields.DepositPayment[this]; }
            set { Fields.DepositPayment[this] = value; }
        }

        [DisplayName("With Vat"), QuickFilter()]
        [BooleanEditor]
        public Boolean? WithVat
        {
            get { return Fields.WithVat[this]; }
            set { Fields.WithVat[this] = value; }
        }
        [DisplayName("Transaction Date"), DisplayFormat("HH:mm dd/MM/yyyy"), NotNull]
        [QuickFilter()]
        [DateTimeEditor]
        public DateTime? TransactionDate
        {
            get { return Fields.TransactionDate[this]; }
            set { Fields.TransactionDate[this] = value; }
        }

        [DisplayName("For Outside Order"), ForeignKey(typeof(OutsideOrdersRow)), LeftJoin("jOutsideOrder"), TextualField("OutsideOrderName")]
        [LookupEditor(typeof(OutsideOrdersRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
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

        [DisplayName("For Order"), ForeignKey(typeof(OrdersRow)), LeftJoin("jOrder"), TextualField("OrderName")]
        [LookupEditor(typeof(OrdersRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Order Name"), Expression("CASE WHEN jOrder.[OrderId]  IS NOT NULL THEN CONCAT('#', jOrder.[OrderId])   ELSE null  END")]
        public String OrderName
        {
            get { return Fields.OrderName[this]; }
            set { Fields.OrderName[this] = value; }
        }

        [DisplayName("Budget"), NotNull, ForeignKey(typeof(BudgetsRow)), LeftJoin("jBudget"), TextualField("BudgetName")]
        [LookupEditor(typeof(BudgetsRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? BudgetId
        {
            get { return Fields.BudgetId[this]; }
            set { Fields.BudgetId[this] = value; }
        }

        [DisplayName("Payment Type"), NotNull, ForeignKey(typeof(PaymentTypesRow)), LeftJoin("jPaymentType"), TextualField("PaymentTypeName")]
        [LookupEditor(typeof(PaymentTypesRow), FilterField = "IsActive", FilterValue = 1)]
        public Int32? PaymentTypeId
        {
            get { return Fields.PaymentTypeId[this]; }
            set { Fields.PaymentTypeId[this] = value; }
        }
        
        [DisplayName("Budget Name"), Expression("jBudget.[Name]")]
        public String BudgetName
        {
            get { return Fields.BudgetName[this]; }
            set { Fields.BudgetName[this] = value; }
        }

        [DisplayName("Budget Total"), Expression("jBudget.[Total]")]
        public Decimal? BudgetTotal
        {
            get { return Fields.BudgetTotal[this]; }
            set { Fields.BudgetTotal[this] = value; }
        }

        [DisplayName("Budget Budget Period"), Expression("jBudget.[BudgetPeriod]")]
        public Int32? BudgetBudgetPeriod
        {
            get { return Fields.BudgetBudgetPeriod[this]; }
            set { Fields.BudgetBudgetPeriod[this] = value; }
        }

        [DisplayName("Budget Payment Type Id"), Expression("jBudget.[PaymentTypeId]")]
        public Int32? BudgetPaymentTypeId
        {
            get { return Fields.BudgetPaymentTypeId[this]; }
            set { Fields.BudgetPaymentTypeId[this] = value; }
        }
        

        [DisplayName("Payment Type Name"), Expression("jPaymentType.[Name]")]
        public String PaymentTypeName
        {
            get { return Fields.PaymentTypeName[this]; }
            set { Fields.PaymentTypeName[this] = value; }
        }


        [DisplayName("For User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserDisplayName")]
        [LookupEditor(typeof(UserRow), FilterField = "IsActive", FilterValue = 1)]
        [QuickFilter()]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("For User"), Expression("jUser.[Username]")]
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

        [DisplayName("Account"), ForeignKey("[dbo].[Accounts]", "AccountId"), LeftJoin("jAccount"), TextualField("AccountName")]
        [LookupEditor(typeof(AccountsRow), FilterField = "IsActive", FilterValue = 1)]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
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

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ExpenseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExpensesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field ExpenseId;
            public StringField Name;
            public StringField Description;
            public DecimalField Total;
            public DateTimeField TransactionDate;
            public RowListField<NoteRow> NoteList;
            public BooleanField WithVat;
            public BooleanField DepositPayment;
            public Int16Field TransactionType;
            public Int32Field BudgetId;
            public Int32Field PaymentTypeId;

            public StringField BudgetName;
            public DecimalField BudgetTotal;
            public Int32Field BudgetBudgetPeriod;
            public Int32Field BudgetPaymentTypeId;

            public StringField PaymentTypeName;

            public Int32Field UserId;
            public StringField UserUsername;
            public StringField UserDisplayName;

            public Int32Field OrderId;
            public StringField OrderName;

            public Int32Field OutsideOrderId;
            public StringField OutsideOrderName;

            public Int32Field AccountId;
            public StringField AccountName;
            public StringField AccountPhoneNumber;
            public StringField AccountEmail;
            public Int16Field AccountIsVip;
        }
    }
}
