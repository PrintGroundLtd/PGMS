
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountAttachmentsGrid extends Serenity.EntityGrid<AccountAttachmentsRow, any> {
        protected getColumnsKey() { return 'Erp.AccountAttachments'; }
        protected getDialogType() { return AccountAttachmentsDialog; }
        protected getIdProperty() { return AccountAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountAttachmentsRow.localTextPrefix; }
        protected getService() { return AccountAttachmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        

    }
}