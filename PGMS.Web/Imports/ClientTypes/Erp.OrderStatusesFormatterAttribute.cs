using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class OrderStatusesFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "PGMS.Erp.OrderStatusesFormatter";

        public OrderStatusesFormatterAttribute()
            : base(Key)
        {
        }

        public String BackgroundProperty
        {
            get { return GetOption<String>("backgroundProperty"); }
            set { SetOption("backgroundProperty", value); }
        }

        public String BorderProperty
        {
            get { return GetOption<String>("borderProperty"); }
            set { SetOption("borderProperty", value); }
        }
    }
}
