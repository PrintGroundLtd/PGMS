namespace PGMS.Erp {
    export interface OrdersForm {
        AccountId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        UserId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        DeadLine: Serenity.DateTimeEditor;
        ShippedDate: Serenity.DateEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
        NoteList: NotesEditor;
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
                var w1 = OrderDetailsEditor;
                var w2 = s.DateEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.StringEditor;
                var w5 = NotesEditor;

                Q.initFormType(OrdersForm, [
                    'AccountId', w0,
                    'PaymentTypeId', w0,
                    'DetailList', w1,
                    'UserId', w0,
                    'OrderStatusId', w0,
                    'OrderDate', w2,
                    'DeadLine', w3,
                    'ShippedDate', w2,
                    'ShipName', w4,
                    'ShipAddress', w4,
                    'ShipCity', w4,
                    'ShipCountry', w4,
                    'NoteList', w5
                ]);
            }
        }
    }
}
