
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Companies")]
    [BasedOnRow(typeof(Entities.CompaniesRow), CheckNames = true)]
    public class CompaniesForm
    {
        [Category("General")]
        public String Name { get; set; }
        public String PhoneNumber { get; set; }
        [Category("Accounts related")]
        public List<Int32> CompanyAccounts { get; set; }
        [Category("Info")]
        public String Eik { get; set; }
        public String Mol { get; set; }
        public String Iban { get; set; }
        public String BankName { get; set; }
        public String BankSwift { get; set; }
        [Category("Localization")]
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
    }
}