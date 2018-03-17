
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersForm
    {
        public String Name { get; set; }
        public String PhoneNumber { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
    }
}