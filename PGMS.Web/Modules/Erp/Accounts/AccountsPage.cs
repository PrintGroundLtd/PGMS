
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Accounts.PagePermission)]
    public class AccountsController : Controller
    {
        [Route("Erp/Accounts")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Accounts.AccountsIndex);
        }
    }
}