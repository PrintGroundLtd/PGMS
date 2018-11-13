
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

        protected onViewProcessData(response: Serenity.ListResponse<ExpensesRow>): Serenity.ListResponse<ExpensesRow> {
            var listResponse = super.onViewProcessData(response);
            Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
            return listResponse;
        }
    }
}