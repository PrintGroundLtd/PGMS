
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class SentEmailsGrid extends Serenity.EntityGrid<SentEmailsRow, any> {
        protected getColumnsKey() { return 'Erp.SentEmails'; }
        protected getDialogType() { return SentEmailsDialog; }
        protected getIdProperty() { return SentEmailsRow.idProperty; }
        protected getLocalTextPrefix() { return SentEmailsRow.localTextPrefix; }
        protected getService() { return SentEmailsService.baseUrl; }
        protected getIsActiveProperty() { return SentEmailsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}