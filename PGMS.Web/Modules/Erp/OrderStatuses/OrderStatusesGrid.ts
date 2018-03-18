
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderStatusesGrid extends Serenity.EntityGrid<OrderStatusesRow, any> {
        protected getColumnsKey() { return 'Erp.OrderStatuses'; }
        protected getDialogType() { return OrderStatusesDialog; }
        protected getIdProperty() { return OrderStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return OrderStatusesRow.localTextPrefix; }
        protected getService() { return OrderStatusesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}