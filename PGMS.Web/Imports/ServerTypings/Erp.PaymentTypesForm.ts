namespace PGMS.Erp {
    export interface PaymentTypesForm {
        Name: Serenity.StringEditor;
    }

    export class PaymentTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.PaymentTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaymentTypesForm.init)  {
                PaymentTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PaymentTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
