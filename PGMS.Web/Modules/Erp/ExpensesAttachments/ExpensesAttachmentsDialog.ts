
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesAttachmentsDialog extends Serenity.EntityDialog<ExpensesAttachmentsRow, any> {
        protected getFormKey() { return ExpensesAttachmentsForm.formKey; }
        protected getIdProperty() { return ExpensesAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return ExpensesAttachmentsRow.nameProperty; }
        protected getService() { return ExpensesAttachmentsService.baseUrl; }

        protected form = new ExpensesAttachmentsForm(this.idPrefix);

    }
}