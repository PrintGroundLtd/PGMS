using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Serenity.Extensibility;

namespace PGMS.Erp
{
    [NestedPermissionKeys]
    [DisplayName("Erp")]
    public class PermissionKeys
    {
        public class Reports
        {
            [Description("OrdersPerStatus")]
            public const string OrdersPerStatus = "Erp:Reports:OrdersPerStatus";
            [Description("IncomeVSExpense")]
            public const string IncomeVSExpense = "Erp:Reports:IncomeVSExpense";
            [Description("Page")]
            public const string PagePermission = "Erp:Reports:Page";
        }
        public class Notes
        {
            [Description("View")]
            public const string NotesReadPermission = "Erp:Notes:Read";
            [Description("Modify"), ImplicitPermission(NotesReadPermission)]
            public const string NotesModifyPermission = "Erp:Notes:Modify";
        }
        public class SentEmails
        {
            [Description("Page")]
            public const string PagePermission = "Erp:SentEmails:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:SentEmails:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:SentEmails:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:SentEmails:Delete";
        }

        public class OutsideOrders
        {
            [Description("Page")]
            public const string PagePermission = "Erp:OutsideOrders:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:OutsideOrders:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:OutsideOrders:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:OutsideOrders:Delete";
        }

        public class Partners
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Partners:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Partners:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Partners:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Partners:Delete";
        }

        public class Expenses
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Expenses:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Expenses:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Expenses:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Expenses:Delete";
        }
        public class Budgets
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Budgets:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Budgets:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Budgets:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Budgets:Delete";
        }
        public class Orders
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Orders:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Orders:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Orders:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Orders:Delete";
        }

        public class OrderStatuses
        {
            [Description("Page")]
            public const string PagePermission = "Erp:OrderStatuses:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:OrderStatuses:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:OrderStatuses:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:OrderStatuses:Delete";
        }

        public class PaymentTypes
        {
            [Description("Page")]
            public const string PagePermission = "Erp:PaymentTypes:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:PaymentTypes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:PaymentTypes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:PaymentTypes:Delete";
        }
        public class Products
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Products:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Products:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Products:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Products:Delete";
        }
        public class AccountAttachments
        {
            [Description("Page")]
            public const string PagePermission = "Erp:AccountAttachments:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:AccountAttachments:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:AccountAttachments:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:AccountAttachments:Delete";
        }

        public class OutsideOrderAttachments
        {
            [Description("Page")]
            public const string PagePermission = "Erp:OutsideOrderAttachments:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:OutsideOrderAttachments:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:OutsideOrderAttachments:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:OutsideOrderAttachments:Delete";
        }


        public class PartnerTypes
        {
            [Description("Page")]
            public const string PagePermission = "Erp:PartnerTypes:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:PartnerTypes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:PartnerTypes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:PartnerTypes:Delete";
        }

        public class Accounts
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Accounts:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Accounts:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Accounts:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Accounts:Delete";
        }

        public class Suppliers
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Suppliers:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Suppliers:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Suppliers:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Suppliers:Delete";
        }

        public class Companies 
        {
            [Description("Page")]
            public const string PagePermission = "Erp:Companies:Page";
            [Description("View")]
            public const string ReadPermission = "Erp:Companies:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Companies:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Companies:Delete";
        }
        
    }
}
