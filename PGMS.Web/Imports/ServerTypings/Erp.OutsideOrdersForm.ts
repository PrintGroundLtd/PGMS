namespace PGMS.Erp {
    export interface OutsideOrdersForm {
        Name: Serenity.StringEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(OutsideOrdersForm, [
                    'Name', w0,
                    'AccountRepresentsId', w1,
                    'CompanyRepresentsId', w1,
                    'PriceTheyOffer', w2,
                    'PriceWeSell', w2
                ]);
            }
        }
    }
}
