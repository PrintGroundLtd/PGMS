using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class AccountFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.AccountFormatter";

        public AccountFormatterAttribute()
            : base(Key)
        {
        }

        public String IsVipProperty
        {
            get { return GetOption<String>("isVipProperty"); }
            set { SetOption("isVipProperty", value); }
        }
    }
}
