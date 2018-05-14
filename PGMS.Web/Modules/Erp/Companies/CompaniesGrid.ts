
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey() { return 'Erp.Companies'; }
        protected getDialogType() { return CompaniesDialog; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getService() { return CompaniesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");


            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: CompaniesService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));
            return buttons;
        }
    }
}