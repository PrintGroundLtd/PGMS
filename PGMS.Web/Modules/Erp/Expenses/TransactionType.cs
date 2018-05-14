using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace PGMS.Erp.Entities
{
    public enum TransactionType
    {
        [Description("Expense")]
        Expense  = 1,
        [Description("Income")]
        Income = 2
    }
}
