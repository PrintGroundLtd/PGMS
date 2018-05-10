namespace PGMS.Erp {
    export interface OrderAttachmentsRow {
        OrderAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        OrderId?: number;
        OrderAccountId?: number;
        OrderCompanyId?: number;
        OrderPaymentTypeId?: number;
        OrderWidth?: number;
        OrderHeight?: number;
        OrderOrderDate?: string;
        OrderShippedDate?: string;
        OrderShipName?: string;
        OrderShipAddress?: string;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        OrderUserId?: number;
        OrderOrderStatusId?: number;
        OrderInsertDate?: string;
        OrderInsertUserId?: number;
        OrderUpdateDate?: string;
        OrderUpdateUserId?: number;
        OrderIsActive?: number;
        OrderDeadLine?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OrderAttachmentsRow {
        export const idProperty = 'OrderAttachmentId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.OrderAttachments';
        export const lookupKey = 'Erp.OrderAttachments';

        export function getLookup(): Q.Lookup<OrderAttachmentsRow> {
            return Q.getLookup<OrderAttachmentsRow>('Erp.OrderAttachments');
        }

        export declare const enum Fields {
            OrderAttachmentId = "OrderAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            OrderId = "OrderId",
            OrderAccountId = "OrderAccountId",
            OrderCompanyId = "OrderCompanyId",
            OrderPaymentTypeId = "OrderPaymentTypeId",
            OrderWidth = "OrderWidth",
            OrderHeight = "OrderHeight",
            OrderOrderDate = "OrderOrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipName = "OrderShipName",
            OrderShipAddress = "OrderShipAddress",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            OrderUserId = "OrderUserId",
            OrderOrderStatusId = "OrderOrderStatusId",
            OrderInsertDate = "OrderInsertDate",
            OrderInsertUserId = "OrderInsertUserId",
            OrderUpdateDate = "OrderUpdateDate",
            OrderUpdateUserId = "OrderUpdateUserId",
            OrderIsActive = "OrderIsActive",
            OrderDeadLine = "OrderDeadLine",
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
