
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Companies.PagePermission)]
    public class CompaniesController : Controller
    {
        [Route("Erp/Companies")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Companies.CompaniesIndex);
        }
    }
}