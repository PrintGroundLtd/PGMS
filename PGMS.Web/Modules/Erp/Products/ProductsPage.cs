
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductsRow))]
    public class ProductsController : Controller
    {
        [Route("Erp/Products")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Products/ProductsIndex.cshtml");
        }
    }
}