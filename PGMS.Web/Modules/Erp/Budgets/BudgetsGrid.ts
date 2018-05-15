
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class BudgetsGrid extends Serenity.EntityGrid<BudgetsRow, any> {
        protected getColumnsKey() { return 'Erp.Budgets'; }
        protected getDialogType() { return BudgetsDialog; }
        protected getIdProperty() { return BudgetsRow.idProperty; }
        protected getLocalTextPrefix() { return BudgetsRow.localTextPrefix; }
        protected getService() { return BudgetsService.baseUrl; }
        protected getIsActiveProperty() { return BudgetsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");


            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: BudgetsService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));
            return buttons;
        }
    }
}