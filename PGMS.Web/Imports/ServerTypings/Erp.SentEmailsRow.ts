namespace PGMS.Erp {
    export interface SentEmailsRow {
        SentEmailsId?: number;
        FromEmail?: string;
        FromName?: string;
        Subject?: string;
        Body?: string;
        ToEmail?: string;
        ToName?: string;
        Attachments?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace SentEmailsRow {
        export const idProperty = 'SentEmailsId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'FromEmail';
        export const localTextPrefix = 'Erp.SentEmails';
        export const lookupKey = 'Erp.SentEmails';

        export function getLookup(): Q.Lookup<SentEmailsRow> {
            return Q.getLookup<SentEmailsRow>('Erp.SentEmails');
        }

        export declare const enum Fields {
            SentEmailsId = "SentEmailsId",
            FromEmail = "FromEmail",
            FromName = "FromName",
            Subject = "Subject",
            Body = "Body",
            ToEmail = "ToEmail",
            ToName = "ToName",
            Attachments = "Attachments",
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
