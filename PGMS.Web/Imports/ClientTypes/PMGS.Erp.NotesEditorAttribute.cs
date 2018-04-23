using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PMGS.Erp
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PMGS.Erp.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
