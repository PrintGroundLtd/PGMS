namespace PGMS.Erp {
    export interface OutsideOrdersForm {
        Name: Serenity.StringEditor;
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
    }

    export class OutsideOrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.OutsideOrders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OutsideOrdersForm.init)  {
                OutsideOrdersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(OutsideOrdersForm, [
                    'Name', w0,
                    'PriceTheyOffer', w1,
                    'PriceWeSell', w1,
                    'AccountRepresentsId', w2,
                    'CompanyRepresentsId', w2
                ]);
            }
        }
    }
}
