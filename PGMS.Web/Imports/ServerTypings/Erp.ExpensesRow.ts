namespace PGMS.Erp {
    export interface ExpensesRow {
        ExpenseId?: number;
        Description?: string;
        Total?: number;
        BudgetId?: number;
        PaymentTypeId?: number;
        BudgetName?: string;
        BudgetTotal?: number;
        BudgetBudgetPeriod?: number;
        BudgetPaymentTypeId?: number;
        PaymentTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ExpensesRow {
        export const idProperty = 'ExpenseId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Erp.Expenses';
        export const lookupKey = 'Erp.Expenses';

        export function getLookup(): Q.Lookup<ExpensesRow> {
            return Q.getLookup<ExpensesRow>('Erp.Expenses');
        }

        export declare const enum Fields {
            ExpenseId = "ExpenseId",
            Description = "Description",
            Total = "Total",
            BudgetId = "BudgetId",
            PaymentTypeId = "PaymentTypeId",
            BudgetName = "BudgetName",
            BudgetTotal = "BudgetTotal",
            BudgetBudgetPeriod = "BudgetBudgetPeriod",
            BudgetPaymentTypeId = "BudgetPaymentTypeId",
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
