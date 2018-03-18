
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PaymentTypesGrid extends Serenity.EntityGrid<PaymentTypesRow, any> {
        protected getColumnsKey() { return 'Erp.PaymentTypes'; }
        protected getDialogType() { return PaymentTypesDialog; }
        protected getIdProperty() { return PaymentTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentTypesRow.localTextPrefix; }
        protected getService() { return PaymentTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}