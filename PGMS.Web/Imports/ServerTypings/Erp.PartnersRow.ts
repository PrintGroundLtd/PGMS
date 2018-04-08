namespace PGMS.Erp {
    export interface PartnersRow {
        PartnerId?: number;
        Name?: string;
        HardPercent?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PartnersRow {
        export const idProperty = 'PartnerId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Partners';
        export const lookupKey = 'Erp.Partners';

        export function getLookup(): Q.Lookup<PartnersRow> {
            return Q.getLookup<PartnersRow>('Erp.Partners');
        }

        export declare const enum Fields {
            PartnerId = "PartnerId",
            Name = "Name",
            HardPercent = "HardPercent",
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
