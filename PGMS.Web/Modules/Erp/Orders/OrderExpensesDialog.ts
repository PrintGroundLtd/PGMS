/// <reference path="../Expenses/ExpensesDialog.ts"/>


namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderExpensesDialog extends ExpensesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
            Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
            Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
            //Serenity.EditorUtils.setReadOnly(this.form.TransactionType, true);
            if (this.isNew())
                this.form.TransactionType.value = "2";
        }

    }
}