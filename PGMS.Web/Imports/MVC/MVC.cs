using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Erp
        {
            public static class AccountAttachments
            {
                public const string AccountAttachmentsIndex = "~/Modules/Erp/AccountAttachments/AccountAttachmentsIndex.cshtml";
            }

            public static class Accounts
            {
                public const string AccountsIndex = "~/Modules/Erp/Accounts/AccountsIndex.cshtml";
            }

            public static class Budgets
            {
                public const string BudgetsIndex = "~/Modules/Erp/Budgets/BudgetsIndex.cshtml";
            }

            public static class Companies
            {
                public const string CompaniesIndex = "~/Modules/Erp/Companies/CompaniesIndex.cshtml";
            }

            public static class Expenses
            {
                public const string ExpensesIndex = "~/Modules/Erp/Expenses/ExpensesIndex.cshtml";
            }

            public static class OrderDetails
            {
                public const string OrderDetailsIndex = "~/Modules/Erp/OrderDetails/OrderDetailsIndex.cshtml";
            }

            public static class Orders
            {
                public const string OrdersIndex = "~/Modules/Erp/Orders/OrdersIndex.cshtml";
            }

            public static class OrderStatuses
            {
                public const string OrderStatusesIndex = "~/Modules/Erp/OrderStatuses/OrderStatusesIndex.cshtml";
            }

            public static class OutsideOrderAttachments
            {
                public const string OutsideOrderAttachmentsIndex = "~/Modules/Erp/OutsideOrderAttachments/OutsideOrderAttachmentsIndex.cshtml";
            }

            public static class OutsideOrders
            {
                public const string OutsideOrdersIndex = "~/Modules/Erp/OutsideOrders/OutsideOrdersIndex.cshtml";
            }

            public static class Partners
            {
                public const string PartnersIndex = "~/Modules/Erp/Partners/PartnersIndex.cshtml";
            }

            public static class PartnerTypes
            {
                public const string PartnerTypesIndex = "~/Modules/Erp/PartnerTypes/PartnerTypesIndex.cshtml";
            }

            public static class PaymentTypes
            {
                public const string PaymentTypesIndex = "~/Modules/Erp/PaymentTypes/PaymentTypesIndex.cshtml";
            }

            public static class Products
            {
                public const string ProductsIndex = "~/Modules/Erp/Products/ProductsIndex.cshtml";
            }

            public static class Reports
            {
                public const string ReportsIndex = "~/Modules/Erp/Reports/ReportsIndex.cshtml";
            }

            public static class SentEmails
            {
                public const string SentEmailsIndex = "~/Modules/Erp/SentEmails/SentEmailsIndex.cshtml";
            }

            public static class Suppliers
            {
                public const string SuppliersIndex = "~/Modules/Erp/Suppliers/SuppliersIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

    }
}
