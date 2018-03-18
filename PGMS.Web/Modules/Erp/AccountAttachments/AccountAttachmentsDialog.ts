
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountAttachmentsDialog extends Serenity.EntityDialog<AccountAttachmentsRow, any> {
        protected getFormKey() { return AccountAttachmentsForm.formKey; }
        protected getIdProperty() { return AccountAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return AccountAttachmentsRow.nameProperty; }
        protected getService() { return AccountAttachmentsService.baseUrl; }

        protected form = new AccountAttachmentsForm(this.idPrefix);

    }
}