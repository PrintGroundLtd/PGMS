
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey() { return CompaniesForm.formKey; }
        protected getIdProperty() { return CompaniesRow.idProperty; }
        protected getLocalTextPrefix() { return CompaniesRow.localTextPrefix; }
        protected getNameProperty() { return CompaniesRow.nameProperty; }
        protected getService() { return CompaniesService.baseUrl; }

        protected form = new CompaniesForm(this.idPrefix);

    }
}