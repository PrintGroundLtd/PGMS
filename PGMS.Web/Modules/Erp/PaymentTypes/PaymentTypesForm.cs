
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.PaymentTypes")]
    [BasedOnRow(typeof(Entities.PaymentTypesRow), CheckNames = true)]
    public class PaymentTypesForm
    {
        public String Name { get; set; }
    }
}