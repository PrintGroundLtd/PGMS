
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
    }
}