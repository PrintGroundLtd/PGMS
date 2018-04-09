using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PGMS.Web.Modules.Erp.Budgets;
using Serenity.Web;
using Serenity;
using Serenity.Data;

namespace PGMS.Erp.Scripts
{
    public class BudgetsRowLookupScript<TRow>: RowLookupScript<TRow> where TRow: Row,IBudgetsRow, new()
    {
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            var r = new TRow();

            query.Where(r.StartDate <= DateTime.Now && r.EndDate >= DateTime.Now);
        }
    }
}
