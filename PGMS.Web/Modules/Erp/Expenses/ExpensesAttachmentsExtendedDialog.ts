/// <reference path="../ExpensesAttachments/ExpensesAttachmentsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesAttachmentsExtendedDialog extends ExpensesAttachmentsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.ExpenseId, true);
        }

    }
}