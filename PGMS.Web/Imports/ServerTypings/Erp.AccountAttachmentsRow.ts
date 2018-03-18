namespace PGMS.Erp {
    export interface AccountAttachmentsRow {
        AccountAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        AccountId?: number;
        AccountName?: string;
        AccountPhoneNumber?: string;
        AccountIsVip?: number;
        AccountPartnerType?: number;
        AccountAddress?: string;
        AccountCity?: string;
        AccountCountry?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace AccountAttachmentsRow {
        export const idProperty = 'AccountAttachmentId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.AccountAttachments';
        export const lookupKey = 'Erp.AccountAttachments';

        export function getLookup(): Q.Lookup<AccountAttachmentsRow> {
            return Q.getLookup<AccountAttachmentsRow>('Erp.AccountAttachments');
        }

        export declare const enum Fields {
            AccountAttachmentId = "AccountAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            AccountId = "AccountId",
            AccountName = "AccountName",
            AccountPhoneNumber = "AccountPhoneNumber",
            AccountIsVip = "AccountIsVip",
            AccountPartnerType = "AccountPartnerType",
            AccountAddress = "AccountAddress",
            AccountCity = "AccountCity",
            AccountCountry = "AccountCountry",
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
