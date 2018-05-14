namespace PGMS.Erp {
    export interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        Description: Serenity.HtmlNoteContentEditor;
        Width: Serenity.DecimalEditor;
        Height: Serenity.DecimalEditor;
        Quadrature: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        AdditionalCosts: Serenity.DecimalEditor;
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
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = NotesEditor;

                Q.initFormType(OrderDetailsForm, [
                    'ProductId', w0,
                    'Description', w1,
                    'Width', w2,
                    'Height', w2,
                    'Quadrature', w2,
                    'Quantity', w3,
                    'UnitPrice', w2,
                    'Discount', w2,
                    'AdditionalCosts', w2,
                    'NoteList', w4
                ]);
            }
        }
    }
}
