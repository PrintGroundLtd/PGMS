namespace PGMS.Erp {
    export interface OrdersForm {
        AccountId: Serenity.LookupEditor;
        CompanyId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        Width: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
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
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(OrdersForm, [
                    'AccountId', w0,
                    'CompanyId', w0,
                    'PaymentTypeId', w0,
                    'Width', w1,
                    'Height', w1,
                    'UserId', w0,
                    'OrderStatusId', w0,
                    'OrderDate', w2,
                    'ShippedDate', w2,
                    'ShipName', w3,
                    'ShipAddress', w3,
                    'ShipCity', w3,
                    'ShipCountry', w3
                ]);
            }
        }
    }
}
