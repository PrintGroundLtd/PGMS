
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.PaymentTypes.PagePermission)]
    public class PaymentTypesController : Controller
    {
        [Route("Erp/PaymentTypes")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.PaymentTypes.PaymentTypesIndex);
        }
    }
}