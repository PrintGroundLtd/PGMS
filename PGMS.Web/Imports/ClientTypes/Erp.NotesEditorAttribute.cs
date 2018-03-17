using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace PGMS.Erp
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "PGMS.Erp.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}
