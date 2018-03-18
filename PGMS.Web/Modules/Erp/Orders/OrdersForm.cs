
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersForm
    {
        [Tab("General")]
        [Category("Order")]
        public Int32 AccountId { get; set; }
        public Int32 CompanyId { get; set; }
        public Int32 PaymentTypeId { get; set; }
        [HalfWidth]
        public Int16 Width { get; set; }
        [HalfWidth]
        public Int16 Height { get; set; }
        [Category("Order Details")]
        [OrderDetailsEditor]
        public List<Entities.OrderDetailsRow> DetailList { get; set; }

        public Int32 UserId { get; set; }
        public Int32 OrderStatusId { get; set; }

        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [Tab("Shipping")]
        [Category("Info")]
        public DateTime ShippedDate { get; set; }
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipCountry { get; set; }
    }
}