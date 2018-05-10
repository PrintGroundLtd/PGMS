/// <reference path="../OutsideOrderAttachments/OutsideOrderAttachmentsDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrderAttachmentsExtendedDialog extends OutsideOrderAttachmentsDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
        }

    }
}