namespace PGMS.Erp {
    export interface BudgetsForm {
        BudgetId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
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
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = NotesEditor;

                Q.initFormType(BudgetsForm, [
                    'BudgetId', w0,
                    'Name', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'PaymentTypeId', w3,
                    'NoteList', w4
                ]);
            }
        }
    }
}
