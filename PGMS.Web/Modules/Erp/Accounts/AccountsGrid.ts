
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey() { return 'Erp.Accounts'; }
        protected getDialogType() { return AccountsDialog; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getService() { return AccountsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}