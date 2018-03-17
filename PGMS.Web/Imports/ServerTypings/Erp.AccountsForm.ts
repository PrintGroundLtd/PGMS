namespace PGMS.Erp {
    export interface AccountsForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        IsVip: Serenity.BooleanEditor;
        PartnerType: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
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
                var w1 = s.BooleanEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(AccountsForm, [
                    'Name', w0,
                    'PhoneNumber', w0,
                    'IsVip', w1,
                    'PartnerType', w2,
                    'Address', w0,
                    'City', w0,
                    'Country', w0,
                    'InsertDate', w3,
                    'InsertUserId', w4,
                    'UpdateDate', w3,
                    'UpdateUserId', w4,
                    'IsActive', w4
                ]);
            }
        }
    }
}
