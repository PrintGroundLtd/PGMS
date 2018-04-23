
using Serenity.Data;


namespace PGMS.Web.Modules.Erp.Budgets
{
    public interface IBudgetsRow
    {
        DateTimeField StartDate { get; }
        DateTimeField EndDate { get; }

    }
}
