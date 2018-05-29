using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class CheckboxColoredFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.CheckboxColoredFormatter";

        public CheckboxColoredFormatterAttribute()
            : base(Key)
        {
        }
    }
}
