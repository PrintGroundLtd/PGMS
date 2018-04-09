namespace PGMS.Erp {
    export interface BudgetsForm {
        Name: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        PaymentTypeId: Serenity.LookupEditor;
    }

    export class BudgetsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Budgets';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BudgetsForm.init)  {
                BudgetsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(BudgetsForm, [
                    'Name', w0,
                    'Total', w1,
                    'StartDate', w2,
                    'EndDate', w2,
                    'PaymentTypeId', w3
                ]);
            }
        }
    }
}
