
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.OutsideOrders")]
    [BasedOnRow(typeof(Entities.OutsideOrdersRow), CheckNames = true)]
    public class OutsideOrdersForm
    {
        [Category("General")]
        [HalfWidth]
        public String Name { get; set; }
        [HalfWidth]
        public Int32 AccountRepresentsId { get; set; }

        [HalfWidth]
        public Int32 OrderStatusId { get; set; }
        [HalfWidth]
        public Int32 CompanyRepresentsId { get; set; }
        [HalfWidth]
        public Int32 AssignUserId { get; set; }
        [Category("Info")]

        [HalfWidth]
        [DefaultValue("now")]
        public DateTime StartDate { get; set; }
        [HalfWidth]
        public DateTime DeadLine { get; set; }
        [Category("Prices")]
        [OneThirdWidth]
        public Decimal PriceTheyOffer { get; set; }
        [OneThirdWidth]
        public Decimal PriceWeSell { get; set; }

        [OneThirdWidth]
        public Boolean WithVat { get; set; }
        public String Description { get; set; }
     

        public List<object> NoteList { get; set; }


    }
}