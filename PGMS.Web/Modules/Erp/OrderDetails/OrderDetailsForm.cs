
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
        [Category("General")]
        public Int32 ProductId { get; set; }

        public String Description { get; set; }
        [Category("Sizes")]
        [HalfWidth]
        public Decimal Width { get; set; }
        [HalfWidth]
        public Decimal Height { get; set; }
        [DefaultValue(0)]
        public Decimal Quadrature { get; set; }
        public Int32 Quantity { get; set; }
        [Category("Prices")]
        public Decimal UnitPrice { get; set; }

        public Double Discount { get; set; }
        public Double AdditionalCosts { get; set; }
        public List<object> NoteList { get; set; }

    }
}