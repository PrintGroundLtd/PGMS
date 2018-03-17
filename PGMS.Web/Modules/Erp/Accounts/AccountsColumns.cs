
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.Accounts")]
    [BasedOnRow(typeof(Entities.AccountsRow), CheckNames = true)]
    public class AccountsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AccountId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String PhoneNumber { get; set; }
        public Int16 IsVip { get; set; }
        public String PartnerTypeName { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
    }
}