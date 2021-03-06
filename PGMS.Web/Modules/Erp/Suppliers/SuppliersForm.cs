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

    [FormScript("Erp.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersForm
    {
        [Category("General")]
        public String Name { get; set; }
        public String PhoneNumber { get; set; }
        public List<Int32> SupplierRepresentatives { get; set; }

        [Category("Localization")]
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }

        public List<object> NoteList { get; set; }

    }
}