namespace PGMS.Erp {
    export interface OutsideOrdersForm {
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
        WithVat: Serenity.BooleanEditor;
        Description: Serenity.HtmlNoteContentEditor;
        Name: Serenity.StringEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
        AssignUserId: Serenity.LookupEditor;
        DeadLine: Serenity.DateTimeEditor;
        NoteList: NotesEditor;
    }

    export class OutsideOrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OutsideOrders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutsideOrdersForm.init)  {
                OutsideOrdersForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.HtmlNoteContentEditor;
                var w3 = s.StringEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DateTimeEditor;
                var w6 = NotesEditor;

                Q.initFormType(OutsideOrdersForm, [
                    'PriceTheyOffer', w0,
                    'PriceWeSell', w0,
                    'WithVat', w1,
                    'Description', w2,
                    'Name', w3,
                    'AccountRepresentsId', w4,
                    'OrderStatusId', w4,
                    'CompanyRepresentsId', w4,
                    'AssignUserId', w4,
                    'DeadLine', w5,
                    'NoteList', w6
                ]);
            }
        }
    }
}
