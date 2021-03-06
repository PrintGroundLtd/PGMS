﻿
namespace PGMS.Erp {

    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey() { return ExpensesForm.formKey; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getNameProperty() { return ExpensesRow.nameProperty; }
        protected getService() { return ExpensesService.baseUrl; }
        private loadedState: string;

        protected form = new ExpensesForm(this.idPrefix);
        private attachmentsGrid: ExpensesAttachmentsExtendedGrid;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));


            this.attachmentsGrid = new ExpensesAttachmentsExtendedGrid(this.byId("AttachmentsPropertyGrid"));
            this.attachmentsGrid.openDialogsAsPanel = false;
            this.attachmentsGrid.element.flexHeightOnly(1);

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }

        loadEntity(entity: ExpensesRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
            this.attachmentsGrid.expenseId = entity.ExpenseId;
            var budgetsRowItems = BudgetsRow.getLookup().items;
            console.log(budgetsRowItems);

            if (!this.isEditMode()) {


                budgetsRowItems =
                    budgetsRowItems.filter(s => new Date(s.StartDate) <= new Date() &&
                        new Date(s.EndDate) >= new Date());

                this.form.BudgetId.items = []; 
                budgetsRowItems.forEach(s => {
                     this.form.BudgetId.addOption(s.BudgetId + "", s.Name);
                    //Q.addOption(this.form.BudgetId.element, s.BudgetId + "", s.Name);
                });
                //this.form.BudgetId.items.filter(s => s.StartDate <= startDate.toString() &&
                //    s.EndDate >= endDate.toString());
            }
            //else {
            //    this.form.BudgetId.items = [];
            //    budgetsRowItems.forEach(s => {
            //        Q.addOption(this.form.BudgetId.element, s.BudgetId + "", s.Name);
            //    });
            //}

        }


        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }
    }
}