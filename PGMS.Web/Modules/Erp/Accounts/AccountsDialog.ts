namespace PGMS.Erp {
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey() { return AccountsForm.formKey; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getNameProperty() { return AccountsRow.nameProperty; }
        protected getService() { return AccountsService.baseUrl; }

        protected form = new AccountsForm(this.idPrefix);

        private attachmentsGrid: AccountAttachmentsExtendedGrid;
        private accountOrdersGrid: AccountOrdersGrid;
        private accountOutsideOrdersGrid: AccountOutsideOrdersGrid;

        private loadedState: string;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            this.attachmentsGrid = new AccountAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.openDialogsAsPanel = false;
            this.attachmentsGrid.element.flexHeightOnly(1);

            this.accountOrdersGrid = new AccountOrdersGrid(this.byId("OrdersPropertyGrid"));
            this.accountOrdersGrid.openDialogsAsPanel = false;
            this.accountOrdersGrid.element.flexHeightOnly(1);

            this.accountOutsideOrdersGrid = new AccountOutsideOrdersGrid(this.byId("OutsideOrdersPropertyGrid"));
            this.accountOutsideOrdersGrid.openDialogsAsPanel = false;
            this.accountOutsideOrdersGrid.element.flexHeightOnly(1);

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }

        loadEntity(entity: Erp.AccountsRow): void {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'OutsideOrders', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            this.attachmentsGrid.accountId = entity.AccountId;
            this.accountOrdersGrid.accountId = entity.AccountId;
            this.accountOutsideOrdersGrid.accountRepresentsId = entity.AccountId;
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