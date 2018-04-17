﻿
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.OutsideOrders")]
    [BasedOnRow(typeof(Entities.OutsideOrdersRow), CheckNames = true)]
    public class OutsideOrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OutsideOrderId { get; set; }
        [QuickFilter(), FilterOnly]
        public Int32 AccountRepresentsId { get; set; }
        [QuickFilter(), FilterOnly()]
        public Int32 CompanyRepresentsId { get; set; }

        [EditLink]
        public String Name { get; set; }
        public Decimal PriceTheyOffer { get; set; }
        public Decimal PriceWeSell { get; set; }
        public String AccountRepresentsName { get; set; }
        public String CompanyRepresentsName { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public Int16 IsActive { get; set; }
    }
}