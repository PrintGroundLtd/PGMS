
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

        [DisplayName("Description"), Size(500), NotNull, QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(2), NotNull, DecimalEditor]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Budget"), NotNull, ForeignKey(typeof(BudgetsRow)), LeftJoin("jBudget"), TextualField("BudgetName")]
        [LookupEditor(typeof(BudgetsRow), FilterField = "IsActive", FilterValue = 1)]
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
        
        IIdField IIdRow.IdField
        {
            get { return Fields.ExpenseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExpensesRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field ExpenseId;
            public StringField Description;
            public DecimalField Total;
            public Int32Field BudgetId;
            public Int32Field PaymentTypeId;

            public StringField BudgetName;
            public DecimalField BudgetTotal;
            public Int32Field BudgetBudgetPeriod;
            public Int32Field BudgetPaymentTypeId;

            public StringField PaymentTypeName;
		}
    }
}
