
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrderAttachmentsGrid extends Serenity.EntityGrid<OutsideOrderAttachmentsRow, any> {
        protected getColumnsKey() { return 'Erp.OutsideOrderAttachments'; }
        protected getDialogType() { return OutsideOrderAttachmentsDialog; }
        protected getIdProperty() { return OutsideOrderAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrderAttachmentsRow.localTextPrefix; }
        protected getService() { return OutsideOrderAttachmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}