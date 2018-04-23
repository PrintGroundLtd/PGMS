namespace PGMS.Erp {
    export interface ProductsForm {
        Name: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierId: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
        NoteList: NotesEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Erp.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.IntegerEditor;
                var w6 = NotesEditor;

                Q.initFormType(ProductsForm, [
                    'Name', w0,
                    'ProductImage', w1,
                    'Discontinued', w2,
                    'SupplierId', w3,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w4,
                    'UnitsInStock', w5,
                    'UnitsOnOrder', w5,
                    'ReorderLevel', w5,
                    'NoteList', w6
                ]);
            }
        }
    }
}
