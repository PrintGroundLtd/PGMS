using System;
using System.Collections.Generic;
using System.Linq;
using Serenity.Navigation;
using MyPages = PGMS.Erp.Pages;
using System.Threading.Tasks;

[assembly: NavigationLink(1010, "Partner Types", typeof(MyPages.PartnerTypesController), icon: null)]
[assembly: NavigationLink(1050, "Suppliers", typeof(MyPages.SuppliersController), icon: null)]
[assembly: NavigationLink(1100, "Accounts", typeof(MyPages.AccountsController), icon: null)]
[assembly: NavigationLink(1150, "Companies", typeof(MyPages.CompaniesController), icon: null)]