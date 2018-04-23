using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class OrderDetailsGridAttribute : CustomEditorAttribute
    {
        public const string Key = "PGMS.Erp.OrderDetailsGrid";

        public OrderDetailsGridAttribute()
            : base(Key)
        {
        }
    }
}
