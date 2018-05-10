
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.OutsideOrders.PagePermission)]
    public class OutsideOrdersController : Controller
    {
        [Route("Erp/OutsideOrders")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.OutsideOrders.OutsideOrdersIndex);
        }
    }
}