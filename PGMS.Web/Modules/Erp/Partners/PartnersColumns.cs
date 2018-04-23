
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.Partners")]
    [BasedOnRow(typeof(Entities.PartnersRow), CheckNames = true)]
    public class PartnersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PartnerId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 HardPercent { get; set; }
        [FilterOnly()]
        public Int32 PartnerType { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public Int16 IsActive { get; set; }
    }
}