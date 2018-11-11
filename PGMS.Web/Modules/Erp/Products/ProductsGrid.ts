
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey() { return 'Erp.Products'; }
        protected getDialogType() { return ProductsDialog; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getService() { return ProductsService.baseUrl; }
        protected getIsActiveProperty() { return ProductsRow.isActiveProperty; }

        constructor(container: JQuery) {
            super(container);
        }
        getViewOptions(): Slick.RemoteViewOptions {
            var options = super.getViewOptions();
            options.rowsPerPage = 2500;
            return options;
        }
        protected getButtons() {

            var buttons = super.getButtons();
            var text = Q.text("Site.GroupByButton");

            buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: ProductsService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton") 
            }));
            return buttons;
        }
    }
}