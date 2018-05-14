
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PartnersGrid extends Serenity.EntityGrid<PartnersRow, any> {
        protected getColumnsKey() { return 'Erp.Partners'; }
        protected getDialogType() { return PartnersDialog; }
        protected getIdProperty() { return PartnersRow.idProperty; }
        protected getLocalTextPrefix() { return PartnersRow.localTextPrefix; }
        protected getService() { return PartnersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");


            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: PartnersService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));
            return buttons;
        }
    }
}