
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.OutsideOrderAttachments.PagePermission)]
    public class OutsideOrderAttachmentsController : Controller
    {
        [Route("Erp/OutsideOrderAttachments")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.OutsideOrderAttachments.OutsideOrderAttachmentsIndex);
        }
    }
}