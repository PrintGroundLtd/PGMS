namespace PGMS.Erp {
    export interface ProductsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.HtmlNoteContentEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierId: Serenity.LookupEditor;
        UnitPriceWithDDS: Serenity.DecimalEditor;
        UnitPricePartner: Serenity.DecimalEditor;
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
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.IntegerEditor;
                var w7 = NotesEditor;

                Q.initFormType(ProductsForm, [
                    'Name', w0,
                    'Description', w1,
                    'ProductImage', w2,
                    'Discontinued', w3,
                    'SupplierId', w4,
                    'UnitPriceWithDDS', w5,
                    'UnitPricePartner', w5,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w5,
                    'UnitsInStock', w6,
                    'UnitsOnOrder', w6,
                    'ReorderLevel', w6,
                    'NoteList', w7
                ]);
            }
        }
    }
}
