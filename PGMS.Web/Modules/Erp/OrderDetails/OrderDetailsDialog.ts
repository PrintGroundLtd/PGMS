
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey() { return OrderDetailsForm.formKey; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        protected form = new OrderDetailsForm(this.idPrefix);

        constructor() {
            super();
             
            this.form = new OrderDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {
                var productId = Q.toId(this.form.ProductId.value);
                if (productId != null) {
                    this.form.UnitPrice.value = ProductsRow.getLookup().itemById[productId].UnitPrice;
                }
            });

            this.form.Discount.addValidationRule(this.uniqueName, e => {
                var price = this.form.UnitPrice.value;
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                if (price != null && quantity != null && discount != null &&
                    discount > 0 && discount >= price * quantity) {
                    return "Discount can't be higher than total price!";
                }
            });
        }
    }
}