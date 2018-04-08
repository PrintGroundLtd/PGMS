
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey() { return ExpensesForm.formKey; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getNameProperty() { return ExpensesRow.nameProperty; }
        protected getService() { return ExpensesService.baseUrl; }

        protected form = new ExpensesForm(this.idPrefix);

    }
}