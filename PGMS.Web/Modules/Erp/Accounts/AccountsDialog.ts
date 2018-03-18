namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey() { return AccountsForm.formKey; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getNameProperty() { return AccountsRow.nameProperty; }
        protected getService() { return AccountsService.baseUrl; }

        protected form = new AccountsForm(this.idPrefix);
        private attachmentsGrid: AccountAttachmentsExtendedGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            this.attachmentsGrid = new AccountAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.element.flexHeightOnly(1);
        }

        loadEntity(entity: Erp.AccountsRow): void {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
            this.attachmentsGrid.accountId = entity.AccountId;
        }
    }
}