
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class BudgetsGrid extends Serenity.EntityGrid<BudgetsRow, any> {
        protected getColumnsKey() { return 'Erp.Budgets'; }
        protected getDialogType() { return BudgetsDialog; }
        protected getIdProperty() { return BudgetsRow.idProperty; }
        protected getLocalTextPrefix() { return BudgetsRow.localTextPrefix; }
        protected getService() { return BudgetsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}