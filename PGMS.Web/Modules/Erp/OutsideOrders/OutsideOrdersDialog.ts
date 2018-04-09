
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OutsideOrdersDialog extends Serenity.EntityDialog<OutsideOrdersRow, any> {
        protected getFormKey() { return OutsideOrdersForm.formKey; }
        protected getIdProperty() { return OutsideOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OutsideOrdersRow.localTextPrefix; }
        protected getNameProperty() { return OutsideOrdersRow.nameProperty; }
        protected getService() { return OutsideOrdersService.baseUrl; }

        protected form = new OutsideOrdersForm(this.idPrefix);

    }
}