
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey() { return 'Erp.Suppliers'; }
        protected getDialogType() { return SuppliersDialog; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getService() { return SuppliersService.baseUrl; }
        protected getIsActiveProperty() { return SuppliersRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");


            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: SuppliersService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));
            return buttons;
        }
    }
}