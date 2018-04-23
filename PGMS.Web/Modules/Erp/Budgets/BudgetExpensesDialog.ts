﻿/// <reference path="../Expenses/ExpensesDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class BudgetExpensesDialog extends ExpensesDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.BudgetId, true); 
        }

    }
}