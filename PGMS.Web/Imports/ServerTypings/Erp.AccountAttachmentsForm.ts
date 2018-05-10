namespace PGMS.Erp {
    export interface AccountAttachmentsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        AccountId: Serenity.LookupEditor;
    }

    export class AccountAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.AccountAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountAttachmentsForm.init)  {
                AccountAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(AccountAttachmentsForm, [
                    'Name', w0,
                    'Description', w1,
                    'FilePath', w2,
                    'AccountId', w3
                ]);
            }
        }
    }
}
