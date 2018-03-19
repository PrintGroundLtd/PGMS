
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsColumns
    {
        [EditLink, Width(200)]
        public String ProductName { get; set; }
        [EditLink, Width(200)]
        public String ProductQuantityPerUnit { get; set; }
        [Width(100)]
        public Decimal UnitPrice { get; set; }
        [Width(100)]
        public Int16 Quantity { get; set; }
        [Width(100)]
        public Double Discount { get; set; }
        [Width(100)]
        public Decimal LineTotal { get; set; }
    }
}