using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class CompaniesListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.CompaniesListFormatter";

        public CompaniesListFormatterAttribute()
            : base(Key)
        {
        }
    }
}
