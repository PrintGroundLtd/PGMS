
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
    }
}