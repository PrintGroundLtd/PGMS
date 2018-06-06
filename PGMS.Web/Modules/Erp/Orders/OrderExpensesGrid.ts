///<reference path="./../Expenses/ExpensesGrid.ts"/>


namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderExpensesGrid extends ExpensesGrid {
        protected getDialogType() { return OrderExpensesDialog; }

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

            var name = Q.format(Q.tryGetText("Site.Expenses.ExpenseNameOrder"),
                "#" + this.orderId);
            this.editItem({ OrderId: this.orderId, AccountId: this.accountId, Name: name  });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.orderId;
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
        private _orderId: number;

        get orderId() {
            return this._orderId;
        }

        set orderId(value: number) {
            if (this._orderId !== value) {
                this._orderId = value;
                this.setEquality('OrderId', value);
                this.refresh();
            }
        }

    }
}