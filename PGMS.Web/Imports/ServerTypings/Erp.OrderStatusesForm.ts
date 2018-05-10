namespace PGMS.Erp {
    export interface OrderStatusesForm {
        Name: Serenity.StringEditor;
        BackgroundColor: Common.ColorPickerEditor;
        BorderColor: Common.ColorPickerEditor;
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
                var w1 = Common.ColorPickerEditor;

                Q.initFormType(OrderStatusesForm, [
                    'Name', w0,
                    'BackgroundColor', w1,
                    'BorderColor', w1
                ]);
            }
        }
    }
}
