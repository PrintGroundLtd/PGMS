using System;
using System.Collections.Generic;
using System.Linq;
using Serenity.Navigation;
using MyPages = PGMS.Erp.Pages;
using System.Threading.Tasks;

[assembly: NavigationLink(1200, "Accounts", typeof(MyPages.AccountsController), icon: "fa-address-book")]
[assembly: NavigationLink(1200, "Companies", typeof(MyPages.CompaniesController), icon: "fa-ship")]
[assembly: NavigationLink(1200, "Products", typeof(MyPages.ProductsController), icon: "fa-cube")]
[assembly: NavigationLink(1200, "Orders", typeof(MyPages.OrdersController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(1200, "Outside Orders", typeof(MyPages.OutsideOrdersController), icon: "fa-map-o")]
[assembly: NavigationLink(1200, "Budgets", typeof(MyPages.BudgetsController), icon: "fa-money")]
[assembly: NavigationLink(1200, "Expenses", typeof(MyPages.ExpensesController), icon: "fa-credit-card")]
[assembly: NavigationLink(1200, "Suppliers", typeof(MyPages.SuppliersController), icon: "fa-truck")]
[assembly: NavigationLink(1200, "Partners", typeof(MyPages.PartnersController), icon: "fa-sitemap")]
[assembly: NavigationMenu(1200, "Attachments",  icon: "fa-file")]
[assembly: NavigationLink(1200, "Attachments/For Accounts", typeof(MyPages.AccountAttachmentsController), icon: null)]
[assembly: NavigationLink(1200, "Sent Emails", typeof(MyPages.SentEmailsController), icon: "fa-envelope-o")]
[assembly: NavigationLink(1200, "Reports", typeof(MyPages.ReportsController), icon: "fa-files-o")]

[assembly: NavigationLink(1400, "Administration/Partner Types", typeof(MyPages.PartnerTypesController), icon: null)]
[assembly: NavigationLink(1400, "Administration/Order Statuses", typeof(MyPages.OrderStatusesController), icon: null)]
[assembly: NavigationLink(1400, "Administration/Payment Types", typeof(MyPages.PaymentTypesController), icon: null)]
 