
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey() { return SuppliersForm.formKey; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getNameProperty() { return SuppliersRow.nameProperty; }
        protected getService() { return SuppliersService.baseUrl; }

        protected form = new SuppliersForm(this.idPrefix);
        private loadedState: string;
        private productsGrid: ProductSuppliersdGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.productsGrid = new ProductSuppliersdGrid(this.byId("ProductsPropertyGrid"));
            this.productsGrid.element.flexHeightOnly(1);
        }

        loadEntity(entity: Erp.SuppliersRow): void {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Suppliers', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            this.productsGrid.supplierId = entity.SupplierId;
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }



        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    }
}