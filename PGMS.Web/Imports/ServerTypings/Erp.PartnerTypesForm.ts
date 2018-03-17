namespace PGMS.Erp {
    export interface PartnerTypesForm {
        Name: Serenity.StringEditor;
    }

    export class PartnerTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.PartnerTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartnerTypesForm.init)  {
                PartnerTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PartnerTypesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
