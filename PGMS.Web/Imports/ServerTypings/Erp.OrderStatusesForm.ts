namespace PGMS.Erp {
    export interface OrderStatusesForm {
        Name: Serenity.StringEditor;
    }

    export class OrderStatusesForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OrderStatuses';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderStatusesForm.init)  {
                OrderStatusesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OrderStatusesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
