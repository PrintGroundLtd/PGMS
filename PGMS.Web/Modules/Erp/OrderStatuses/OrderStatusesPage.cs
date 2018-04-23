
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.OrderStatuses.PagePermission)]
    public class OrderStatusesController : Controller
    {
        [Route("Erp/OrderStatuses")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.OrderStatuses.OrderStatusesIndex);
        }
    }
}