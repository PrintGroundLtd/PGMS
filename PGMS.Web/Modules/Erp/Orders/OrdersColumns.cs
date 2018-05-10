
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
        [FilterOnly()]
        public int CompanyId { get; set; }

        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 OrderName { get; set; }
        [EditLink]
        [AccountFormatter(IsVipProperty = "AccountIsVip")]
        public String AccountName { get; set; }
        public bool AccountIsVip { get; set; }
        [EditLink]
        public String CompanyName { get; set; }
        [OrderStatusesFormatter(BackgroundProperty = "OrderStatusBackgroundColor", BorderProperty = "OrderStatusBorderColor")]
        public String OrderStatusName { get; set; }

        public decimal Total { get; set; }
        [EditLink]
        public String PaymentTypeName { get; set; } 
        public Int16 Width { get; set; }
        public Int16 Height { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime DeadLine { get; set; }
        public DateTime ShippedDate { get; set; }
        [EditLink]
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipCountry { get; set; }
        public String UserUsername { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public Int16 IsActive { get; set; }
        

    }
}