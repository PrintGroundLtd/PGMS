using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class TransactionTypeFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.TransactionTypeFormatter";

        public TransactionTypeFormatterAttribute()
            : base(Key)
        {
        }
    }
}
