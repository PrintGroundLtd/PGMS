
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PartnerTypesGrid extends Serenity.EntityGrid<PartnerTypesRow, any> {
        protected getColumnsKey() { return 'Erp.PartnerTypes'; }
        protected getDialogType() { return PartnerTypesDialog; }
        protected getIdProperty() { return PartnerTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PartnerTypesRow.localTextPrefix; }
        protected getService() { return PartnerTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}