namespace PGMS.Erp {
    export interface ExpensesAttachmentsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        ExpenseId: Serenity.LookupEditor;
    }

    export class ExpensesAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.ExpensesAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensesAttachmentsForm.init)  {
                ExpensesAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ExpensesAttachmentsForm, [
                    'Name', w0,
                    'Description', w1,
                    'FilePath', w2,
                    'ExpenseId', w3
                ]);
            }
        }
    }
}
