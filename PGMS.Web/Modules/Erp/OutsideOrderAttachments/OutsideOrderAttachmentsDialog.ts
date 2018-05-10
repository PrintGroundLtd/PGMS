
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrderAttachmentsDialog extends Serenity.EntityDialog<OutsideOrderAttachmentsRow, any> {
        protected getFormKey() { return OutsideOrderAttachmentsForm.formKey; }
        protected getIdProperty() { return OutsideOrderAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrderAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return OutsideOrderAttachmentsRow.nameProperty; }
        protected getService() { return OutsideOrderAttachmentsService.baseUrl; }

        protected form = new OutsideOrderAttachmentsForm(this.idPrefix);

    }
}