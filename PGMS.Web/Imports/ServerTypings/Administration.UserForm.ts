namespace PGMS.Administration {
    export interface UserForm {
        UserId: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;

                Q.initFormType(UserForm, [
                    'UserId', w0,
                    'Username', w1,
                    'DisplayName', w1,
                    'Email', w2,
                    'UserImage', w3,
                    'Password', w4,
                    'PasswordConfirm', w4,
                    'Source', w1
                ]);
            }
        }
    }
}
