
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountOutsideOrdersDialog extends OutsideOrdersDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.AccountRepresentsId, true); 
        }

    }
}