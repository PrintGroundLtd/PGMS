
using Serenity.Extensibility;
using System.ComponentModel;

namespace PGMS.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        public class User
        {
            [Description("Page")]
            public const string PagePermission = "Administration:User:Page";
            [Description("View")]
            public const string ReadPermission = "Administration:User:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Administration:User:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:User:Delete";
        }

        public class UserRoles
        {
            [Description("View")]
            public const string ReadPermission = "Administration:UserRoles:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:UserRoles:Modify";
        }
        public class Role
        {
            [Description("Page")]
            public const string PagePermission = "Administration:Role:Page";
            [Description("View")]
            public const string ReadPermission = "Administration:Role:Read";
            [Description("Update"), ImplicitPermission(ReadPermission)]
            public const string UpdatePermission = "Administration:Role:Update";
            [Description("Delete"), ImplicitPermission(ReadPermission), ImplicitPermission(UpdatePermission)]
            public const string DeletePermission = "Administration:Role:Delete";
        }

        public class UserPermissions
        {
            [Description("View")]
            public const string ReadPermission = "Administration:UserPermissions:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:UserPermissions:Modify";
        }

        public class RolePermissions
        {
            [Description("View")]
            public const string ReadPermission = "Administration:RolePermissions:Read";
            [Description("Modify"), ImplicitPermission(ReadPermission)]
            public const string ModifyPermission = "Administration:RolePermissions:Modify";
        }

        [Description("Sergen")]
        public const string Sergen = "Sergen";

        [Description("Insert user name, update date and etc.")]
        public const string Auditing = "Administration:Auditing";

        //[Description("User, Role Management and Permissions")]
        //public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";
    }
}
