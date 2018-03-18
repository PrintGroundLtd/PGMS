namespace PGMS.Erp {
    export interface SupplierRepresentativesRow {
        RepresentativeId?: number;
        AccountId?: number;
        SupplierId?: number;
    }

    export namespace SupplierRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'Erp.SupplierRepresentatives';

        export declare const enum Fields {
            RepresentativeId = "RepresentativeId",
            AccountId = "AccountId",
            SupplierId = "SupplierId"
        }
    }
}
