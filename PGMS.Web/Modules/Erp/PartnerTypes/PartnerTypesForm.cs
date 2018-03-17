
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.PartnerTypes")]
    [BasedOnRow(typeof(Entities.PartnerTypesRow), CheckNames = true)]
    public class PartnerTypesForm
    {
        public String Name { get; set; }
    }
}