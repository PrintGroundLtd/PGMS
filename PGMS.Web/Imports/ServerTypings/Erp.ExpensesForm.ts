namespace PGMS.Erp {
    export interface ExpensesForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        Total: Serenity.DecimalEditor;
        TransactionType: Serenity.EnumEditor;
        BudgetId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        TransactionDate: Serenity.DateTimeEditor;
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
                var w3 = s.EnumEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DateTimeEditor;

                Q.initFormType(ExpensesForm, [
                    'Name', w0,
                    'Description', w1,
                    'Total', w2,
                    'TransactionType', w3,
                    'BudgetId', w4,
                    'PaymentTypeId', w4,
                    'UserId', w4,
                    'TransactionDate', w5
                ]);
            }
        }
    }
}
