
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class BudgetsDialog extends Serenity.EntityDialog<BudgetsRow, any> {
        protected getFormKey() { return BudgetsForm.formKey; }
        protected getIdProperty() { return BudgetsRow.idProperty; }
        protected getLocalTextPrefix() { return BudgetsRow.localTextPrefix; }
        protected getNameProperty() { return BudgetsRow.nameProperty; }
        protected getService() { return BudgetsService.baseUrl; }

        protected form = new BudgetsForm(this.idPrefix);

    }
}