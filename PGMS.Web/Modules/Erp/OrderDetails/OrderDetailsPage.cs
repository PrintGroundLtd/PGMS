
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrderDetailsRow))]
    public class OrderDetailsController : Controller
    {
        [Route("Erp/OrderDetails")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/OrderDetails/OrderDetailsIndex.cshtml");
        }
    }
}