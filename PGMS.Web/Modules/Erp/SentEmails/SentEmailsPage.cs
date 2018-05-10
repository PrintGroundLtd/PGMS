
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.SentEmails.PagePermission)]
    public class SentEmailsController : Controller
    {
        [Route("Erp/SentEmails")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.SentEmails.SentEmailsIndex);
        }
    }
}