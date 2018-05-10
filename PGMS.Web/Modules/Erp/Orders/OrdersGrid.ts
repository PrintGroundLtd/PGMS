
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


        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Total')
                ]
            });

            return grid;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
         
        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");
            buttons.push({
                title: text +  Q.text("Db.Erp.Accounts.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'AccountName'
                        }
                    ])
            });

            buttons.push({
                title: text + Q.text("Db.Erp.Companies.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'CompanyName'
                        }
                    ])
            });

            buttons.push({
                title: text + Q.text("Db.Erp.OrderStatuses.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'OrderStatusName'
                        }
                    ])
            });

            buttons.push({
                title: Q.text("Site.NoGroupingButton"),
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            });


            return buttons;
            //return [{
            //    title: 'Group By Account Name',
            //        cssClass: 'expand-all-button',
            //        onClick: () => this.view.setGrouping(
            //            [{
            //                getter: 'AccountName'
            //            }])
            //}, {
            //        title: 'Group By Company Name',
            //        cssClass: 'expand-all-button',
            //        onClick: () => this.view.setGrouping(
            //            [{
            //                getter: 'CompanyName'
            //            }])
            //    },
            //    //{
            //    //    title: 'Group By Category and Supplier',
            //    //    cssClass: 'expand-all-button',
            //    //    onClick: () => this.view.setGrouping(
            //    //        [{
            //    //            formatter: x => 'Category: ' + x.value + ' (' + x.count + ' items)',
            //    //            getter: 'CategoryName'
            //    //        }, {
            //    //            formatter: x => 'Supplier: ' + x.value + ' (' + x.count + ' items)',
            //    //            getter: 'SupplierCompanyName'
            //    //        }])
            //    //},
            //    {
            //        title: 'No Grouping',
            //        cssClass: 'collapse-all-button',
            //        onClick: () => this.view.setGrouping([])
            //    }];
        }

    }
}