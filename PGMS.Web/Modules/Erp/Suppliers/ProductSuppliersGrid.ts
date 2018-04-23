///<reference path="./../Products/ProductsGrid.ts"/>
///<reference path="./../Products/ProductsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ProductSuppliersdGrid extends ProductsGrid {
        protected getDialogType() { return ProductSuppliersdDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ SupplierId: this.supplierId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
                return super.getGridCanLoad() && !!this.supplierId;
        }

        private _supplierId: number;

        get supplierId() {
            return this._supplierId;
        }

        set supplierId(value: number) {
            if (this._supplierId !== value) {
                this._supplierId = value;
                this.setEquality('SupplierId', value);
                this.refresh();
            }
        }

    }
}