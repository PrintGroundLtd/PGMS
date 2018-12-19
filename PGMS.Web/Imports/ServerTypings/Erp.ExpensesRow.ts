namespace PGMS.Erp {
    export interface ExpensesRow {
        ExpenseId?: number;
        Name?: string;
        Description?: string;
        Total?: number;
        TransactionDate?: string;
        NoteList?: NoteRow[];
        WithVat?: boolean;
        DepositPayment?: boolean;
        TransactionType?: TransactionType;
        BudgetId?: number;
        PaymentTypeId?: number;
        BudgetName?: string;
        BudgetTotal?: number;
        BudgetBudgetPeriod?: number;
        BudgetPaymentTypeId?: number;
        PaymentTypeName?: string;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        OrderId?: number;
        OrderName?: string;
        OutsideOrderId?: number;
        OutsideOrderName?: string;
        AccountId?: number;
        AccountName?: string;
        AccountPhoneNumber?: string;
        AccountEmail?: string;
        AccountIsVip?: number;
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
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Expenses';
        export const lookupKey = 'Erp.Expenses';

        export function getLookup(): Q.Lookup<ExpensesRow> {
            return Q.getLookup<ExpensesRow>('Erp.Expenses');
        }

        export declare const enum Fields {
            ExpenseId = "ExpenseId",
            Name = "Name",
            Description = "Description",
            Total = "Total",
            TransactionDate = "TransactionDate",
            NoteList = "NoteList",
            WithVat = "WithVat",
            DepositPayment = "DepositPayment",
            TransactionType = "TransactionType",
            BudgetId = "BudgetId",
            PaymentTypeId = "PaymentTypeId",
            BudgetName = "BudgetName",
            BudgetTotal = "BudgetTotal",
            BudgetBudgetPeriod = "BudgetBudgetPeriod",
            BudgetPaymentTypeId = "BudgetPaymentTypeId",
            PaymentTypeName = "PaymentTypeName",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            OrderId = "OrderId",
            OrderName = "OrderName",
            OutsideOrderId = "OutsideOrderId",
            OutsideOrderName = "OutsideOrderName",
            AccountId = "AccountId",
            AccountName = "AccountName",
            AccountPhoneNumber = "AccountPhoneNumber",
            AccountEmail = "AccountEmail",
            AccountIsVip = "AccountIsVip",
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
