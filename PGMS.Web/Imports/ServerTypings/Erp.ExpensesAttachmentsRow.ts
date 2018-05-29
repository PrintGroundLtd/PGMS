namespace PGMS.Erp {
    export interface ExpensesAttachmentsRow {
        ExpenseAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        ExpenseId?: number;
        ExpenseDescription?: string;
        ExpenseTotal?: number;
        ExpenseTransactionDate?: string;
        ExpenseBudgetId?: number;
        ExpensePaymentTypeId?: number;
        ExpenseInsertDate?: string;
        ExpenseInsertUserId?: number;
        ExpenseUpdateDate?: string;
        ExpenseUpdateUserId?: number;
        ExpenseIsActive?: number;
        ExpenseUserId?: number;
        ExpenseName?: string;
        ExpenseTransactionType?: number;
        ExpenseOrderId?: number;
        ExpenseOutsideOrderId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ExpensesAttachmentsRow {
        export const idProperty = 'ExpenseAttachmentId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.ExpensesAttachments';
        export const lookupKey = 'Erp.ExpensesAttachments';

        export function getLookup(): Q.Lookup<ExpensesAttachmentsRow> {
            return Q.getLookup<ExpensesAttachmentsRow>('Erp.ExpensesAttachments');
        }

        export declare const enum Fields {
            ExpenseAttachmentId = "ExpenseAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            ExpenseId = "ExpenseId",
            ExpenseDescription = "ExpenseDescription",
            ExpenseTotal = "ExpenseTotal",
            ExpenseTransactionDate = "ExpenseTransactionDate",
            ExpenseBudgetId = "ExpenseBudgetId",
            ExpensePaymentTypeId = "ExpensePaymentTypeId",
            ExpenseInsertDate = "ExpenseInsertDate",
            ExpenseInsertUserId = "ExpenseInsertUserId",
            ExpenseUpdateDate = "ExpenseUpdateDate",
            ExpenseUpdateUserId = "ExpenseUpdateUserId",
            ExpenseIsActive = "ExpenseIsActive",
            ExpenseUserId = "ExpenseUserId",
            ExpenseName = "ExpenseName",
            ExpenseTransactionType = "ExpenseTransactionType",
            ExpenseOrderId = "ExpenseOrderId",
            ExpenseOutsideOrderId = "ExpenseOutsideOrderId",
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
