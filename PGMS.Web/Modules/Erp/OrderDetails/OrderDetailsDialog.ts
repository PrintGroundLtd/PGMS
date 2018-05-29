
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class OrderDetailsDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey() { return OrderDetailsForm.formKey; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        protected form = new OrderDetailsForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

           // this.form = new OrderDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {
                var productId = Q.toId(this.form.ProductId.value);
                if (productId != null) {
                    this.form.UnitPrice.value = ProductsRow.getLookup().itemById[productId].UnitPrice;
                }
            });

            this.form.Width.change(e => {
                var height = this.form.Height.value;
                var width = this.form.Width.value;
                if (height != null && width != null) {
                    this.form.Quadrature.value = height * width;
                } else {
                    this.form.Quadrature.value = 0;
                }
            });

            this.form.Height.change(e => {
                var height = this.form.Height.value;
                var width = this.form.Width.value;
                if (height != null && width != null) {
                    this.form.Quadrature.value = height * width;
                } else {
                    this.form.Quadrature.value = 0;
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

        loadEntity(entity: Erp.OrderDetailsRow): void {
            super.loadEntity(entity);
            console.log(entity);
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());

        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }
    }
}