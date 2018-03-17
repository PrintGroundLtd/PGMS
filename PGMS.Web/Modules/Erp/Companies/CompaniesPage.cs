
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.CompaniesRow))]
    public class CompaniesController : Controller
    {
        [Route("Erp/Companies")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Companies/CompaniesIndex.cshtml");
        }
    }
}