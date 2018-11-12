namespace PGMS.Erp {
    export interface OrderDetailsRow {
        OrderDetailId?: number;
        ProductId?: number;
        OrderId?: number;
        OrderDetailCounter?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        AdditionalCosts?: number;
        Description?: string;
        Width?: number;
        Height?: number;
        Quadrature?: number;
        ProductName?: string;
        ProductProductImage?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        OrderAccountId?: number;
        OrderCompanyId?: number;
        OrderPaymentTypeId?: number;
        OrderUserId?: number;
        OrderOrderStatusId?: number;
        NoteList?: NoteRow[];
        LineTotal?: number;
    }

    export namespace OrderDetailsRow {
        export const idProperty = 'OrderDetailId';
        export const localTextPrefix = 'Erp.OrderDetails';

        export declare const enum Fields {
            OrderDetailId = "OrderDetailId",
            ProductId = "ProductId",
            OrderId = "OrderId",
            OrderDetailCounter = "OrderDetailCounter",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            AdditionalCosts = "AdditionalCosts",
            Description = "Description",
            Width = "Width",
            Height = "Height",
            Quadrature = "Quadrature",
            ProductName = "ProductName",
            ProductProductImage = "ProductProductImage",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierId = "ProductSupplierId",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            OrderAccountId = "OrderAccountId",
            OrderCompanyId = "OrderCompanyId",
            OrderPaymentTypeId = "OrderPaymentTypeId",
            OrderUserId = "OrderUserId",
            OrderOrderStatusId = "OrderOrderStatusId",
            NoteList = "NoteList",
            LineTotal = "LineTotal"
        }
    }
}
