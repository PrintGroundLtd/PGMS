
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.SentEmailsRow))]
    public class SentEmailsController : Controller
    {
        [Route("Erp/SentEmails")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/SentEmails/SentEmailsIndex.cshtml");
        }
    }
}