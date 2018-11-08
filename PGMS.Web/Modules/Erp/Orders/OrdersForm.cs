
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
        public String Name { get; set; }

        public Int32 AccountId { get; set; }
        //public Int32 CompanyId { get; set; }
        [DefaultValue(1)]
        public Int32 PaymentTypeId { get; set; }
 

        [Category("Order Details")]
        [OrderDetailsEditor]
        public List<Entities.OrderDetailsRow> DetailList { get; set; }

        [OneThirdWidth]
        public Boolean CuttingByOne { get; set; }
        [OneThirdWidth]
        public Boolean CuttingManual { get; set; }
        [OneThirdWidth]
        public Boolean CuttingMachine { get; set; }
        [OneThirdWidth]
        public Boolean Printing { get; set; }
        [OneThirdWidth]
        public Boolean Laminating { get; set; }
        [OneThirdWidth]
        public Boolean TransportFolio { get; set; }
        [OneThirdWidth]
        public Boolean Cleaning { get; set; }
        [OneThirdWidth]
        public Boolean Cashing { get; set; }

        public Int32 UserId { get; set; }
        public Int32 OrderStatusId { get; set; }

        [HalfWidth]
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [HalfWidth]
        public DateTime DeadLine { get; set; }

        [HalfWidth]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        public Boolean NotReal { get; set; }

        [Tab("Shipping")]
        [Category("Info")]
        public DateTime ShippedDate { get; set; }
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipCountry { get; set; }
        public List<object> NoteList { get; set; }

    }
}