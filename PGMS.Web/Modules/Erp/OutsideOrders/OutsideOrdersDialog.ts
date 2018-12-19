
namespace PGMS.Erp {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class OutsideOrdersDialog extends Serenity.EntityDialog<OutsideOrdersRow, any> {
        protected getFormKey() { return OutsideOrdersForm.formKey; }
        protected getIdProperty() { return OutsideOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrdersRow.localTextPrefix; }
        protected getNameProperty() { return OutsideOrdersRow.nameProperty; }
        protected getService() { return OutsideOrdersService.baseUrl; }

        protected form = new OutsideOrdersForm(this.idPrefix);
        private loadedState: string;

        private attachmentsGrid: OutsideOrderAttachmentsExtendedGrid;
        private expensesGrid: OutsideOrderExpensesGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            
            this.attachmentsGrid = new OutsideOrderAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.openDialogsAsPanel = false;
            this.attachmentsGrid.element.flexHeightOnly(1);

            this.expensesGrid = new OutsideOrderExpensesGrid(this.byId("ExpensesPropertyGrid"));
            this.expensesGrid.element.flexHeightOnly(1);
            this.expensesGrid.openDialogsAsPanel = false;


            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        protected getCloningEntity() {
            var clone = super.getCloningEntity();

            // add (Clone) suffix if it's not already added
            var suffix = ' ' + Q.tryGetText("Site.OutsideOrders.CloneNameSuffix");
            if (!Q.endsWith(clone.Name || '', suffix)) {
                clone.Name = (clone.Name || '') + suffix;
            }
            clone.NoteList = [];

            return clone;
        }

        protected updateInterface() {

            // by default cloneButton is hidden in base UpdateInterface method
            super.updateInterface();

            // here we show it if it is edit mode (not new)
            this.cloneButton.toggle(this.isEditMode());
        }
        loadEntity(entity: Erp.OutsideOrdersRow): void {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Expenses', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());

            this.attachmentsGrid.outsideOrderId = entity.OutsideOrderId;
            this.expensesGrid.outsideOrderId = entity.OutsideOrderId;
            this.expensesGrid.accountId = entity.AccountRepresentsId;

            if (this.isNew()) {
                var date = new Date();
                date.setDate(date.getDate() + 2);
                this.form.DeadLine.value = date.toISOString();
            }
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