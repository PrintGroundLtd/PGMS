
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.PaymentTypes")]
    [BasedOnRow(typeof(Entities.PaymentTypesRow), CheckNames = true)]
    public class PaymentTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PaymentTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public Int16 IsActive { get; set; }
    }
}