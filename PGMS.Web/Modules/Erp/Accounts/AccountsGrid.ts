
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey() { return 'Erp.Accounts'; }
        protected getDialogType() { return AccountsDialog; }
        protected getIdProperty() { return AccountsRow.idProperty; }
        protected getLocalTextPrefix() { return AccountsRow.localTextPrefix; }
        protected getService() { return AccountsService.baseUrl; }
        protected getIsActiveProperty() { return AccountsRow.isActiveProperty; }

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
                service: AccountsService.baseUrl + '/ListExcel',
                separator: true,
                hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                title: Q.tryGetText("Site.ExportToExcelButton")
            }));
            return buttons;
        }
        //protected getItemCssClass(item: AccountsRow, index: number): string {
        //    let klass: string = "";

        //    if (item.IsVip == 1) {
        //        klass += " is-vip";
        //    }

        //    return Q.trimToNull(klass);
        //}

    }
}