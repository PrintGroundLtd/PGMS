
namespace PGMS.Erp {

    @Serenity.Decorators.panel()
    @Serenity.Decorators.maximizable()
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
        private expensesGrid: OrderExpensesGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));


            this.attachmentsGrid = new OrderAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.openDialogsAsPanel = false;
            this.attachmentsGrid.element.flexHeightOnly(1);

            this.expensesGrid = new OrderExpensesGrid(this.byId("ExpensesPropertyGrid"));
            this.expensesGrid.element.flexHeightOnly(1);
            this.expensesGrid.openDialogsAsPanel = false;

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }
        loadEntity(entity: Erp.OrdersRow): void {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Expenses', this.isNewOrDeleted());

            if (this.isNew()) {
                var date = new Date();
                date.setDate(date.getDate() + 2);
                this.form.DeadLine.value =date.toISOString();
            }
            this.attachmentsGrid.orderId = entity.OrderId;
            this.expensesGrid.orderId = entity.OrderId;
            this.expensesGrid.accountId = entity.AccountId;
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