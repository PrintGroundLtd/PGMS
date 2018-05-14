
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [Category("General")]
        public String Name { get; set; }
        public String Description { get; set; }
        public String ProductImage { get; set; }
        public Boolean Discontinued { get; set; }
        public Int32 SupplierId { get; set; }
        [Category("Pricing")]
        public Decimal UnitPriceWithDDS { get; set; }
        public Decimal UnitPricePartner { get; set; }
        public String QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        [Category("Status")]
        public Int16 UnitsInStock { get; set; }
        public Int16 UnitsOnOrder { get; set; }
        public Int16 ReorderLevel { get; set; }

        public List<object> NoteList { get; set; }

    }
}