
namespace PGMS.Erp {

    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey() { return ExpensesForm.formKey; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getNameProperty() { return ExpensesRow.nameProperty; }
        protected getService() { return ExpensesService.baseUrl; }

        protected form = new ExpensesForm(this.idPrefix);

        constructor() {
            super();
        }

        loadEntity(entity: BudgetsRow) {
            super.loadEntity(entity);
            if (!this.isEditMode()) {

                var budgetsRowItems = BudgetsRow.getLookup().items;
                
                budgetsRowItems =
                    budgetsRowItems.filter(s => new Date(s.StartDate) <= new Date() &&
                        new Date(s.EndDate) >= new Date());

                this.form.BudgetId.items = [];
                budgetsRowItems.forEach(s => {
                    this.form.BudgetId.addOption(s.BudgetId, s.Name);
                    
                });
                //this.form.BudgetId.items.filter(s => s.StartDate <= startDate.toString() &&
                //    s.EndDate >= endDate.toString());
            }

        }
    }
}