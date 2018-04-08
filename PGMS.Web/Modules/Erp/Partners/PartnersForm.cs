
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Partners")]
    [BasedOnRow(typeof(Entities.PartnersRow), CheckNames = true)]
    public class PartnersForm
    {
        public String Name { get; set; }
        public Int32 HardPercent { get; set; }
        public Int32 PartnerType { get; set; }
    }
}