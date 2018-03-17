namespace PGMS.Erp {
    export interface SuppliersForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }

    export class SuppliersForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Suppliers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersForm.init)  {
                SuppliersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SuppliersForm, [
                    'Name', w0,
                    'PhoneNumber', w0,
                    'Address', w0,
                    'City', w0,
                    'Country', w0
                ]);
            }
        }
    }
}
