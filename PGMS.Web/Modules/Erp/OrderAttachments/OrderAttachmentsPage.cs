
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.OrderAttachments.PagePermission)]
    public class OrderAttachmentsController : Controller
    {
        [Route("Erp/OrderAttachments")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.OrderAttachments.OrderAttachmentsIndex);
        }
    }
}