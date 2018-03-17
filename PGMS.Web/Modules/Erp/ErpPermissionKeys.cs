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

        public class PartnerTypes
        {
            [Description("View")]
            public const string ReadPermission = "Erp:PartnerTypes:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Erp:PartnerTypes:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Erp:PartnerTypes:Delete";
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
        
    }
}
