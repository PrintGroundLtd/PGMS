
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Partners.PagePermission)]
    public class PartnersController : Controller
    {
        [Route("Erp/Partners")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Partners.PartnersIndex);
        }
    }
}