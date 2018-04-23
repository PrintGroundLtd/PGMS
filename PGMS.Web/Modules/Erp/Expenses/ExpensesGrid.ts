﻿
namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey() { return 'Erp.Expenses'; }
        protected getDialogType() { return ExpensesDialog; }
        protected getIdProperty() { return ExpensesRow.idProperty; }
        protected getLocalTextPrefix() { return ExpensesRow.localTextPrefix; }
        protected getService() { return ExpensesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}