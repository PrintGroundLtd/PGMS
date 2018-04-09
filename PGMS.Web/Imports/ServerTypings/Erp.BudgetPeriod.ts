namespace PGMS.Erp {
    export enum BudgetPeriod {
        Week = 1,
        Month = 2,
        Year = 3
    }
    Serenity.Decorators.registerEnumType(BudgetPeriod, 'PGMS.Erp.BudgetPeriod', 'PGMS.Erp.Entities.BudgetPeriod');
}
