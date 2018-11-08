namespace PGMS.Erp {
    export interface OrdersForm {
        Name: Serenity.StringEditor;
        AccountId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        CuttingByOne: Serenity.BooleanEditor;
        CuttingManual: Serenity.BooleanEditor;
        CuttingMachine: Serenity.BooleanEditor;
        Printing: Serenity.BooleanEditor;
        Laminating: Serenity.BooleanEditor;
        TransportFolio: Serenity.BooleanEditor;
        Cleaning: Serenity.BooleanEditor;
        Cashing: Serenity.BooleanEditor;
        UserId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        DeadLine: Serenity.DateTimeEditor;
        OrderDate: Serenity.DateEditor;
        NotReal: Serenity.BooleanEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = OrderDetailsEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateTimeEditor;
                var w5 = s.DateEditor;
                var w6 = NotesEditor;

                Q.initFormType(OrdersForm, [
                    'Name', w0,
                    'AccountId', w1,
                    'PaymentTypeId', w1,
                    'DetailList', w2,
                    'CuttingByOne', w3,
                    'CuttingManual', w3,
                    'CuttingMachine', w3,
                    'Printing', w3,
                    'Laminating', w3,
                    'TransportFolio', w3,
                    'Cleaning', w3,
                    'Cashing', w3,
                    'UserId', w1,
                    'OrderStatusId', w1,
                    'StartDate', w4,
                    'DeadLine', w4,
                    'OrderDate', w5,
                    'NotReal', w3,
                    'ShippedDate', w5,
                    'ShipName', w0,
                    'ShipAddress', w0,
                    'ShipCity', w0,
                    'ShipCountry', w0,
                    'NoteList', w6
                ]);
            }
        }
    }
}
