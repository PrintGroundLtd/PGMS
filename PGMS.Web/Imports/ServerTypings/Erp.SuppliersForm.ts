namespace PGMS.Erp {
    export interface SuppliersForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        SupplierRepresentatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NoteList: NotesEditor;
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
                var w1 = s.LookupEditor;
                var w2 = NotesEditor;

                Q.initFormType(SuppliersForm, [
                    'Name', w0,
                    'PhoneNumber', w0,
                    'SupplierRepresentatives', w1,
                    'Address', w0,
                    'City', w0,
                    'Country', w0,
                    'NoteList', w2
                ]);
            }
        }
    }
}
