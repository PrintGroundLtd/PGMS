namespace PGMS.Erp {
    export interface BudgetsForm {
        BudgetId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        PaymentTypeId: Serenity.LookupEditor;
        NoteList: NotesEditor;
    }

    export class BudgetsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Budgets';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BudgetsForm.init)  {
                BudgetsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = NotesEditor;

                Q.initFormType(BudgetsForm, [
                    'BudgetId', w0,
                    'Name', w1,
                    'Total', w2,
                    'StartDate', w3,
                    'EndDate', w3,
                    'PaymentTypeId', w4,
                    'NoteList', w5
                ]);
            }
        }
    }
}
