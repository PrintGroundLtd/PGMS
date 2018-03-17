namespace PGMS.Erp {
    export interface PartnerTypesRow {
        PartnerTypeId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace PartnerTypesRow {
        export const idProperty = 'PartnerTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.PartnerTypes';
        export const lookupKey = 'Erp.PartnerTypes';

        export function getLookup(): Q.Lookup<PartnerTypesRow> {
            return Q.getLookup<PartnerTypesRow>('Erp.PartnerTypes');
        }

        export declare const enum Fields {
            PartnerTypeId = "PartnerTypeId",
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
