namespace PGMS.Erp {
    export interface OrdersRow {
        OrderId?: number;
        AccountId?: number;
        CompanyId?: number;
        PaymentTypeId?: number;
        Width?: number;
        Height?: number;
        OrderDate?: string;
        ShippedDate?: string;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipCountry?: string;
        UserId?: number;
        OrderStatusId?: number;
        AccountName?: string;
        AccountPhoneNumber?: string;
        AccountIsVip?: number;
        AccountPartnerType?: number;
        CompanyName?: string;
        PaymentTypeName?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserUserImage?: string;
        DetailList?: OrderDetailsRow[];
        OrderStatusName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OrdersRow {
        export const idProperty = 'OrderId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ShipName';
        export const localTextPrefix = 'Erp.Orders';
        export const lookupKey = 'Erp.Orders';

        export function getLookup(): Q.Lookup<OrdersRow> {
            return Q.getLookup<OrdersRow>('Erp.Orders');
        }

        export declare const enum Fields {
            OrderId = "OrderId",
            AccountId = "AccountId",
            CompanyId = "CompanyId",
            PaymentTypeId = "PaymentTypeId",
            Width = "Width",
            Height = "Height",
            OrderDate = "OrderDate",
            ShippedDate = "ShippedDate",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipCountry = "ShipCountry",
            UserId = "UserId",
            OrderStatusId = "OrderStatusId",
            AccountName = "AccountName",
            AccountPhoneNumber = "AccountPhoneNumber",
            AccountIsVip = "AccountIsVip",
            AccountPartnerType = "AccountPartnerType",
            CompanyName = "CompanyName",
            PaymentTypeName = "PaymentTypeName",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserUserImage = "UserUserImage",
            DetailList = "DetailList",
            OrderStatusName = "OrderStatusName",
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
