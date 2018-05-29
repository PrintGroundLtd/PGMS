namespace PGMS.Erp {
    export interface AccountsForm {
        AccountId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        PartnerType: Serenity.LookupEditor;
        Email: Serenity.StringEditor;
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
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;
                var w4 = NotesEditor;

                Q.initFormType(AccountsForm, [
                    'AccountId', w0,
                    'Name', w1,
                    'PartnerType', w2,
                    'Email', w1,
                    'PhoneNumber', w1,
                    'IsVip', w3,
                    'Address', w1,
                    'City', w1,
                    'Country', w1,
                    'NoteList', w4
                ]);
            }
        }
    }
}
