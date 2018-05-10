
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
        public String Email { get; set; }
        [CompaniesListFormatter, Width(300)]
        public List<Int32> AccountCompanies { get; set; }
        [FilterOnly()]
        public Int32 PartnerType { get; set; }

        public String PhoneNumber { get; set; }
        public bool IsVip { get; set; }
        public String PartnerTypeName { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}