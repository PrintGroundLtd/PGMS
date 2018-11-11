
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersColumns
    {
        [FilterOnly()]
        public int OrderStatusId { get; set; }
        [FilterOnly()]
        public int UserId { get; set; }
        [QuickFilter(), FilterOnly()]
        public int AccountId { get; set; } 
        //[FilterOnly()]
        //public int CompanyId { get; set; }
        [EditLink,DisplayName("Db.Shared.RecordId"), Width(100)]
        public String OrderIdName { get; set; }

        [OrdersIsRealFormatter(IsRealProperty = "NotReal"),  Width(100)]
        public String Name { get; set; }
        [EditLink]
        [AccountFormatter(IsVipProperty = "AccountIsVip")]
        public String AccountName { get; set; }
        [EditLink]
        public String AccountPhoneNumber { get; set; }
        [EditLink]
        public String AccountEmail { get; set; }
        public bool AccountIsVip { get; set; }
        public String AccountPartnerTypeName { get; set; }

        //[EditLink]
        //public String CompanyName { get; set; }
        [OrderStatusesFormatter(BackgroundProperty = "OrderStatusBackgroundColor", BorderProperty = "OrderStatusBorderColor")]
        [QuickFilter()]
        public String OrderStatusName { get; set; }
        public Boolean WithVat { get; set; }

        public decimal Total { get; set; }
        public decimal PaymentsTotal { get; set; }

        [CheckboxColoredFormatter]
        public Boolean CuttingByOne { get; set; }
        [CheckboxColoredFormatter]
        public Boolean CuttingManual { get; set; }
        [CheckboxColoredFormatter]
        public Boolean CuttingMachine { get; set; }
        [CheckboxColoredFormatter]
        public Boolean Printing { get; set; }
        [CheckboxColoredFormatter]
        public Boolean Laminating { get; set; }
        [CheckboxColoredFormatter]
        public Boolean TransportFolio { get; set; }
        [CheckboxColoredFormatter]
        public Boolean Cleaning { get; set; }
        [CheckboxColoredFormatter]
        public Boolean Cashing { get; set; }

        [EditLink]
        public String PaymentTypeName { get; set; } 
        public DateTime OrderDate { get; set; }
        public DateTime StartDate { get; set; }
        [DeadlineFormatter]
        public DateTime DeadLine { get; set; }
        public DateTime ShippedDate { get; set; }
        [EditLink]
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipCountry { get; set; }
        public Boolean NotReal { get; set; }

        public String UserDisplayName { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
        

    }
}