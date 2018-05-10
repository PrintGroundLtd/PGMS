namespace PGMS.Erp {
    export interface OutsideOrderAttachmentsRow {
        OutsideOrderAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        OutsideOrderId?: number;
        OutsideOrderName?: string;
        OutsideOrderPriceTheyOffer?: number;
        OutsideOrderPriceWeSell?: number;
        OutsideOrderAccountRepresentsId?: number;
        OutsideOrderCompanyRepresentsId?: number;
        OutsideOrderInsertDate?: string;
        OutsideOrderInsertUserId?: number;
        OutsideOrderUpdateDate?: string;
        OutsideOrderUpdateUserId?: number;
        OutsideOrderIsActive?: number;
        OutsideOrderDescription?: string;
        OutsideOrderOrderStatusId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OutsideOrderAttachmentsRow {
        export const idProperty = 'OutsideOrderAttachmentId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.OutsideOrderAttachments';
        export const lookupKey = 'Erp.OutsideOrderAttachments';

        export function getLookup(): Q.Lookup<OutsideOrderAttachmentsRow> {
            return Q.getLookup<OutsideOrderAttachmentsRow>('Erp.OutsideOrderAttachments');
        }

        export declare const enum Fields {
            OutsideOrderAttachmentId = "OutsideOrderAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            OutsideOrderId = "OutsideOrderId",
            OutsideOrderName = "OutsideOrderName",
            OutsideOrderPriceTheyOffer = "OutsideOrderPriceTheyOffer",
            OutsideOrderPriceWeSell = "OutsideOrderPriceWeSell",
            OutsideOrderAccountRepresentsId = "OutsideOrderAccountRepresentsId",
            OutsideOrderCompanyRepresentsId = "OutsideOrderCompanyRepresentsId",
            OutsideOrderInsertDate = "OutsideOrderInsertDate",
            OutsideOrderInsertUserId = "OutsideOrderInsertUserId",
            OutsideOrderUpdateDate = "OutsideOrderUpdateDate",
            OutsideOrderUpdateUserId = "OutsideOrderUpdateUserId",
            OutsideOrderIsActive = "OutsideOrderIsActive",
            OutsideOrderDescription = "OutsideOrderDescription",
            OutsideOrderOrderStatusId = "OutsideOrderOrderStatusId",
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
