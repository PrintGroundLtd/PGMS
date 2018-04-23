namespace PGMS.Erp {
    export interface ExpensesForm {
        Description: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        TransactionDate: Serenity.DateEditor;
        BudgetId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
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
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ExpensesForm, [
                    'Description', w0,
                    'Total', w1,
                    'TransactionDate', w2,
                    'BudgetId', w3,
                    'PaymentTypeId', w3
                ]);
            }
        }
    }
}
