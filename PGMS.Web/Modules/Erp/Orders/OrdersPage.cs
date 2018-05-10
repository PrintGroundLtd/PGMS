
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Orders.PagePermission)]
    public class OrdersController : Controller
    {
        [Route("Erp/Orders")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Orders.OrdersIndex);
        }
    }
}