
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(PermissionKeys.Expenses.PagePermission)]
    public class ExpensesController : Controller
    {
        [Route("Erp/Expenses")]
        public ActionResult Index()
        {
            return View(MVC.Views.Erp.Expenses.ExpensesIndex);
        }
    }
}