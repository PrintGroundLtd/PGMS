
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderAttachmentsDialog extends Serenity.EntityDialog<OrderAttachmentsRow, any> {
        protected getFormKey() { return OrderAttachmentsForm.formKey; }
        protected getIdProperty() { return OrderAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return OrderAttachmentsRow.nameProperty; }
        protected getService() { return OrderAttachmentsService.baseUrl; }

        protected form = new OrderAttachmentsForm(this.idPrefix);

    }
}