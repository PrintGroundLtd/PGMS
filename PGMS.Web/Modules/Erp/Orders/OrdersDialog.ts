
namespace PGMS.Erp {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey() { return OrdersForm.formKey; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getNameProperty() { return OrdersRow.nameProperty; }
        protected getService() { return OrdersService.baseUrl; }

        protected form = new OrdersForm(this.idPrefix);
        private loadedState: string;
        private attachmentsGrid: OrderAttachmentsExtendedGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.attachmentsGrid = new OrderAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.openDialogsAsPanel = false;
            this.attachmentsGrid.element.flexHeightOnly(1);
        }
        loadEntity(entity: Erp.OrdersRow): void {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
            this.attachmentsGrid.orderId = entity.OrderId;

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