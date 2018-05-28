namespace PGMS.Erp {
    export interface ExpensesForm {
        Name: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        TransactionType: Serenity.EnumEditor;
        PaymentTypeId: Serenity.LookupEditor;
        TransactionDate: Serenity.DateTimeEditor;
        BudgetId: Serenity.LookupEditor;
        Description: Serenity.HtmlNoteContentEditor;
        OrderId: Serenity.LookupEditor;
        OutsideOrderId: Serenity.LookupEditor;
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
                var w1 = s.DecimalEditor;
                var w2 = s.EnumEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DateTimeEditor;
                var w5 = s.HtmlNoteContentEditor;

                Q.initFormType(ExpensesForm, [
                    'Name', w0,
                    'Total', w1,
                    'TransactionType', w2,
                    'PaymentTypeId', w3,
                    'TransactionDate', w4,
                    'BudgetId', w3,
                    'Description', w5,
                    'OrderId', w3,
                    'OutsideOrderId', w3,
                    'UserId', w3
                ]);
            }
        }
    }
}
