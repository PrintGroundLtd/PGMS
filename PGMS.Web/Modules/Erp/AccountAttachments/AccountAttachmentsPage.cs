
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountAttachmentsRow))]
    public class AccountAttachmentsController : Controller
    {
        [Route("Erp/AccountAttachments")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/AccountAttachments/AccountAttachmentsIndex.cshtml");
        }
    }
}