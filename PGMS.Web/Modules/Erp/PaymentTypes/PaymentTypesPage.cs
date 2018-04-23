
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PaymentTypesRow))]
    public class PaymentTypesController : Controller
    {
        [Route("Erp/PaymentTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/PaymentTypes/PaymentTypesIndex.cshtml");
        }
    }
}