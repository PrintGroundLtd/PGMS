
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.ExpenseAttachments.PagePermission)]
    public class ExpensesAttachmentsController : Controller
    {
        [Route("Erp/ExpensesAttachments")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.ExpensesAttachments.ExpensesAttachmentsIndex);
        }
    }
}