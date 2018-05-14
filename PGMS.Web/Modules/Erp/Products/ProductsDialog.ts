
namespace PGMS.Erp {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }

        protected form = new ProductsForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }
        loadEntity(entity: Erp.ProductsRow): void {
            super.loadEntity(entity);
            
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
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