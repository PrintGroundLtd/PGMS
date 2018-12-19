namespace PGMS.Erp {
    export interface OrdersForm {
        Name: Serenity.StringEditor;
        AccountId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        WithVat: Serenity.BooleanEditor;
        DetailList: OrderDetailsEditor;
        CuttingByOne: Serenity.BooleanEditor;
        CuttingManual: Serenity.BooleanEditor;
        CuttingMachine: Serenity.BooleanEditor;
        Printing: Serenity.BooleanEditor;
        Laminating: Serenity.BooleanEditor;
        TransportFolio: Serenity.BooleanEditor;
        Cleaning: Serenity.BooleanEditor;
        Cashing: Serenity.BooleanEditor;
        OrderStatusId: Serenity.LookupEditor;
        UserId: Serenity.LookupEditor;
        StartDate: Serenity.DateTimeEditor;
        DeadLine: Serenity.DateTimeEditor;
        NotReal: Serenity.BooleanEditor;
        OrderDate: Serenity.DateEditor;
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
                var w2 = s.BooleanEditor;
                var w3 = OrderDetailsEditor;
                var w4 = s.DateTimeEditor;
                var w5 = s.DateEditor;
                var w6 = NotesEditor;

                Q.initFormType(OrdersForm, [
                    'Name', w0,
                    'AccountId', w1,
                    'PaymentTypeId', w1,
                    'WithVat', w2,
                    'DetailList', w3,
                    'CuttingByOne', w2,
                    'CuttingManual', w2,
                    'CuttingMachine', w2,
                    'Printing', w2,
                    'Laminating', w2,
                    'TransportFolio', w2,
                    'Cleaning', w2,
                    'Cashing', w2,
                    'OrderStatusId', w1,
                    'UserId', w1,
                    'StartDate', w4,
                    'DeadLine', w4,
                    'NotReal', w2,
                    'OrderDate', w5,
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
