
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsForm
    {
        public Int32 ProductId { get; set; }
        [HalfWidth]
        public Decimal Width { get; set; }
        [HalfWidth]
        public Decimal Height { get; set; }
        public String Description { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 Quantity { get; set; }
        public Double Discount { get; set; }
        public List<object> NoteList { get; set; }

    }
}