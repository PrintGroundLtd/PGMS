
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PartnersDialog extends Serenity.EntityDialog<PartnersRow, any> {
        protected getFormKey() { return PartnersForm.formKey; }
        protected getIdProperty() { return PartnersRow.idProperty; }
        protected getLocalTextPrefix() { return PartnersRow.localTextPrefix; }
        protected getNameProperty() { return PartnersRow.nameProperty; }
        protected getService() { return PartnersService.baseUrl; }

        protected form = new PartnersForm(this.idPrefix);

    }
}