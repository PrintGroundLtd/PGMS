
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OutsideOrdersRow))]
    public class OutsideOrdersController : Controller
    {
        [Route("Erp/OutsideOrders")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/OutsideOrders/OutsideOrdersIndex.cshtml");
        }
    }
}