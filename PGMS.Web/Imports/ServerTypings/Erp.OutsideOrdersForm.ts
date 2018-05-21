namespace PGMS.Erp {
    export interface OutsideOrdersForm {
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
        Description: Serenity.HtmlNoteContentEditor;
        Name: Serenity.StringEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
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
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DateTimeEditor;
                var w5 = NotesEditor;

                Q.initFormType(OutsideOrdersForm, [
                    'PriceTheyOffer', w0,
                    'PriceWeSell', w0,
                    'Description', w1,
                    'Name', w2,
                    'AccountRepresentsId', w3,
                    'CompanyRepresentsId', w3,
                    'OrderStatusId', w3,
                    'AssignUserId', w3,
                    'DeadLine', w4,
                    'NoteList', w5
                ]);
            }
        }
    }
}
