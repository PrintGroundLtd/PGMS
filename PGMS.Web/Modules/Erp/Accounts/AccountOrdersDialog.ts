﻿/// <reference path="../Orders/OrdersDialog.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.registerClass()
    export class AccountOrdersDialog extends OrdersDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AccountId, true); 
        }

    }
}