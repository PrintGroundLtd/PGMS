namespace PGMS.Erp {
    export interface ExpensesForm {
        Name: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        TransactionType: Serenity.EnumEditor;
        WithVat: Serenity.BooleanEditor;
        PaymentTypeId: Serenity.LookupEditor;
        TransactionDate: Serenity.DateTimeEditor;
        BudgetId: Serenity.LookupEditor;
        Description: Serenity.HtmlNoteContentEditor;
        AccountId: Serenity.LookupEditor;
        OrderId: Serenity.LookupEditor;
        OutsideOrderId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        NoteList: NotesEditor;
    }

    export class ExpensesForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Expenses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpensesForm.init)  {
                ExpensesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DateTimeEditor;
                var w6 = s.HtmlNoteContentEditor;
                var w7 = NotesEditor;

                Q.initFormType(ExpensesForm, [
                    'Name', w0,
                    'Total', w1,
                    'TransactionType', w2,
                    'WithVat', w3,
                    'PaymentTypeId', w4,
                    'TransactionDate', w5,
                    'BudgetId', w4,
                    'Description', w6,
                    'AccountId', w4,
                    'OrderId', w4,
                    'OutsideOrderId', w4,
                    'UserId', w4,
                    'NoteList', w7
                ]);
            }
        }
    }
}
