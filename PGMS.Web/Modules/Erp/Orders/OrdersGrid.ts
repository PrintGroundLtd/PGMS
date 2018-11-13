
namespace PGMS.Erp {
    import fld = PGMS.Erp.OrdersRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey() { return 'Erp.Orders'; }
        protected getDialogType() { return OrdersDialog; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getService() { return OrdersService.baseUrl; }
        protected getIsActiveProperty() { return OrdersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
        protected onViewProcessData(response: Serenity.ListResponse<ExpensesRow>): Serenity.ListResponse<ExpensesRow> {
            var listResponse = super.onViewProcessData(response);
            Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Orders');
            return listResponse;
        }
        getViewOptions(): Slick.RemoteViewOptions {
            var options = super.getViewOptions();
            options.rowsPerPage = 2500;
            return options;
        }
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();

            let filter = Q.first(filters, x => x.field == fld.OrderStatusId);
            filter.title = Q.tryGetText("Site.OrderStatusNotEqualTo");
            filter.cssClass = "order-status-id";
            filter.handler = h => {
                // if filter is active, e.g. editor has some value
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.OrderStatusId], '!=', h.value]);
                }
            }; 
            return filters;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Total'),
                    new Slick.Aggregators.Sum('PaymentsTotal')

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

            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: OrdersService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton") 
            }));

            buttons.push({
                title: text +  Q.text("Db.Erp.Accounts.EntitySingular"),
                cssClass: 'expand-all-button',
                separator: true,
                onClick: () => this.view.setGrouping(
                    [
                        {
                            formatter: x => x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") +')',
                            getter: 'AccountName'
                        }
                    ])
            });

            //buttons.push({
            //    title: text + Q.text("Db.Erp.Companies.EntitySingular"),
            //    cssClass: 'expand-all-button',
            //    onClick: () => this.view.setGrouping(
            //        [
            //            {
            //                getter: 'CompanyName'
            //            }
            //        ])
            //});

            buttons.push({
                title: text + Q.text("Db.Erp.OrderStatuses.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            formatter: x => x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')',
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