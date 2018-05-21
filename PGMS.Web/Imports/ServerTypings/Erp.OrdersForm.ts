namespace PGMS.Erp {
    export interface OrdersForm {
        AccountId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        CuttingManual: Serenity.BooleanEditor;
        CuttingMachine: Serenity.BooleanEditor;
        Printing: Serenity.BooleanEditor;
        Laminating: Serenity.BooleanEditor;
        TransportFolio: Serenity.BooleanEditor;
        Cleaning: Serenity.BooleanEditor;
        Cashing: Serenity.BooleanEditor;
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
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;
                var w4 = s.DateTimeEditor;
                var w5 = s.StringEditor;
                var w6 = NotesEditor;

                Q.initFormType(OrdersForm, [
                    'AccountId', w0,
                    'PaymentTypeId', w0,
                    'DetailList', w1,
                    'CuttingManual', w2,
                    'CuttingMachine', w2,
                    'Printing', w2,
                    'Laminating', w2,
                    'TransportFolio', w2,
                    'Cleaning', w2,
                    'Cashing', w2,
                    'UserId', w0,
                    'OrderStatusId', w0,
                    'OrderDate', w3,
                    'DeadLine', w4,
                    'ShippedDate', w3,
                    'ShipName', w5,
                    'ShipAddress', w5,
                    'ShipCity', w5,
                    'ShipCountry', w5,
                    'NoteList', w6
                ]);
            }
        }
    }
}
