namespace PGMS.Erp {
    export interface OutsideOrdersRow {
        OutsideOrderId?: number;
        Name?: string;
        PriceTheyOffer?: number;
        PriceWeSell?: number;
        AccountRepresentsId?: number;
        CompanyRepresentsId?: number;
        Description?: string;
        AccountRepresentsName?: string;
        AccountRepresentsPhoneNumber?: string;
        AccountRepresentsIsVip?: number;
        AccountRepresentsPartnerType?: number;
        AccountRepresentsAddress?: string;
        AccountRepresentsCity?: string;
        AccountRepresentsCountry?: string;
        CompanyRepresentsName?: string;
        CompanyRepresentsPhoneNumber?: string;
        CompanyRepresentsAddress?: string;
        CompanyRepresentsCity?: string;
        CompanyRepresentsCountry?: string;
        CompanyRepresentsEik?: string;
        CompanyRepresentsMol?: string;
        CompanyRepresentsIban?: string;
        CompanyRepresentsBankName?: string;
        CompanyRepresentsBankSwift?: string;
        OrderStatusId?: number;
        OrderStatusName?: string;
        OrderStatusBorderColor?: string;
        OrderStatusBackgroundColor?: string;
        NoteList?: NoteRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace OutsideOrdersRow {
        export const idProperty = 'OutsideOrderId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.OutsideOrders';
        export const lookupKey = 'Erp.OutsideOrders';

        export function getLookup(): Q.Lookup<OutsideOrdersRow> {
            return Q.getLookup<OutsideOrdersRow>('Erp.OutsideOrders');
        }

        export declare const enum Fields {
            OutsideOrderId = "OutsideOrderId",
            Name = "Name",
            PriceTheyOffer = "PriceTheyOffer",
            PriceWeSell = "PriceWeSell",
            AccountRepresentsId = "AccountRepresentsId",
            CompanyRepresentsId = "CompanyRepresentsId",
            Description = "Description",
            AccountRepresentsName = "AccountRepresentsName",
            AccountRepresentsPhoneNumber = "AccountRepresentsPhoneNumber",
            AccountRepresentsIsVip = "AccountRepresentsIsVip",
            AccountRepresentsPartnerType = "AccountRepresentsPartnerType",
            AccountRepresentsAddress = "AccountRepresentsAddress",
            AccountRepresentsCity = "AccountRepresentsCity",
            AccountRepresentsCountry = "AccountRepresentsCountry",
            CompanyRepresentsName = "CompanyRepresentsName",
            CompanyRepresentsPhoneNumber = "CompanyRepresentsPhoneNumber",
            CompanyRepresentsAddress = "CompanyRepresentsAddress",
            CompanyRepresentsCity = "CompanyRepresentsCity",
            CompanyRepresentsCountry = "CompanyRepresentsCountry",
            CompanyRepresentsEik = "CompanyRepresentsEik",
            CompanyRepresentsMol = "CompanyRepresentsMol",
            CompanyRepresentsIban = "CompanyRepresentsIban",
            CompanyRepresentsBankName = "CompanyRepresentsBankName",
            CompanyRepresentsBankSwift = "CompanyRepresentsBankSwift",
            OrderStatusId = "OrderStatusId",
            OrderStatusName = "OrderStatusName",
            OrderStatusBorderColor = "OrderStatusBorderColor",
            OrderStatusBackgroundColor = "OrderStatusBackgroundColor",
            NoteList = "NoteList",
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
