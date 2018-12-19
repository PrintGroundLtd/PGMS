
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

        protected onViewProcessData(response: Serenity.ListResponse<ExpensesRow>): Serenity.ListResponse<ExpensesRow> {
            var listResponse = super.onViewProcessData(response);
            Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
            return listResponse;
        }
    }
}