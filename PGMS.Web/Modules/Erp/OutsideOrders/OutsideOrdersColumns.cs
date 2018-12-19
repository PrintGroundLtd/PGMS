
namespace PGMS.Erp.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Erp.OutsideOrders")]
    [BasedOnRow(typeof(Entities.OutsideOrdersRow), CheckNames = true)]
    public class OutsideOrdersColumns
    {
        [FilterOnly()]
        public int OrderStatusId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OutsideOrderId { get; set; }
        [QuickFilter(), FilterOnly]
        public Int32 AccountRepresentsId { get; set; }
        [QuickFilter(), FilterOnly()]
        public Int32 CompanyRepresentsId { get; set; }
        [QuickFilter(), FilterOnly()]
        public Int32 AssignUserId { get; set; }

        [EditLink]
        public String Name { get; set; }
        public Decimal PriceTheyOffer { get; set; }
        public Decimal PriceWeSell { get; set; }
        public Boolean WithVat { get; set; }

        public DateTime StartDate { get; set; }

        [DeadlineFormatter]
        public DateTime DeadLine { get; set; }
        public decimal PaymentsTotal { get; set; }

        [EditLink(IdField = "AccountRepresentsId", ItemType = "Erp.Accounts")]
        [AccountFormatter(IsVipProperty = "AccountRepresentsIsVip")]
        [Hint("Open Account")]
        public String AccountRepresentsName { get; set; }
        public String AccountRepresentsPhoneNumber { get; set; }
        public String AccountRepresentsEmail { get; set; }
        public String AccountPartnerTypeName { get; set; }

        public String CompanyRepresentsName { get; set; }

        [OrderStatusesFormatter(BackgroundProperty = "OrderStatusBackgroundColor", BorderProperty = "OrderStatusBorderColor")]
        [QuickFilter()]
        public String OrderStatusName { get; set; }
        public String AssignUserDisplayName { get; set; }

        [QuickFilter()]
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserName { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserName { get; set; }
        public bool IsActive { get; set; }
    }
}