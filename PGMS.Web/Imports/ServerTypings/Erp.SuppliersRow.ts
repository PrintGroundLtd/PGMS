namespace PGMS.Erp {
    export interface SuppliersRow {
        SupplierId?: number;
        Name?: string;
        PhoneNumber?: string;
        Address?: string;
        City?: string;
        Country?: string;
        NoteList?: NoteRow[];
        SupplierRepresentatives?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace SuppliersRow {
        export const idProperty = 'SupplierId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Suppliers';
        export const lookupKey = 'Erp.Suppliers';

        export function getLookup(): Q.Lookup<SuppliersRow> {
            return Q.getLookup<SuppliersRow>('Erp.Suppliers');
        }

        export declare const enum Fields {
            SupplierId = "SupplierId",
            Name = "Name",
            PhoneNumber = "PhoneNumber",
            Address = "Address",
            City = "City",
            Country = "Country",
            NoteList = "NoteList",
            SupplierRepresentatives = "SupplierRepresentatives",
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
