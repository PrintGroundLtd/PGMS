
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrdersGrid extends Serenity.EntityGrid<OutsideOrdersRow, any> {
        protected getColumnsKey() { return 'Erp.OutsideOrders'; }
        protected getDialogType() { return OutsideOrdersDialog; }
        protected getIdProperty() { return OutsideOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrdersRow.localTextPrefix; }
        protected getService() { return OutsideOrdersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}