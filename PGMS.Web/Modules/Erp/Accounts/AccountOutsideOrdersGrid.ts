
namespace PGMS.Erp {
    import fld = OrdersRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AccountOutsideOrdersGrid extends OutsideOrdersGrid {
        protected getDialogType() { return AccountOutsideOrdersDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        getColumnsKey(): string {
            return "Erp.AccountOutsideOrders";
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        } 
        
        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ AccountRepresentsId: this.accountRepresentsId });
        }
        
        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.accountRepresentsId;
        }

        private _accountRepresentsId: number;

        get accountRepresentsId() {
            return this._accountRepresentsId;
        }

        set accountRepresentsId(value: number) {
            if (this._accountRepresentsId !== value) {
                this._accountRepresentsId = value;
                this.setEquality('AccountRepresentsId', value);
                this.refresh();
            }
        }

    }
}