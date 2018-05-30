
using System.Collections.Generic;
using PGMS.Erp.Scripts;
using PGMS.Web.Modules.Erp.Budgets;

namespace PGMS.Erp.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Erp"), TableName("[dbo].[Budgets]")]
    [DisplayName("Budgets"), InstanceName("Budget")]
    [ReadPermission(PermissionKeys.Budgets.ReadPermission)]
    [UpdatePermission(PermissionKeys.Budgets.UpdatePermission)]
    [DeletePermission(PermissionKeys.Budgets.DeletePermission)]
    [LookupScript]
    public sealed class BudgetsRow : ErpLoggingRow, IIdRow, INameRow
    {
        [DisplayName("Budget Id"), Identity]
        public Int32? BudgetId
        {
            get { return Fields.BudgetId[this]; }
            set { Fields.BudgetId[this] = value; }
        }

        [DisplayName("Name"), Size(500), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Total"), Size(19), Scale(2), NotMapped]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        [DisplayName("Left After Expenses"), Size(19), Scale(2), NotMapped]
        public Decimal? LeftAfterExpenses
        {
            get { return Fields.LeftAfterExpenses[this]; }
            set { Fields.LeftAfterExpenses[this] = value; }
        }

        [DisplayName("Start Date"), DisplayFormat("dd/MM/yyyy"), NotNull]
        [LookupInclude]
        public DateTime? StartDate
        {
            get { return Fields.StartDate[this]; }
            set { Fields.StartDate[this] = value; }
        }
        [DisplayName("End Date"), DisplayFormat("dd/MM/yyyy"), NotNull]
        [LookupInclude]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Payment Type"), NotNull, ForeignKey("[dbo].[PaymentTypes]", "PaymentTypeId"), LeftJoin("jPaymentType"), TextualField("PaymentTypeName")]
        [LookupEditor(typeof(PaymentTypesRow), FilterField = "IsActive", FilterValue = 1)]
        public Int32? PaymentTypeId
        {
            get { return Fields.PaymentTypeId[this]; }
            set { Fields.PaymentTypeId[this] = value; }
        }


        [DisplayName("Budget Period"), NotNull]
        public BudgetPeriod? BudgetPeriod
        {
            get { return (BudgetPeriod?)Fields.BudgetPeriod[this]; }
            set { Fields.BudgetPeriod[this] = (Int32?)value; }
        }
        

        [DisplayName("Payment Type Name"), Expression("jPaymentType.[Name]")]
        public String PaymentTypeName
        {
            get { return Fields.PaymentTypeName[this]; }
            set { Fields.PaymentTypeName[this] = value; }
        }


        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.BudgetId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        //DateTimeField IBudgetsRow.StartDate => Fields.StartDate;

        //DateTimeField IBudgetsRow.EndDate => Fields.EndDate;

        public static readonly RowFields Fields = new RowFields().Init();

        public BudgetsRow()
            : base(Fields)
        {
        }

        public class RowFields : ErpLoggingRowFields
        {
            public Int32Field BudgetId;
            public StringField Name;
            public DecimalField Total;
            public DecimalField LeftAfterExpenses;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field PaymentTypeId;
            public Int32Field BudgetPeriod;
            public StringField PaymentTypeName;

            public RowListField<NoteRow> NoteList;

        }
    }
}
