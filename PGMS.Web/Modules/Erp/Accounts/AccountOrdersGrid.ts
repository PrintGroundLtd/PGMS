
namespace PGMS.Erp {
    import fld = OrdersRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AccountOrdersGrid extends OrdersGrid {
        protected getDialogType() { return AccountOrdersDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        getColumnsKey(): string {
            return "Erp.AccountOrders";
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {
        
            // get quick filter list from base class
            let filters = super.getQuickFilters();
            var filtersNew = [];
            filtersNew.push(Q.first(filters, x => x.field == fld.CompanyId));
            filtersNew.push(Q.first(filters, x => x.field == fld.OrderStatusId));
            filtersNew.push(Q.first(filters, x => x.field == fld.UserId));
            return filters;
        }
        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ AccountId: this.accountId });
        }
        
        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.accountId;
        }

        private _accountId: number;

        get accountId() {
            return this._accountId;
        }

        set accountId(value: number) {
            if (this._accountId !== value) {
                this._accountId = value;
                this.setEquality('AccountId', value);
                this.refresh();
            }
        }

    }
}