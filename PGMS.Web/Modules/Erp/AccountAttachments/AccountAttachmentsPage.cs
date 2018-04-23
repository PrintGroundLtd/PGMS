
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.AccountAttachments.PagePermission)]
    public class AccountAttachmentsController : Controller
    {
        [Route("Erp/AccountAttachments")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.AccountAttachments.AccountAttachmentsIndex);
        }
    }
}