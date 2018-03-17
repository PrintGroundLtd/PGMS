namespace PGMS.Erp {
    export interface CompaniesRow {
        CompanyId?: number;
        Name?: string;
        PhoneNumber?: string;
        Address?: string;
        City?: string;
        Country?: string;
        Eik?: string;
        Mol?: string;
        Iban?: string;
        BankName?: string;
        BankSwift?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }

    export namespace CompaniesRow {
        export const idProperty = 'CompanyId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Erp.Companies';
        export const lookupKey = 'Erp.Companies';

        export function getLookup(): Q.Lookup<CompaniesRow> {
            return Q.getLookup<CompaniesRow>('Erp.Companies');
        }

        export declare const enum Fields {
            CompanyId = "CompanyId",
            Name = "Name",
            PhoneNumber = "PhoneNumber",
            Address = "Address",
            City = "City",
            Country = "Country",
            Eik = "Eik",
            Mol = "Mol",
            Iban = "Iban",
            BankName = "BankName",
            BankSwift = "BankSwift",
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
