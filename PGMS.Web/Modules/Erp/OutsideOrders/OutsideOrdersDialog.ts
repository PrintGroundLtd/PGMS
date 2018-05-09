
namespace PGMS.Erp {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OutsideOrdersDialog extends Serenity.EntityDialog<OutsideOrdersRow, any> {
        protected getFormKey() { return OutsideOrdersForm.formKey; }
        protected getIdProperty() { return OutsideOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrdersRow.localTextPrefix; }
        protected getNameProperty() { return OutsideOrdersRow.nameProperty; }
        protected getService() { return OutsideOrdersService.baseUrl; }

        protected form = new OutsideOrdersForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }


        loadEntity(entity: Erp.OrdersRow): void {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());

        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }
    }
}