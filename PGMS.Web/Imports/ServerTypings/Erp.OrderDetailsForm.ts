﻿namespace PGMS.Erp {
    export interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OrderDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailsForm.init)  {
                OrderDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(OrderDetailsForm, [
                    'ProductId', w0,
                    'UnitPrice', w1,
                    'Quantity', w2,
                    'Discount', w1
                ]);
            }
        }
    }
}
