using System.ComponentModel;
using PGMS.Administration.Entities;

namespace PGMS.Erp.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;

    /// <summary>
    /// This is a sample base class for rows that does insert/update date and user audit logging automatically.
    /// It is recommended to create your own base class, if your auditing field names are different than these.
    /// You should implement IInsertLogRow and/or IUpdateLogRow interfaces. ILoggingRow is a combination of these
    /// two. There is also an optional IDeleteLogRow interface that supports auditing on delete but for it to work
    /// you need to also implement IIsActiveDeletedRow so that your rows aren't actually deleted.
    /// </summary>
    public abstract class ErpLoggingRow : Row, ILoggingRow, IIsActiveDeletedRow
    {
        protected ErpLoggingRow(RowFieldsBase fields)
            : base(fields)
        {
            loggingFields = (ErpLoggingRowFields)fields;
        }

        [DisplayName("Created by"), Expression("usrI.UserName")]
        [ReadPermission("Administration:Tenants")]
        public String InsertUserName
        {
            get { return loggingFields.InsertUserName[this]; }
            set { loggingFields.InsertUserName[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(false)]
        [ForeignKey("Users", "UserId"), LeftJoin("usrI"), TextualField("InsertUserName")]
        public Int32? InsertUserId
        {
            get { return loggingFields.InsertUserId[this]; }
            set { loggingFields.InsertUserId[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(false)]
        [DisplayFormat("HH:mm dd/MM/yyyy")]
        [Width(150)]
        public DateTime? InsertDate
        {
            get { return loggingFields.InsertDate[this]; }
            set { loggingFields.InsertDate[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [ForeignKey("Users", "UserId"), LeftJoin("usrU"), TextualField("UpdateUserName")]
        public Int32? UpdateUserId
        {
            get { return loggingFields.UpdateUserId[this]; }
            set { loggingFields.UpdateUserId[this] = value; }
        }

        [DisplayName("Last updated by"), Expression("usrU.UserName")]
        public String UpdateUserName
        {
            get { return loggingFields.UpdateUserName[this]; }
            set { loggingFields.UpdateUserName[this] = value; }
        }

        [Insertable(false), Updatable(false)]
        [Width(150)]
        [DisplayFormat("HH:mm dd/MM/yyyy")]
        public DateTime? UpdateDate
        {
            get { return loggingFields.UpdateDate[this]; }
            set { loggingFields.UpdateDate[this] = value; }
        }
        
        [BooleanEditor]
        public Int16? IsActive
        {
            get { return loggingFields.IsActive[this]; }
            set { loggingFields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return loggingFields.IsActive; }
        }

        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return loggingFields.InsertUserId; }
        }

        IIdField IUpdateLogRow.UpdateUserIdField
        {
            get { return loggingFields.UpdateUserId; }
        }

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return loggingFields.InsertDate; }
        }

        DateTimeField IUpdateLogRow.UpdateDateField
        {
            get { return loggingFields.UpdateDate; }
        }

        private ErpLoggingRowFields loggingFields;

        public class ErpLoggingRowFields : RowFieldsBase
        {
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int16Field IsActive;
            public StringField InsertUserName;
            public StringField UpdateUserName;

            public ErpLoggingRowFields(string tableName = null, string fieldPrefix = null)
                : base(tableName, fieldPrefix)
            {
            }
        }
    }
}