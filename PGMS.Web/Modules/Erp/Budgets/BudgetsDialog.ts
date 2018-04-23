
namespace PGMS.Erp {
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class BudgetsDialog extends Serenity.EntityDialog<BudgetsRow, any> {
        protected getFormKey() { return BudgetsForm.formKey; }
        protected getIdProperty() { return BudgetsRow.idProperty; }
        protected getLocalTextPrefix() { return BudgetsRow.localTextPrefix; }
        protected getNameProperty() { return BudgetsRow.nameProperty; }
        protected getService() { return BudgetsService.baseUrl; }

        protected form = new BudgetsForm(this.idPrefix);
        private loadedState: string;
        private budgetExpensesGrid: BudgetExpensesGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            this.budgetExpensesGrid = new BudgetExpensesGrid(this.byId("BudgetExpensesPropertyGrid"));
            this.budgetExpensesGrid.element.flexHeightOnly(1);
            this.budgetExpensesGrid.openDialogsAsPanel = false; 

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
             
        }

        loadEntity(entity: Erp.BudgetsRow): void {
            super.loadEntity(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'BudgetExpenses', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            this.budgetExpensesGrid.budgetId = entity.BudgetId;
        }


        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }


        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }
    }
}