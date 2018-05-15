﻿namespace PGMS.Erp {
    export interface OrdersRow {
        OrderId?: number;
        AccountId?: number;
        CompanyId?: number;
        PaymentTypeId?: number;
        Width?: number;
        Height?: number;
        OrderDate?: string;
        DeadLine?: string;
        ShippedDate?: string;
        OrderName?: string;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipCountry?: string;
        UserId?: number;
        OrderStatusId?: number;
        Total?: number;
        AccountName?: string;
        AccountPhoneNumber?: string;
        AccountEmail?: string;
        AccountIsVip?: number;
        AccountPartnerType?: number;
        CompanyName?: string;
        PaymentTypeName?: string;
        UserUsername?: string;
        UserDisplayName?: string;
        UserUserImage?: string;
        NoteList?: NoteRow[];
        DetailList?: OrderDetailsRow[];
        OrderStatusName?: string;
        OrderStatusBorderColor?: string;
        OrderStatusBackgroundColor?: string;
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
        export const nameProperty = 'OrderName';
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
            DeadLine = "DeadLine",
            ShippedDate = "ShippedDate",
            OrderName = "OrderName",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipCountry = "ShipCountry",
            UserId = "UserId",
            OrderStatusId = "OrderStatusId",
            Total = "Total",
            AccountName = "AccountName",
            AccountPhoneNumber = "AccountPhoneNumber",
            AccountEmail = "AccountEmail",
            AccountIsVip = "AccountIsVip",
            AccountPartnerType = "AccountPartnerType",
            CompanyName = "CompanyName",
            PaymentTypeName = "PaymentTypeName",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserUserImage = "UserUserImage",
            NoteList = "NoteList",
            DetailList = "DetailList",
            OrderStatusName = "OrderStatusName",
            OrderStatusBorderColor = "OrderStatusBorderColor",
            OrderStatusBackgroundColor = "OrderStatusBackgroundColor",
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
