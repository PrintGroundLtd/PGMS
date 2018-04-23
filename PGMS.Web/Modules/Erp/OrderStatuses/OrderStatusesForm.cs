
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.OrderStatuses")]
    [BasedOnRow(typeof(Entities.OrderStatusesRow), CheckNames = true)]
    public class OrderStatusesForm
    {
        public String Name { get; set; }
    }
}