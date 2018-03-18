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
        public class Notes
        {
            [Description("View")]
            public const string NotesReadPermission = "Erp:Notes:Read";
            [Description("Modify"), ImplicitPermission(NotesReadPermission)]
            public const string NotesModifyPermission = "Erp:Notes:Modify";
        }

        public class Products
        {
            [Description("View")]
            public const string ReadPermission = "Erp:Products:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Products:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Products:Delete";
        }
        public class AccountAttachments
        {
            [Description("View")]
            public const string ReadPermission = "Erp:AccountAttachments:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:AccountAttachments:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:AccountAttachments:Delete";
        }
        public class PartnerTypes
        {
            [Description("View")]
            public const string ReadPermission = "Erp:PartnerTypes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:PartnerTypes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:PartnerTypes:Delete";
        }

        public class Accounts
        {
            [Description("View")]
            public const string ReadPermission = "Erp:Accounts:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Accounts:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Accounts:Delete";
        }

        public class Suppliers
        {
            [Description("View")]
            public const string ReadPermission = "Erp:Suppliers:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Suppliers:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Suppliers:Delete";
        }

        public class Companies 
        {
            [Description("View")]
            public const string ReadPermission = "Erp:Companies:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:Companies:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:Companies:Delete";
        }
        
    }
}
