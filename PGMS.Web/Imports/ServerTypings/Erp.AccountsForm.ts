namespace PGMS.Erp {
    export interface AccountsForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        AccountCompanies: Serenity.LookupEditor;
        IsVip: Serenity.BooleanEditor;
        PartnerType: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NoteList: NotesEditor;
    }

    export class AccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Accounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AccountsForm.init)  {
                AccountsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.BooleanEditor;
                var w3 = NotesEditor;

                Q.initFormType(AccountsForm, [
                    'Name', w0,
                    'PhoneNumber', w0,
                    'AccountCompanies', w1,
                    'IsVip', w2,
                    'PartnerType', w1,
                    'Address', w0,
                    'City', w0,
                    'Country', w0,
                    'NoteList', w3
                ]);
            }
        }
    }
}
