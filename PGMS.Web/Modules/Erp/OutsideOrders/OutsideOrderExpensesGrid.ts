///<reference path="./../Expenses/ExpensesGrid.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrderExpensesGrid extends ExpensesGrid {
        protected getDialogType() { return OutsideOrderExpensesDialog; }

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

           var name = Q.format(Q.tryGetText("Site.Expenses.ExpenseNameOutsideOrder"),
               this.outsideOrderId.toString());

            this.editItem({ OutsideOrderId: this.outsideOrderId, AccountId: this.accountId, Name: name  });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.outsideOrderId;
        }
        private _accountId: number;
        get accountId() {
            return this._accountId;
        }

        set accountId(value: number) {
            if (this._accountId !== value) {
                this._accountId = value;
                this.setEquality('AccountId', value);
                this.refresh();
            }
        }
        private _outsideOrderId: number;

        get outsideOrderId() {
            return this._outsideOrderId;
        }

        set outsideOrderId(value: number) {
            if (this._outsideOrderId !== value) {
                this._outsideOrderId = value;
                this.setEquality('OutsideOrderId', value);
                this.refresh();
            }
        }

    }
}