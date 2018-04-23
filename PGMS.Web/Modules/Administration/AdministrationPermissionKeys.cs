
using Serenity.Extensibility;
using System.ComponentModel;

namespace PGMS.Administration
{
    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("Insert user name, update date and etc.")]
        public const string Auditing = "Administration:Auditing";

        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";
    }
}
