
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PartnerTypesDialog extends Serenity.EntityDialog<PartnerTypesRow, any> {
        protected getFormKey() { return PartnerTypesForm.formKey; }
        protected getIdProperty() { return PartnerTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PartnerTypesRow.localTextPrefix; }
        protected getNameProperty() { return PartnerTypesRow.nameProperty; }
        protected getService() { return PartnerTypesService.baseUrl; }

        protected form = new PartnerTypesForm(this.idPrefix);

    }
}