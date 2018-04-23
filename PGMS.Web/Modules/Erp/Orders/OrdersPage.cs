
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrdersRow))]
    public class OrdersController : Controller
    {
        [Route("Erp/Orders")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Orders/OrdersIndex.cshtml");
        }
    }
}