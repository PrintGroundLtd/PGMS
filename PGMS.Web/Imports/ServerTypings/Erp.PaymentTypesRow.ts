namespace PGMS.Erp {
    export interface PaymentTypesRow {
        PaymentTypeId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PaymentTypesRow {
        export const idProperty = 'PaymentTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.PaymentTypes';
        export const lookupKey = 'Erp.PaymentTypes';

        export function getLookup(): Q.Lookup<PaymentTypesRow> {
            return Q.getLookup<PaymentTypesRow>('Erp.PaymentTypes');
        }

        export declare const enum Fields {
            PaymentTypeId = "PaymentTypeId",
            Name = "Name",
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
