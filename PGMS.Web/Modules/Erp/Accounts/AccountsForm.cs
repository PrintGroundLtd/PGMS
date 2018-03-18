
namespace PGMS.Erp.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Erp.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsForm
    {

        [Hidden]
        public Int32 AccountId { get; set; }
        public String Name { get; set; }
        public String PhoneNumber { get; set; }
        public List<Int32> AccountCompanies { get; set; }

        public Int16 IsVip { get; set; }
        public Int32 PartnerType { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        public List<object> NoteList { get; set; }
    }
}