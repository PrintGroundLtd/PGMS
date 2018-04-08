﻿namespace PGMS.Erp {
    export interface PartnersForm {
        Name: Serenity.StringEditor;
        HardPercent: Serenity.IntegerEditor;
    }

    export class PartnersForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Partners';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartnersForm.init)  {
                PartnersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PartnersForm, [
                    'Name', w0,
                    'HardPercent', w1
                ]);
            }
        }
    }
}
