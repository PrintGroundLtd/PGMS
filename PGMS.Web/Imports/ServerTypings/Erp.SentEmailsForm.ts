namespace PGMS.Erp {
    export interface SentEmailsForm {
        FromEmail: Serenity.EmailEditor;
        FromName: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        ToEmail: Serenity.EmailEditor;
        ToName: Serenity.StringEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        Body: Serenity.HtmlContentEditor;
    }

    export class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.SentEmails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SentEmailsForm.init)  {
                SentEmailsForm.init = true;

                var s = Serenity;
                var w0 = s.EmailEditor;
                var w1 = s.StringEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.HtmlContentEditor;

                Q.initFormType(SentEmailsForm, [
                    'FromEmail', w0,
                    'FromName', w1,
                    'Subject', w1,
                    'ToEmail', w0,
                    'ToName', w1,
                    'Attachments', w2,
                    'Body', w3
                ]);
            }
        }
    }
}
