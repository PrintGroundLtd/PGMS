/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace PGMS.Administration {
}
declare namespace PGMS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
        }
    }
}
declare namespace PGMS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List",
        }
    }
}
declare namespace PGMS.Administration {
}
declare namespace PGMS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PGMS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace PGMS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName",
        }
    }
}
declare namespace PGMS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List",
        }
    }
}
declare namespace PGMS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace PGMS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
        }
    }
}
declare namespace PGMS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List",
        }
    }
}
declare namespace PGMS.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace PGMS.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace PGMS.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace PGMS.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace PGMS.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate",
        }
    }
}
declare namespace PGMS.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace PGMS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace PGMS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace PGMS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update",
        }
    }
}
declare namespace PGMS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace PGMS.Administration {
}
declare namespace PGMS.Administration {
    interface UserForm {
        UserId: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace PGMS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace PGMS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys",
        }
    }
}
declare namespace PGMS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace PGMS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace PGMS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace PGMS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace PGMS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List",
        }
    }
}
declare namespace PGMS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace PGMS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration:User:Read";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
        }
    }
}
declare namespace PGMS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
        }
    }
}
declare namespace PGMS.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace PGMS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace PGMS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace PGMS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value",
        }
    }
}
declare namespace PGMS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve",
        }
    }
}
declare namespace PGMS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface AccountAttachmentsForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        FilePath: Serenity.MultipleImageUploadEditor;
        AccountId: Serenity.LookupEditor;
    }
    class AccountAttachmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface AccountAttachmentsRow {
        AccountAttachmentId?: number;
        Name?: string;
        Description?: string;
        FilePath?: string;
        AccountId?: number;
        AccountName?: string;
        AccountPhoneNumber?: string;
        AccountIsVip?: number;
        AccountPartnerType?: number;
        AccountAddress?: string;
        AccountCity?: string;
        AccountCountry?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace AccountAttachmentsRow {
        const idProperty = "AccountAttachmentId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.AccountAttachments";
        const lookupKey = "Erp.AccountAttachments";
        function getLookup(): Q.Lookup<AccountAttachmentsRow>;
        const enum Fields {
            AccountAttachmentId = "AccountAttachmentId",
            Name = "Name",
            Description = "Description",
            FilePath = "FilePath",
            AccountId = "AccountId",
            AccountName = "AccountName",
            AccountPhoneNumber = "AccountPhoneNumber",
            AccountIsVip = "AccountIsVip",
            AccountPartnerType = "AccountPartnerType",
            AccountAddress = "AccountAddress",
            AccountCity = "AccountCity",
            AccountCountry = "AccountCountry",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace AccountAttachmentsService {
        const baseUrl = "Erp/AccountAttachments";
        function Create(request: Serenity.SaveRequest<AccountAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/AccountAttachments/Create",
            Update = "Erp/AccountAttachments/Update",
            Delete = "Erp/AccountAttachments/Delete",
            Retrieve = "Erp/AccountAttachments/Retrieve",
            List = "Erp/AccountAttachments/List",
        }
    }
}
declare namespace PGMS.Erp {
    interface AccountCompaniesRow {
        AccountCompanyID?: number;
        AccountId?: number;
        CompanyId?: number;
    }
    namespace AccountCompaniesRow {
        const idProperty = "AccountCompanyID";
        const localTextPrefix = "Erp.AccountCompanies";
        const enum Fields {
            AccountCompanyID = "AccountCompanyID",
            AccountId = "AccountId",
            CompanyId = "CompanyId",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface AccountsForm {
        AccountId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        PartnerType: Serenity.LookupEditor;
        PhoneNumber: Serenity.StringEditor;
        AccountCompanies: Serenity.LookupEditor;
        IsVip: Serenity.BooleanEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
    class AccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface AccountsRow {
        AccountId?: number;
        Name?: string;
        PhoneNumber?: string;
        IsVip?: number;
        PartnerType?: number;
        Address?: string;
        City?: string;
        AccountCompanies?: number[];
        Country?: string;
        NoteList?: NoteRow[];
        PartnerTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace AccountsRow {
        const idProperty = "AccountId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Accounts";
        const lookupKey = "Erp.Accounts";
        function getLookup(): Q.Lookup<AccountsRow>;
        const enum Fields {
            AccountId = "AccountId",
            Name = "Name",
            PhoneNumber = "PhoneNumber",
            IsVip = "IsVip",
            PartnerType = "PartnerType",
            Address = "Address",
            City = "City",
            AccountCompanies = "AccountCompanies",
            Country = "Country",
            NoteList = "NoteList",
            PartnerTypeName = "PartnerTypeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace AccountsService {
        const baseUrl = "Erp/Accounts";
        function Create(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Accounts/Create",
            Update = "Erp/Accounts/Update",
            Delete = "Erp/Accounts/Delete",
            Retrieve = "Erp/Accounts/Retrieve",
            List = "Erp/Accounts/List",
        }
    }
}
declare namespace PGMS.Erp {
    enum BudgetPeriod {
        Week = 1,
        Month = 2,
        Year = 3,
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface BudgetsForm {
        BudgetId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        PaymentTypeId: Serenity.LookupEditor;
        NoteList: NotesEditor;
    }
    class BudgetsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface BudgetsRow {
        BudgetId?: number;
        Name?: string;
        Total?: number;
        LeftAfterExpenses?: number;
        StartDate?: string;
        EndDate?: string;
        PaymentTypeId?: number;
        BudgetPeriod?: BudgetPeriod;
        PaymentTypeName?: string;
        NoteList?: NoteRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace BudgetsRow {
        const idProperty = "BudgetId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Budgets";
        const lookupKey = "Erp.Budgets";
        function getLookup(): Q.Lookup<BudgetsRow>;
        const enum Fields {
            BudgetId = "BudgetId",
            Name = "Name",
            Total = "Total",
            LeftAfterExpenses = "LeftAfterExpenses",
            StartDate = "StartDate",
            EndDate = "EndDate",
            PaymentTypeId = "PaymentTypeId",
            BudgetPeriod = "BudgetPeriod",
            PaymentTypeName = "PaymentTypeName",
            NoteList = "NoteList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace BudgetsService {
        const baseUrl = "Erp/Budgets";
        function Create(request: Serenity.SaveRequest<BudgetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BudgetsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BudgetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BudgetsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Budgets/Create",
            Update = "Erp/Budgets/Update",
            Delete = "Erp/Budgets/Delete",
            Retrieve = "Erp/Budgets/Retrieve",
            List = "Erp/Budgets/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface CompaniesForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        CompanyAccounts: Serenity.LookupEditor;
        Eik: Serenity.StringEditor;
        Mol: Serenity.StringEditor;
        Iban: Serenity.StringEditor;
        BankName: Serenity.StringEditor;
        BankSwift: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
    }
    class CompaniesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface CompaniesRow {
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
        CompanyAccounts?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace CompaniesRow {
        const idProperty = "CompanyId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Companies";
        const lookupKey = "Erp.Companies";
        function getLookup(): Q.Lookup<CompaniesRow>;
        const enum Fields {
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
            CompanyAccounts = "CompanyAccounts",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace CompaniesService {
        const baseUrl = "Erp/Companies";
        function Create(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompaniesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompaniesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Companies/Create",
            Update = "Erp/Companies/Update",
            Delete = "Erp/Companies/Delete",
            Retrieve = "Erp/Companies/Retrieve",
            List = "Erp/Companies/List",
        }
    }
}
declare namespace PGMS.Erp {
    interface Dataset {
        fill?: boolean;
        label?: string;
        data?: number[];
        backgroundColor?: string;
        borderColor?: string;
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface ExpensesForm {
        Description: Serenity.StringEditor;
        Total: Serenity.DecimalEditor;
        TransactionDate: Serenity.DateEditor;
        BudgetId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
    }
    class ExpensesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface ExpensesRow {
        ExpenseId?: number;
        Description?: string;
        Total?: number;
        TransactionDate?: string;
        BudgetId?: number;
        PaymentTypeId?: number;
        BudgetName?: string;
        BudgetTotal?: number;
        BudgetBudgetPeriod?: number;
        BudgetPaymentTypeId?: number;
        PaymentTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace ExpensesRow {
        const idProperty = "ExpenseId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Description";
        const localTextPrefix = "Erp.Expenses";
        const lookupKey = "Erp.Expenses";
        function getLookup(): Q.Lookup<ExpensesRow>;
        const enum Fields {
            ExpenseId = "ExpenseId",
            Description = "Description",
            Total = "Total",
            TransactionDate = "TransactionDate",
            BudgetId = "BudgetId",
            PaymentTypeId = "PaymentTypeId",
            BudgetName = "BudgetName",
            BudgetTotal = "BudgetTotal",
            BudgetBudgetPeriod = "BudgetBudgetPeriod",
            BudgetPaymentTypeId = "BudgetPaymentTypeId",
            PaymentTypeName = "PaymentTypeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace ExpensesService {
        const baseUrl = "Erp/Expenses";
        function Create(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Expenses/Create",
            Update = "Erp/Expenses/Update",
            Delete = "Erp/Expenses/Delete",
            Retrieve = "Erp/Expenses/Retrieve",
            List = "Erp/Expenses/List",
        }
    }
}
declare namespace PGMS.Erp {
    interface IncomeVSExpenseResponse {
        labels?: string[];
        datasets?: Dataset[];
    }
}
declare namespace PGMS.Erp {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Erp.Note";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface OrderDetailsRow {
        OrderDetailId?: number;
        ProductId?: number;
        OrderId?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
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
        LineTotal?: number;
    }
    namespace OrderDetailsRow {
        const idProperty = "OrderDetailId";
        const localTextPrefix = "Erp.OrderDetails";
        const enum Fields {
            OrderDetailId = "OrderDetailId",
            ProductId = "ProductId",
            OrderId = "OrderId",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
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
            LineTotal = "LineTotal",
        }
    }
}
declare namespace PGMS.Erp {
    namespace OrderDetailsService {
        const baseUrl = "Erp/OrderDetails";
        function Create(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/OrderDetails/Create",
            Update = "Erp/OrderDetails/Update",
            Delete = "Erp/OrderDetails/Delete",
            Retrieve = "Erp/OrderDetails/Retrieve",
            List = "Erp/OrderDetails/List",
        }
    }
}
declare namespace PGMS.Erp {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductId?: number;
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface OrdersForm {
        AccountId: Serenity.LookupEditor;
        CompanyId: Serenity.LookupEditor;
        PaymentTypeId: Serenity.LookupEditor;
        Width: Serenity.IntegerEditor;
        Height: Serenity.IntegerEditor;
        DetailList: OrderDetailsEditor;
        UserId: Serenity.LookupEditor;
        OrderStatusId: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
    class OrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface OrdersPerStatusResponse {
        labels?: string[];
        datasets?: Dataset[];
    }
}
declare namespace PGMS.Erp {
    interface OrdersRow {
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
        NoteList?: NoteRow[];
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
    namespace OrdersRow {
        const idProperty = "OrderId";
        const isActiveProperty = "IsActive";
        const nameProperty = "ShipName";
        const localTextPrefix = "Erp.Orders";
        const lookupKey = "Erp.Orders";
        function getLookup(): Q.Lookup<OrdersRow>;
        const enum Fields {
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
            NoteList = "NoteList",
            DetailList = "DetailList",
            OrderStatusName = "OrderStatusName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace OrdersService {
        const baseUrl = "Erp/Orders";
        function Create(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Orders/Create",
            Update = "Erp/Orders/Update",
            Delete = "Erp/Orders/Delete",
            Retrieve = "Erp/Orders/Retrieve",
            List = "Erp/Orders/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface OrderStatusesForm {
        Name: Serenity.StringEditor;
    }
    class OrderStatusesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface OrderStatusesRow {
        OrderStatusId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace OrderStatusesRow {
        const idProperty = "OrderStatusId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.OrderStatuses";
        const lookupKey = "Erp.OrderStatuses";
        function getLookup(): Q.Lookup<OrderStatusesRow>;
        const enum Fields {
            OrderStatusId = "OrderStatusId",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace OrderStatusesService {
        const baseUrl = "Erp/OrderStatuses";
        function Create(request: Serenity.SaveRequest<OrderStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderStatusesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderStatusesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/OrderStatuses/Create",
            Update = "Erp/OrderStatuses/Update",
            Delete = "Erp/OrderStatuses/Delete",
            Retrieve = "Erp/OrderStatuses/Retrieve",
            List = "Erp/OrderStatuses/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface OutsideOrdersForm {
        Name: Serenity.StringEditor;
        AccountRepresentsId: Serenity.LookupEditor;
        CompanyRepresentsId: Serenity.LookupEditor;
        PriceTheyOffer: Serenity.DecimalEditor;
        PriceWeSell: Serenity.DecimalEditor;
    }
    class OutsideOrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface OutsideOrdersRow {
        OutsideOrderId?: number;
        Name?: string;
        PriceTheyOffer?: number;
        PriceWeSell?: number;
        AccountRepresentsId?: number;
        CompanyRepresentsId?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace OutsideOrdersRow {
        const idProperty = "OutsideOrderId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.OutsideOrders";
        const lookupKey = "Erp.OutsideOrders";
        function getLookup(): Q.Lookup<OutsideOrdersRow>;
        const enum Fields {
            OutsideOrderId = "OutsideOrderId",
            Name = "Name",
            PriceTheyOffer = "PriceTheyOffer",
            PriceWeSell = "PriceWeSell",
            AccountRepresentsId = "AccountRepresentsId",
            CompanyRepresentsId = "CompanyRepresentsId",
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
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace OutsideOrdersService {
        const baseUrl = "Erp/OutsideOrders";
        function Create(request: Serenity.SaveRequest<OutsideOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OutsideOrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutsideOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutsideOrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/OutsideOrders/Create",
            Update = "Erp/OutsideOrders/Update",
            Delete = "Erp/OutsideOrders/Delete",
            Retrieve = "Erp/OutsideOrders/Retrieve",
            List = "Erp/OutsideOrders/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface PartnersForm {
        Name: Serenity.StringEditor;
        HardPercent: Serenity.IntegerEditor;
        PartnerType: Serenity.LookupEditor;
    }
    class PartnersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface PartnersRow {
        PartnerId?: number;
        Name?: string;
        HardPercent?: number;
        PartnerType?: number;
        PartnerTypeName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PartnersRow {
        const idProperty = "PartnerId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Partners";
        const lookupKey = "Erp.Partners";
        function getLookup(): Q.Lookup<PartnersRow>;
        const enum Fields {
            PartnerId = "PartnerId",
            Name = "Name",
            HardPercent = "HardPercent",
            PartnerType = "PartnerType",
            PartnerTypeName = "PartnerTypeName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace PartnersService {
        const baseUrl = "Erp/Partners";
        function Create(request: Serenity.SaveRequest<PartnersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartnersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartnersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartnersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Partners/Create",
            Update = "Erp/Partners/Update",
            Delete = "Erp/Partners/Delete",
            Retrieve = "Erp/Partners/Retrieve",
            List = "Erp/Partners/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface PartnerTypesForm {
        Name: Serenity.StringEditor;
    }
    class PartnerTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface PartnerTypesRow {
        PartnerTypeId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PartnerTypesRow {
        const idProperty = "PartnerTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.PartnerTypes";
        const lookupKey = "Erp.PartnerTypes";
        function getLookup(): Q.Lookup<PartnerTypesRow>;
        const enum Fields {
            PartnerTypeId = "PartnerTypeId",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace PartnerTypesService {
        const baseUrl = "Erp/PartnerTypes";
        function Create(request: Serenity.SaveRequest<PartnerTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartnerTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartnerTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartnerTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/PartnerTypes/Create",
            Update = "Erp/PartnerTypes/Update",
            Delete = "Erp/PartnerTypes/Delete",
            Retrieve = "Erp/PartnerTypes/Retrieve",
            List = "Erp/PartnerTypes/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface PaymentTypesForm {
        Name: Serenity.StringEditor;
    }
    class PaymentTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface PaymentTypesRow {
        PaymentTypeId?: number;
        Name?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace PaymentTypesRow {
        const idProperty = "PaymentTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.PaymentTypes";
        const lookupKey = "Erp.PaymentTypes";
        function getLookup(): Q.Lookup<PaymentTypesRow>;
        const enum Fields {
            PaymentTypeId = "PaymentTypeId",
            Name = "Name",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace PaymentTypesService {
        const baseUrl = "Erp/PaymentTypes";
        function Create(request: Serenity.SaveRequest<PaymentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/PaymentTypes/Create",
            Update = "Erp/PaymentTypes/Update",
            Delete = "Erp/PaymentTypes/Delete",
            Retrieve = "Erp/PaymentTypes/Retrieve",
            List = "Erp/PaymentTypes/List",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface ProductsForm {
        Name: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierId: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
        NoteList: NotesEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface ProductsRow {
        ProductId?: number;
        Name?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
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
    namespace ProductsRow {
        const idProperty = "ProductId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Products";
        const lookupKey = "Erp.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const enum Fields {
            ProductId = "ProductId",
            Name = "Name",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierId = "SupplierId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
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
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace ProductsService {
        const baseUrl = "Erp/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Products/Create",
            Update = "Erp/Products/Update",
            Delete = "Erp/Products/Delete",
            Retrieve = "Erp/Products/Retrieve",
            List = "Erp/Products/List",
        }
    }
}
declare namespace PGMS.Erp {
    namespace ReportsEndpointService {
        const baseUrl = "Erp/Reports";
        function IncomeVSExpenseResponse(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<IncomeVSExpenseResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrdersPerStatus(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersPerStatusResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            IncomeVSExpenseResponse = "Erp/Reports/IncomeVSExpenseResponse",
            OrdersPerStatus = "Erp/Reports/OrdersPerStatus",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface SentEmailsForm {
        FromEmail: Serenity.EmailEditor;
        FromName: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        ToEmail: Serenity.EmailEditor;
        ToName: Serenity.StringEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        Body: Serenity.HtmlContentEditor;
    }
    class SentEmailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface SentEmailsRow {
        SentEmailsId?: number;
        FromEmail?: string;
        FromName?: string;
        Subject?: string;
        Body?: string;
        ToEmail?: string;
        ToName?: string;
        Attachments?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        InsertUserName?: string;
        UpdateUserName?: string;
    }
    namespace SentEmailsRow {
        const idProperty = "SentEmailsId";
        const isActiveProperty = "IsActive";
        const nameProperty = "FromEmail";
        const localTextPrefix = "Erp.SentEmails";
        const lookupKey = "Erp.SentEmails";
        function getLookup(): Q.Lookup<SentEmailsRow>;
        const enum Fields {
            SentEmailsId = "SentEmailsId",
            FromEmail = "FromEmail",
            FromName = "FromName",
            Subject = "Subject",
            Body = "Body",
            ToEmail = "ToEmail",
            ToName = "ToName",
            Attachments = "Attachments",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
            IsActive = "IsActive",
            InsertUserName = "InsertUserName",
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace SentEmailsService {
        const baseUrl = "Erp/SentEmails";
        function Create(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SentEmailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SentEmailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/SentEmails/Create",
            Update = "Erp/SentEmails/Update",
            Delete = "Erp/SentEmails/Delete",
            Retrieve = "Erp/SentEmails/Retrieve",
            List = "Erp/SentEmails/List",
        }
    }
}
declare namespace PGMS.Erp {
    interface SupplierRepresentativesRow {
        RepresentativeId?: number;
        AccountId?: number;
        SupplierId?: number;
    }
    namespace SupplierRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Erp.SupplierRepresentatives";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            AccountId = "AccountId",
            SupplierId = "SupplierId",
        }
    }
}
declare namespace PGMS.Erp {
}
declare namespace PGMS.Erp {
    interface SuppliersForm {
        Name: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        SupplierRepresentatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        NoteList: NotesEditor;
    }
    class SuppliersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Erp {
    interface SuppliersRow {
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
    namespace SuppliersRow {
        const idProperty = "SupplierId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Name";
        const localTextPrefix = "Erp.Suppliers";
        const lookupKey = "Erp.Suppliers";
        function getLookup(): Q.Lookup<SuppliersRow>;
        const enum Fields {
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
            UpdateUserName = "UpdateUserName",
        }
    }
}
declare namespace PGMS.Erp {
    namespace SuppliersService {
        const baseUrl = "Erp/Suppliers";
        function Create(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Erp/Suppliers/Create",
            Update = "Erp/Suppliers/Update",
            Delete = "Erp/Suppliers/Delete",
            Retrieve = "Erp/Suppliers/Retrieve",
            List = "Erp/Suppliers/List",
        }
    }
}
declare namespace PGMS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace PGMS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace PGMS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace PGMS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace PGMS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PGMS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace PGMS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace PGMS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace PGMS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace PGMS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace PGMS {
    interface ScriptUserDefinition {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace PGMS.LanguageList {
    function getValue(): string[][];
}
declare namespace PGMS.ScriptInitialization {
}
declare namespace PGMS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace PGMS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace PGMS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace PGMS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace PGMS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace PGMS.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace PGMS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace PGMS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace PGMS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace PGMS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace PGMS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace PGMS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace PGMS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace PGMS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace PGMS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace PGMS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace PGMS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace PGMS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace PGMS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace PGMS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace PGMS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace PGMS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace PGMS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace PGMS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace PGMS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace PGMS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace PGMS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace PGMS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace PGMS.Erp {
    class AccountAttachmentsDialog extends Serenity.EntityDialog<AccountAttachmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AccountAttachmentsForm;
    }
}
declare namespace PGMS.Erp {
    class AccountAttachmentsGrid extends Serenity.EntityGrid<AccountAttachmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountAttachmentsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class AccountAttachmentsExtendedDialog extends AccountAttachmentsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PGMS.Erp {
    class AccountAttachmentsExtendedGrid extends AccountAttachmentsGrid {
        protected getDialogType(): typeof AccountAttachmentsExtendedDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _accountId;
        accountId: number;
    }
}
declare namespace PGMS.Erp {
    class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrdersForm;
        private loadedState;
        constructor();
        loadEntity(entity: Erp.OrdersRow): void;
        loadResponse(data: any): void;
        getSaveState(): string;
    }
}
declare namespace PGMS.Erp {
    class AccountOrdersDialog extends OrdersDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PGMS.Erp {
    class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getItemCssClass(item: OrdersRow, index: number): string;
    }
}
declare namespace PGMS.Erp {
    class AccountOrdersGrid extends OrdersGrid {
        protected getDialogType(): typeof AccountOrdersDialog;
        constructor(container: JQuery);
        getColumnsKey(): string;
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _accountId;
        accountId: number;
    }
}
declare namespace PGMS.Erp {
    class OutsideOrdersDialog extends Serenity.EntityDialog<OutsideOrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OutsideOrdersForm;
    }
}
declare namespace PGMS.Erp {
    class AccountOutsideOrdersDialog extends OutsideOrdersDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PGMS.Erp {
    class OutsideOrdersGrid extends Serenity.EntityGrid<OutsideOrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OutsideOrdersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class AccountOutsideOrdersGrid extends OutsideOrdersGrid {
        protected getDialogType(): typeof AccountOutsideOrdersDialog;
        constructor(container: JQuery);
        getColumnsKey(): string;
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _accountRepresentsId;
        accountRepresentsId: number;
    }
}
declare namespace PGMS.Erp {
    class AccountsDialog extends Serenity.EntityDialog<AccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AccountsForm;
        private attachmentsGrid;
        private accountOrdersGrid;
        private accountOutsideOrdersGrid;
        private loadedState;
        constructor();
        loadEntity(entity: Erp.AccountsRow): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PGMS.Erp {
    class AccountsGrid extends Serenity.EntityGrid<AccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getItemCssClass(item: AccountsRow, index: number): string;
    }
}
declare namespace PGMS.Erp {
    class AccountsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PGMS.Erp {
    class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ExpensesForm;
        constructor();
        loadEntity(entity: BudgetsRow): void;
    }
}
declare namespace PGMS.Erp {
    class BudgetExpensesDialog extends ExpensesDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PGMS.Erp {
    class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class BudgetExpensesGrid extends ExpensesGrid {
        protected getDialogType(): typeof BudgetExpensesDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _budgetId;
        budgetId: number;
    }
}
declare namespace PGMS.Erp {
    class BudgetsDialog extends Serenity.EntityDialog<BudgetsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BudgetsForm;
        private loadedState;
        private budgetExpensesGrid;
        constructor();
        loadEntity(entity: Erp.BudgetsRow): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PGMS.Erp {
    class BudgetsGrid extends Serenity.EntityGrid<BudgetsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BudgetsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class CompaniesDialog extends Serenity.EntityDialog<CompaniesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CompaniesForm;
    }
}
declare namespace PGMS.Erp {
    class CompaniesGrid extends Serenity.EntityGrid<CompaniesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompaniesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class CompaniesListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace PGMS.Erp {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace PGMS.Erp {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace PGMS.Erp {
    class OrderDetailsDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailsForm;
        constructor();
    }
}
declare namespace PGMS.Erp {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace PGMS.Erp {
    class MyOrdersGrid extends Erp.OrdersGrid {
        protected totalRecord: number;
        protected myLookupQuickFilter: Serenity.LookupEditor;
        constructor(container: JQuery);
        protected createQuickFilters(): void;
        protected createView(): Slick.RemoteView<OrdersRow>;
        protected onViewProcessData(response: Serenity.ListResponse<OrdersRow>): Serenity.ListResponse<OrdersRow>;
        protected onViewSubmit(): boolean;
    }
}
declare namespace PGMS.Erp {
    class OrderStatusesDialog extends Serenity.EntityDialog<OrderStatusesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderStatusesForm;
    }
}
declare namespace PGMS.Erp {
    class OrderStatusesGrid extends Serenity.EntityGrid<OrderStatusesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderStatusesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class PartnersDialog extends Serenity.EntityDialog<PartnersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PartnersForm;
    }
}
declare namespace PGMS.Erp {
    class PartnersGrid extends Serenity.EntityGrid<PartnersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartnersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class PartnerTypesDialog extends Serenity.EntityDialog<PartnerTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PartnerTypesForm;
    }
}
declare namespace PGMS.Erp {
    class PartnerTypesGrid extends Serenity.EntityGrid<PartnerTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartnerTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class PaymentTypesDialog extends Serenity.EntityDialog<PaymentTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PaymentTypesForm;
    }
}
declare namespace PGMS.Erp {
    class PaymentTypesGrid extends Serenity.EntityGrid<PaymentTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductsForm;
        private loadedState;
        constructor();
        loadEntity(entity: Erp.AccountsRow): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PGMS.Erp {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class SentEmailsDialog extends Serenity.EntityDialog<SentEmailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SentEmailsForm;
    }
}
declare namespace PGMS.Erp {
    class SentEmailsGrid extends Serenity.EntityGrid<SentEmailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SentEmailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Erp {
    class ProductSuppliersdDialog extends ProductsDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace PGMS.Erp {
    class ProductSuppliersdGrid extends ProductsGrid {
        protected getDialogType(): typeof ProductSuppliersdDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _supplierId;
        supplierId: number;
    }
}
declare namespace PGMS.Erp {
    class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SuppliersForm;
        private loadedState;
        private productsGrid;
        constructor();
        loadEntity(entity: Erp.SuppliersRow): void;
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace PGMS.Erp {
    class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare var Chart: any;
declare namespace PGMS.Erp {
    class IncomeVSExpense extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {});
    }
}
declare var Chart: any;
declare namespace PGMS.Erp {
    class OrdersPerStatus extends Serenity.TemplatedWidget<any> {
        constructor(elem: JQuery, opt: {});
    }
}
declare namespace PGMS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace PGMS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
