
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Budgets.PagePermission)]
    public class BudgetsController : Controller
    {
        [Route("Erp/Budgets")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Budgets.BudgetsIndex);
        }
    }
}