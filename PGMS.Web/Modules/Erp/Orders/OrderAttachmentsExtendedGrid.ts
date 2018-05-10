///<reference path="./../OrderAttachments/OrderAttachmentsDialog.ts"/>
///<reference path="./../OrderAttachments/OrderAttachmentsGrid.ts"/>

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderAttachmentsExtendedGrid extends OrderAttachmentsGrid {
        protected getDialogType() { return OrderAttachmentsExtendedDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ OrderId: this.orderId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.orderId;
        }

        private _orderId: number;

        get orderId() {
            return this._orderId;
        }

        set orderId(value: number) {
            if (this._orderId !== value) {
                this._orderId = value;
                this.setEquality('OrderId', value);
                this.refresh();
            }
        }

    }
}