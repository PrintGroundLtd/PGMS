﻿
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
        public String Name { get; set; }
        public Decimal PriceTheyOffer { get; set; }
        public Decimal PriceWeSell { get; set; }
        public Int32 AccountRepresentsId { get; set; }
        public Int32 CompanyRepresentsId { get; set; }
    }
}