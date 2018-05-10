
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Suppliers.PagePermission)]
    public class SuppliersController : Controller
    {
        [Route("Erp/Suppliers")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Suppliers.SuppliersIndex);
        }
    }
}