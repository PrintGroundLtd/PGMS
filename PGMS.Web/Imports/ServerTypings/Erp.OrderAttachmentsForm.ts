namespace PGMS.Erp {
    export interface OrderAttachmentsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        OrderId: Serenity.LookupEditor;
    }

    export class OrderAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OrderAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderAttachmentsForm.init)  {
                OrderAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(OrderAttachmentsForm, [
                    'Name', w0,
                    'Description', w1,
                    'FilePath', w2,
                    'OrderId', w3
                ]);
            }
        }
    }
}
