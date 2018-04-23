
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.OrderStatuses")]
    [BasedOnRow(typeof(Entities.OrderStatusesRow), CheckNames = true)]
    public class OrderStatusesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderStatusId { get; set; }
        [EditLink]
        [OrderStatusesFormatter(BackgroundProperty = "BackgroundColor", BorderProperty = "BorderColor")]
        public String Name { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
    }
}