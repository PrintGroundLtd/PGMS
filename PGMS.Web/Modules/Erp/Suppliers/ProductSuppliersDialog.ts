/// <reference path="../Products/ProductsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ProductSuppliersdDialog extends ProductsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true); 
        }

    }
}