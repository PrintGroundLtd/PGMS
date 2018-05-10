namespace PGMS.Erp {
    export interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        Width: Serenity.DecimalEditor;
        Height: Serenity.DecimalEditor;
        Description: Serenity.HtmlNoteContentEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
        NoteList: NotesEditor;
    }

    export class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OrderDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailsForm.init)  {
                OrderDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.HtmlNoteContentEditor;
                var w3 = s.IntegerEditor;
                var w4 = NotesEditor;

                Q.initFormType(OrderDetailsForm, [
                    'ProductId', w0,
                    'Width', w1,
                    'Height', w1,
                    'Description', w2,
                    'UnitPrice', w1,
                    'Quantity', w3,
                    'Discount', w1,
                    'NoteList', w4
                ]);
            }
        }
    }
}
