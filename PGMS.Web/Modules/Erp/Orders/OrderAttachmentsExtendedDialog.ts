/// <reference path="../OrderAttachments/OrderAttachmentsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderAttachmentsExtendedDialog extends OrderAttachmentsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
        }

    }
}