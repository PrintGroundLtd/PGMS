namespace PGMS.Erp {
    export interface OutsideOrderAttachmentsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        OutsideOrderId: Serenity.LookupEditor;
    }

    export class OutsideOrderAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OutsideOrderAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutsideOrderAttachmentsForm.init)  {
                OutsideOrderAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(OutsideOrderAttachmentsForm, [
                    'Name', w0,
                    'Description', w1,
                    'FilePath', w2,
                    'OutsideOrderId', w3
                ]);
            }
        }
    }
}
