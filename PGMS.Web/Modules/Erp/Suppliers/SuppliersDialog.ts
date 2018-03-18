
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey() { return SuppliersForm.formKey; }
        protected getIdProperty() { return SuppliersRow.idProperty; }
        protected getLocalTextPrefix() { return SuppliersRow.localTextPrefix; }
        protected getNameProperty() { return SuppliersRow.nameProperty; }
        protected getService() { return SuppliersService.baseUrl; }

        protected form = new SuppliersForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

        }



        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }



        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    }
}