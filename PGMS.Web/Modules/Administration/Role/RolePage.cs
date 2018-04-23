namespace PGMS.Administration.Pages
{
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Role.PagePermission)]
    public class RoleController : Controller
    {
        [Route("Administration/Role")]
        public ActionResult Index()
        {
            return View(MVC.Views.Administration.Role.RoleIndex);
        }
    }
}