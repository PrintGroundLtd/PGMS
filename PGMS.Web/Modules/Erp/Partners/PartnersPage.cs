
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PartnersRow))]
    public class PartnersController : Controller
    {
        [Route("Erp/Partners")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Partners/PartnersIndex.cshtml");
        }
    }
}