namespace PGMS.Erp {
    export interface ExpensesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        Total: Serenity.DecimalEditor;
        TransactionDate: Serenity.DateTimeEditor;
        BudgetId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
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
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.LookupEditor;

                Q.initFormType(ExpensesForm, [
                    'Name', w0,
                    'Description', w1,
                    'Total', w2,
                    'TransactionDate', w3,
                    'BudgetId', w4,
                    'PaymentTypeId', w4,
                    'UserId', w4
                ]);
            }
        }
    }
}
