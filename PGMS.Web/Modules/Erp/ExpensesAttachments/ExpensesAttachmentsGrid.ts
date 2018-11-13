
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesAttachmentsGrid extends Serenity.EntityGrid<ExpensesAttachmentsRow, any> {
        protected getColumnsKey() { return 'Erp.ExpensesAttachments'; }
        protected getDialogType() { return ExpensesAttachmentsDialog; }
        protected getIdProperty() { return ExpensesAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesAttachmentsRow.localTextPrefix; }
        protected getService() { return ExpensesAttachmentsService.baseUrl; }

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