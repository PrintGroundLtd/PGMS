
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.AccountOrders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class AccountOrdersColumns
    {
        [FilterOnly()]
        public int OrderStatusId { get; set; }
        [FilterOnly()]
        public int UserId { get; set; }
        [Hidden]
        public int AccountId { get; set; }
        //[FilterOnly()]
        //public int CompanyId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(100)]
        public String OrderIdName { get; set; }

        [EditLink, Width(100)]
        public String Name { get; set; }
        //[EditLink]
        //public String CompanyName { get; set; }
        [OrderStatusesFormatter(BackgroundProperty = "OrderStatusBackgroundColor", BorderProperty = "OrderStatusBorderColor")]
        public String OrderStatusName { get; set; }

        public decimal Total { get; set; }
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

        public String UserUsername { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}