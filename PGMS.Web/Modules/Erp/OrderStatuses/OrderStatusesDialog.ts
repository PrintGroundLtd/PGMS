
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderStatusesDialog extends Serenity.EntityDialog<OrderStatusesRow, any> {
        protected getFormKey() { return OrderStatusesForm.formKey; }
        protected getIdProperty() { return OrderStatusesRow.idProperty; }
        protected getLocalTextPrefix() { return OrderStatusesRow.localTextPrefix; }
        protected getNameProperty() { return OrderStatusesRow.nameProperty; }
        protected getService() { return OrderStatusesService.baseUrl; }

        protected form = new OrderStatusesForm(this.idPrefix);

    }
}