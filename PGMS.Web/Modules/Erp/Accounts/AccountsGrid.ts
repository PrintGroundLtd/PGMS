
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


        protected getItemCssClass(item: AccountsRow, index: number): string {
            let klass: string = "";

            if (item.IsVip == 1) {
                klass += " is-vip";
            }

            return Q.trimToNull(klass);
        }

    }
}