namespace PGMS.Erp {
    export interface AccountsForm {
        AccountId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        PartnerType: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        IsVip: Serenity.BooleanEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.EmailEditor;
                var w3 = s.LookupEditor;
                var w4 = s.BooleanEditor;
                var w5 = NotesEditor;

                Q.initFormType(AccountsForm, [
                    'AccountId', w0,
                    'Name', w1,
                    'Email', w2,
                    'PartnerType', w3,
                    'PhoneNumber', w1,
                    'IsVip', w4,
                    'Address', w1,
                    'City', w1,
                    'Country', w1,
                    'NoteList', w5
                ]);
            }
        }
    }
}
