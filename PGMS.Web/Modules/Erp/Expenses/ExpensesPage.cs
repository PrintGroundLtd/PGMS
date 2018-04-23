
namespace PGMS.Erp.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ExpensesRow))]
    public class ExpensesController : Controller
    {
        [Route("Erp/Expenses")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Expenses/ExpensesIndex.cshtml");
        }
    }
}