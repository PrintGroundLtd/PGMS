namespace PGMS.Erp {
    export interface OutsideOrdersForm {
        Name: Serenity.StringEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
        AssignUserId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        DeadLine: Serenity.DateTimeEditor;
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
        WithVat: Serenity.BooleanEditor;
        Description: Serenity.HtmlNoteContentEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.HtmlNoteContentEditor;
                var w6 = NotesEditor;

                Q.initFormType(OutsideOrdersForm, [
                    'Name', w0,
                    'AccountRepresentsId', w1,
                    'OrderStatusId', w1,
                    'CompanyRepresentsId', w1,
                    'AssignUserId', w1,
                    'StartDate', w2,
                    'DeadLine', w2,
                    'PriceTheyOffer', w3,
                    'PriceWeSell', w3,
                    'WithVat', w4,
                    'Description', w5,
                    'NoteList', w6
                ]);
            }
        }
    }
}
