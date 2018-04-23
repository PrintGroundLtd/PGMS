
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.BudgetsRow))]
    public class BudgetsController : Controller
    {
        [Route("Erp/Budgets")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Budgets/BudgetsIndex.cshtml");
        }
    }
}