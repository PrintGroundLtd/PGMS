namespace PGMS.Erp {
    export interface AccountCompaniesRow {
        AccountCompanyID?: number;
        AccountId?: number;
        CompanyId?: number;
    }

    export namespace AccountCompaniesRow {
        export const idProperty = 'AccountCompanyID';
        export const localTextPrefix = 'Erp.AccountCompanies';

        export declare const enum Fields {
            AccountCompanyID = "AccountCompanyID",
            AccountId = "AccountId",
            CompanyId = "CompanyId"
        }
    }
}
