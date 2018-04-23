using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace PGMS.Erp.Pages
{
    [PageAuthorize(PermissionKeys.Reports.PagePermission)]
    public class ReportsController: Controller
    {
        [Route("Erp/Reports")]
        public ActionResult Index()
        {
            return View("~/Modules/Erp/Reports/ReportsIndex.cshtml");
        }
    }
}
