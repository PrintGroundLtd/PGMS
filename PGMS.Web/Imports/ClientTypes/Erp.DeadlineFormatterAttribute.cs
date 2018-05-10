using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class DeadlineFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.DeadlineFormatter";

        public DeadlineFormatterAttribute()
            : base(Key)
        {
        }
    }
}
