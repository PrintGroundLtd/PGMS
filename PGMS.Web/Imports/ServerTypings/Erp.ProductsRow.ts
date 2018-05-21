namespace PGMS.Erp {
    export interface ProductsRow {
        ProductId?: number;
        Name?: string;
        Description?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitPriceWithDDS?: number;
        UnitPricePartner?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierName?: string;
        SupplierPhoneNumber?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierCountry?: string;
        NoteList?: NoteRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Products';
        export const lookupKey = 'Erp.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Erp.Products');
        }

        export declare const enum Fields {
            ProductId = "ProductId",
            Name = "Name",
            Description = "Description",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierId = "SupplierId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitPriceWithDDS = "UnitPriceWithDDS",
            UnitPricePartner = "UnitPricePartner",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierName = "SupplierName",
            SupplierPhoneNumber = "SupplierPhoneNumber",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierCountry = "SupplierCountry",
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
