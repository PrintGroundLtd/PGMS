namespace PGMS.Erp {
    export enum TransactionType {
        Expense = 1,
        Income = 2
    }
    Serenity.Decorators.registerEnumType(TransactionType, 'PGMS.Erp.TransactionType', 'PGMS.Erp.Entities.TransactionType');
}
