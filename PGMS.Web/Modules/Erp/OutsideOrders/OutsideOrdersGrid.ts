
namespace PGMS.Erp {
    import fld = PGMS.Erp.OutsideOrdersRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OutsideOrdersGrid extends Serenity.EntityGrid<OutsideOrdersRow, any> {
        protected getColumnsKey() { return 'Erp.OutsideOrders'; }
        protected getDialogType() { return OutsideOrdersDialog; }
        protected getIdProperty() { return OutsideOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrdersRow.localTextPrefix; }
        protected getService() { return OutsideOrdersService.baseUrl; }
        protected getIsActiveProperty() { return OutsideOrdersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        getViewOptions(): Slick.RemoteViewOptions {
            var options = super.getViewOptions();
            options.rowsPerPage = 2500;
            return options;
        }

        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();

            let filter = Q.tryFirst(filters, x => x.field == fld.OrderStatusId);
            if (filter != null) {
                filter.title = Q.tryGetText("Site.OrderStatusNotEqualTo");
                filter.cssClass = "order-status-id";
                filter.handler = h => {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.OrderStatusId], '!=', h.value]);
                    }
                };
            }
            return filters;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('PriceTheyOffer'),
                    new Slick.Aggregators.Sum('PriceWeSell')
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
                service: OutsideOrdersService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));

            buttons.push({
                title: text + Q.text("Db.Erp.Accounts.EntitySingular"),
                separator: true,
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'AccountRepresentsName'
                        }
                    ])
            });
            buttons.push({
                title: text + Q.text("Db.Erp.Companies.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'CompanyRepresentsName'
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
        }
    }
}