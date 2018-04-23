/// <reference path="../AccountAttachments/AccountAttachmentsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountAttachmentsExtendedDialog extends AccountAttachmentsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.AccountId, true); 
        }

    }
}