using System;
using System.Collections.Generic;
using System.Linq;
using Serenity.Navigation;
using MyPages = PGMS.Erp.Pages;
using System.Threading.Tasks;

[assembly: NavigationLink(1050, "Suppliers", typeof(MyPages.SuppliersController), icon: null)]
[assembly: NavigationLink(1100, "Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(1150, "Companies", typeof(MyPages.CompaniesController), icon: null)]
[assembly: NavigationLink(1200, "Products", typeof(MyPages.ProductsController), icon: null)]
[assembly: NavigationLink(1200, "Orders", typeof(MyPages.OrdersController), icon: null)]
[assembly: NavigationLink(1300, "Budgets", typeof(MyPages.BudgetsController), icon: null)]
[assembly: NavigationMenu(1350, "Attachments",  icon: null)]
[assembly: NavigationLink(1360, "Attachments/For Accounts", typeof(MyPages.AccountAttachmentsController), icon: null)]
[assembly: NavigationLink(1400, "Administration/Partner Types", typeof(MyPages.PartnerTypesController), icon: null)]
[assembly: NavigationLink(1400, "Administration/Order Statuses", typeof(MyPages.OrderStatusesController), icon: null)]
[assembly: NavigationLink(1400, "Administration/Payment Types", typeof(MyPages.PaymentTypesController), icon: null)]
 