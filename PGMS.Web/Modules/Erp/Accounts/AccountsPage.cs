
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AccountsRow))]
    public class AccountsController : Controller
    {
        [Route("Erp/Accounts")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Accounts/AccountsIndex.cshtml");
        }
    }
}