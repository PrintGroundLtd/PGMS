﻿///<reference path="./../Expenses/ExpensesGrid.ts"/>

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
            this.editItem({ OutsideOrderId: this.outsideOrderId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.outsideOrderId;
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