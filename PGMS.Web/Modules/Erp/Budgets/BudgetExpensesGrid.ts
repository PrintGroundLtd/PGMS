/// <reference path="../Expenses/ExpensesDialog.ts"/>
/// <reference path="../Expenses/ExpensesDialog.ts"/>
namespace PGMS.Erp {
    import fld = ExpensesRow.Fields;

    @Serenity.Decorators.registerClass()
    export class BudgetExpensesGrid extends ExpensesGrid {
        protected getDialogType() { return BudgetExpensesDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.BudgetName);
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class
            let filters = super.getQuickFilters();
            var filtersNew = [];
            filtersNew.push(Q.first(filters, x => x.field == fld.TransactionDate));
            return filtersNew;
        }
        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ BudgetId: this.budgetId });
        }
        
        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.budgetId;
        }

        private _budgetId: number;

        get budgetId() {
            return this._budgetId;
        }

        set budgetId(value: number) {
            if (this._budgetId !== value) {
                this._budgetId = value;
                this.setEquality('BudgetId', value);
                this.refresh();
            }
        }

    }
}