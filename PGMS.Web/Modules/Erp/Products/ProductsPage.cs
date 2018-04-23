
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Products.PagePermission)]
    public class ProductsController : Controller
    {
        [Route("Erp/Products")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Products.ProductsIndex);
        }
    }
}