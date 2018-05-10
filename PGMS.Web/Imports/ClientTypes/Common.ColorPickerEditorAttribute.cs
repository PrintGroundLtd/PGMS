using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Common
{
    public partial class ColorPickerEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PGMS.Common.ColorPickerEditor";

        public ColorPickerEditorAttribute()
            : base(Key)
        {
        }
    }
}
