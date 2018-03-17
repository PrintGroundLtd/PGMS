
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SuppliersRow))]
    public class SuppliersController : Controller
    {
        [Route("Erp/Suppliers")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Suppliers/SuppliersIndex.cshtml");
        }
    }
}