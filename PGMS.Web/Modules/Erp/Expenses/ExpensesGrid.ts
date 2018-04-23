
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey() { return 'Erp.Expenses'; }
        protected getDialogType() { return ExpensesDialog; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getService() { return ExpensesService.baseUrl; }

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
                title: text + Q.text("Db.Erp.Budgets.EntitySingular"),
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [
                        {
                            getter: 'BudgetName'
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