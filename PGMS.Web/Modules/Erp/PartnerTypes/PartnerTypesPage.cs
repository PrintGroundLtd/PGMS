
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.PartnerTypes.PagePermission)]
    public class PartnerTypesController : Controller
    {
        [Route("Erp/PartnerTypes")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.PartnerTypes.PartnerTypesIndex);
        }
    }
}