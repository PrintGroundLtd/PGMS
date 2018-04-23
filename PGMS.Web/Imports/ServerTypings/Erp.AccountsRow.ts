namespace PGMS.Erp {
    export interface AccountsRow {
        AccountId?: number;
        Name?: string;
        PhoneNumber?: string;
        IsVip?: number;
        PartnerType?: number;
        Address?: string;
        City?: string;
        AccountCompanies?: number[];
        Country?: string;
        NoteList?: NoteRow[];
        PartnerTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace AccountsRow {
        export const idProperty = 'AccountId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Accounts';
        export const lookupKey = 'Erp.Accounts';

        export function getLookup(): Q.Lookup<AccountsRow> {
            return Q.getLookup<AccountsRow>('Erp.Accounts');
        }

        export declare const enum Fields {
            AccountId = "AccountId",
            Name = "Name",
            PhoneNumber = "PhoneNumber",
            IsVip = "IsVip",
            PartnerType = "PartnerType",
            Address = "Address",
            City = "City",
            AccountCompanies = "AccountCompanies",
            Country = "Country",
            NoteList = "NoteList",
            PartnerTypeName = "PartnerTypeName",
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
