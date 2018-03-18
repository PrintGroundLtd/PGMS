
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class PaymentTypesDialog extends Serenity.EntityDialog<PaymentTypesRow, any> {
        protected getFormKey() { return PaymentTypesForm.formKey; }
        protected getIdProperty() { return PaymentTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PaymentTypesRow.localTextPrefix; }
        protected getNameProperty() { return PaymentTypesRow.nameProperty; }
        protected getService() { return PaymentTypesService.baseUrl; }

        protected form = new PaymentTypesForm(this.idPrefix);

    }
}