
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrderStatusesRow))]
    public class OrderStatusesController : Controller
    {
        [Route("Erp/OrderStatuses")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/OrderStatuses/OrderStatusesIndex.cshtml");
        }
    }
}