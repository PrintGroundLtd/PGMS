
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey() { return 'Erp.Orders'; }
        protected getDialogType() { return OrdersDialog; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getService() { return OrdersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getItemCssClass(item: OrdersRow, index: number): string {
            let klass: string = "";
             //   klass += item.OrderStatusBackgroundColor.replace(/#/g,'');
            //if (item.AccountIsVip == 1) { 
            //    klass += item.OrderStatusBackgroundColor;
            //}
            
            return Q.trimToNull(klass);
        }

    }
}