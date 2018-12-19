using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class OrdersIsRealFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.OrdersIsRealFormatter";

        public OrdersIsRealFormatterAttribute()
            : base(Key)
        {
        }

        public String IsRealProperty
        {
            get { return GetOption<String>("isRealProperty"); }
            set { SetOption("isRealProperty", value); }
        }
    }
}
