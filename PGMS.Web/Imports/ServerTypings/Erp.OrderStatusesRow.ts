namespace PGMS.Erp {
    export interface OrderStatusesRow {
        OrderStatusId?: number;
        Name?: string;
        BorderColor?: string;
        BackgroundColor?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OrderStatusesRow {
        export const idProperty = 'OrderStatusId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.OrderStatuses';
        export const lookupKey = 'Erp.OrderStatuses';

        export function getLookup(): Q.Lookup<OrderStatusesRow> {
            return Q.getLookup<OrderStatusesRow>('Erp.OrderStatuses');
        }

        export declare const enum Fields {
            OrderStatusId = "OrderStatusId",
            Name = "Name",
            BorderColor = "BorderColor",
            BackgroundColor = "BackgroundColor",
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
