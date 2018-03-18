namespace PGMS.Erp {
    export interface OrdersForm {
        AccountId: Serenity.LookupEditor;
        CompanyId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        Width: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        DetailList: OrderDetailsEditor;
        UserId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.IntegerEditor;
                var w2 = OrderDetailsEditor;
                var w3 = s.DateEditor;
                var w4 = s.StringEditor;

                Q.initFormType(OrdersForm, [
                    'AccountId', w0,
                    'CompanyId', w0,
                    'PaymentTypeId', w0,
                    'Width', w1,
                    'Height', w1,
                    'DetailList', w2,
                    'UserId', w0,
                    'OrderStatusId', w0,
                    'OrderDate', w3,
                    'ShippedDate', w3,
                    'ShipName', w4,
                    'ShipAddress', w4,
                    'ShipCity', w4,
                    'ShipCountry', w4
                ]);
            }
        }
    }
}
