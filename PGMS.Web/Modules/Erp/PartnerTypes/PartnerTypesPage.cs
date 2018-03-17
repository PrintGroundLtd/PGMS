
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.PartnerTypesRow))]
    public class PartnerTypesController : Controller
    {
        [Route("Erp/PartnerTypes")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/PartnerTypes/PartnerTypesIndex.cshtml");
        }
    }
}