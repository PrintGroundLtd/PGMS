///<reference path="./../ExpensesAttachments/ExpensesAttachmentsDialog.ts"/>
///<reference path="./../ExpensesAttachments/ExpensesAttachmentsGrid.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesAttachmentsExtendedGrid extends ExpensesAttachmentsGrid {
        protected getDialogType() { return ExpensesAttachmentsExtendedDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ ExpenseId: this.expenseId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.expenseId;
        }

        private _expenseId: number;

        get expenseId() {
            return this._expenseId;
        }

        set expenseId(value: number) {
            if (this._expenseId !== value) {
                this._expenseId = value;
                this.setEquality('ExpenseId', value);
                this.refresh();
            }
        }

    }
}