namespace PGMS.Erp {
    export interface CompaniesForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Eik: Serenity.StringEditor;
        Mol: Serenity.StringEditor;
        Iban: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        BankSwift: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }

    export class CompaniesForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Companies';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CompaniesForm.init)  {
                CompaniesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CompaniesForm, [
                    'Name', w0,
                    'PhoneNumber', w0,
                    'Eik', w0,
                    'Mol', w0,
                    'Iban', w0,
                    'BankName', w0,
                    'BankSwift', w0,
                    'Address', w0,
                    'City', w0,
                    'Country', w0
                ]);
            }
        }
    }
}
