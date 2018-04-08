namespace PGMS.Erp {
    export interface BudgetsRow {
        BudgetId?: number;
        Name?: string;
        Total?: number;
        LeftAfterExpenses?: number;
        PaymentTypeId?: number;
        BudgetPeriod?: BudgetPeriod;
        PaymentTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace BudgetsRow {
        export const idProperty = 'BudgetId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Budgets';
        export const lookupKey = 'Erp.Budgets';

        export function getLookup(): Q.Lookup<BudgetsRow> {
            return Q.getLookup<BudgetsRow>('Erp.Budgets');
        }

        export declare const enum Fields {
            BudgetId = "BudgetId",
            Name = "Name",
            Total = "Total",
            LeftAfterExpenses = "LeftAfterExpenses",
            PaymentTypeId = "PaymentTypeId",
            BudgetPeriod = "BudgetPeriod",
            PaymentTypeName = "PaymentTypeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName"
        }
    }
}
