
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderAttachmentsGrid extends Serenity.EntityGrid<OrderAttachmentsRow, any> {
        protected getColumnsKey() { return 'Erp.OrderAttachments'; }
        protected getDialogType() { return OrderAttachmentsDialog; }
        protected getIdProperty() { return OrderAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderAttachmentsRow.localTextPrefix; }
        protected getService() { return OrderAttachmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}