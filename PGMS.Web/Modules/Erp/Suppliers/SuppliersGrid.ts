
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey() { return 'Erp.Suppliers'; }
        protected getDialogType() { return SuppliersDialog; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getService() { return SuppliersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}