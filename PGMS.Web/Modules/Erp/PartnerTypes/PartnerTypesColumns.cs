
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.PartnerTypes")]
    [BasedOnRow(typeof(Entities.PartnerTypesRow), CheckNames = true)]
    public class PartnerTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PartnerTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}