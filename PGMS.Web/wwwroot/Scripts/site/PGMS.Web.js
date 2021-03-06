﻿var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.EmailEditor;
                    var w3 = s.ImageUploadEditor;
                    var w4 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'UserId', w0,
                        'Username', w1,
                        'DisplayName', w1,
                        'Email', w2,
                        'UserImage', w3,
                        'Password', w4,
                        'PasswordConfirm', w4,
                        'Source', w1
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration:User:Read';
            function getLookup() {
                return Q.getLookup('Administration:User:Read');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsForm = /** @class */ (function (_super) {
            __extends(AccountAttachmentsForm, _super);
            function AccountAttachmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AccountAttachmentsForm.init) {
                    AccountAttachmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(AccountAttachmentsForm, [
                        'Name', w0,
                        'Description', w1,
                        'FilePath', w2,
                        'AccountId', w3
                    ]);
                }
                return _this;
            }
            AccountAttachmentsForm.formKey = 'Erp.AccountAttachments';
            return AccountAttachmentsForm;
        }(Serenity.PrefixedContext));
        Erp.AccountAttachmentsForm = AccountAttachmentsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsRow;
        (function (AccountAttachmentsRow) {
            AccountAttachmentsRow.idProperty = 'AccountAttachmentId';
            AccountAttachmentsRow.isActiveProperty = 'IsActive';
            AccountAttachmentsRow.nameProperty = 'Name';
            AccountAttachmentsRow.localTextPrefix = 'Erp.AccountAttachments';
            AccountAttachmentsRow.lookupKey = 'Erp.AccountAttachments';
            function getLookup() {
                return Q.getLookup('Erp.AccountAttachments');
            }
            AccountAttachmentsRow.getLookup = getLookup;
        })(AccountAttachmentsRow = Erp.AccountAttachmentsRow || (Erp.AccountAttachmentsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsService;
        (function (AccountAttachmentsService) {
            AccountAttachmentsService.baseUrl = 'Erp/AccountAttachments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AccountAttachmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountAttachmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccountAttachmentsService = Erp.AccountAttachmentsService || (Erp.AccountAttachmentsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountCompaniesRow;
        (function (AccountCompaniesRow) {
            AccountCompaniesRow.idProperty = 'AccountCompanyID';
            AccountCompaniesRow.localTextPrefix = 'Erp.AccountCompanies';
        })(AccountCompaniesRow = Erp.AccountCompaniesRow || (Erp.AccountCompaniesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsForm = /** @class */ (function (_super) {
            __extends(AccountsForm, _super);
            function AccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AccountsForm.init) {
                    AccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = Erp.NotesEditor;
                    Q.initFormType(AccountsForm, [
                        'AccountId', w0,
                        'Name', w1,
                        'PartnerType', w2,
                        'Email', w1,
                        'PhoneNumber', w1,
                        'IsVip', w3,
                        'Address', w1,
                        'City', w1,
                        'Country', w1,
                        'NoteList', w4
                    ]);
                }
                return _this;
            }
            AccountsForm.formKey = 'Erp.Accounts';
            return AccountsForm;
        }(Serenity.PrefixedContext));
        Erp.AccountsForm = AccountsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsRow;
        (function (AccountsRow) {
            AccountsRow.idProperty = 'AccountId';
            AccountsRow.isActiveProperty = 'IsActive';
            AccountsRow.nameProperty = 'Name';
            AccountsRow.localTextPrefix = 'Erp.Accounts';
            AccountsRow.lookupKey = 'Erp.Accounts';
            function getLookup() {
                return Q.getLookup('Erp.Accounts');
            }
            AccountsRow.getLookup = getLookup;
        })(AccountsRow = Erp.AccountsRow || (Erp.AccountsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsService;
        (function (AccountsService) {
            AccountsService.baseUrl = 'Erp/Accounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccountsService = Erp.AccountsService || (Erp.AccountsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetPeriod;
        (function (BudgetPeriod) {
            BudgetPeriod[BudgetPeriod["Week"] = 1] = "Week";
            BudgetPeriod[BudgetPeriod["Month"] = 2] = "Month";
            BudgetPeriod[BudgetPeriod["Year"] = 3] = "Year";
        })(BudgetPeriod = Erp.BudgetPeriod || (Erp.BudgetPeriod = {}));
        Serenity.Decorators.registerEnumType(BudgetPeriod, 'PGMS.Erp.BudgetPeriod', 'PGMS.Erp.Entities.BudgetPeriod');
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetsForm = /** @class */ (function (_super) {
            __extends(BudgetsForm, _super);
            function BudgetsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BudgetsForm.init) {
                    BudgetsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Erp.NotesEditor;
                    Q.initFormType(BudgetsForm, [
                        'BudgetId', w0,
                        'Name', w1,
                        'StartDate', w2,
                        'EndDate', w2,
                        'PaymentTypeId', w3,
                        'NoteList', w4
                    ]);
                }
                return _this;
            }
            BudgetsForm.formKey = 'Erp.Budgets';
            return BudgetsForm;
        }(Serenity.PrefixedContext));
        Erp.BudgetsForm = BudgetsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetsRow;
        (function (BudgetsRow) {
            BudgetsRow.idProperty = 'BudgetId';
            BudgetsRow.isActiveProperty = 'IsActive';
            BudgetsRow.nameProperty = 'Name';
            BudgetsRow.localTextPrefix = 'Erp.Budgets';
            BudgetsRow.lookupKey = 'Erp.Budgets';
            function getLookup() {
                return Q.getLookup('Erp.Budgets');
            }
            BudgetsRow.getLookup = getLookup;
        })(BudgetsRow = Erp.BudgetsRow || (Erp.BudgetsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetsService;
        (function (BudgetsService) {
            BudgetsService.baseUrl = 'Erp/Budgets';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BudgetsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BudgetsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BudgetsService = Erp.BudgetsService || (Erp.BudgetsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesForm = /** @class */ (function (_super) {
            __extends(CompaniesForm, _super);
            function CompaniesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CompaniesForm.init) {
                    CompaniesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(CompaniesForm, [
                        'Name', w0,
                        'PhoneNumber', w0,
                        'CompanyAccounts', w1,
                        'Eik', w0,
                        'Mol', w0,
                        'Iban', w0,
                        'BankName', w0,
                        'BankSwift', w0,
                        'Address', w0,
                        'City', w0,
                        'Country', w0
                    ]);
                }
                return _this;
            }
            CompaniesForm.formKey = 'Erp.Companies';
            return CompaniesForm;
        }(Serenity.PrefixedContext));
        Erp.CompaniesForm = CompaniesForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesRow;
        (function (CompaniesRow) {
            CompaniesRow.idProperty = 'CompanyId';
            CompaniesRow.isActiveProperty = 'IsActive';
            CompaniesRow.nameProperty = 'Name';
            CompaniesRow.localTextPrefix = 'Erp.Companies';
            CompaniesRow.lookupKey = 'Erp.Companies';
            function getLookup() {
                return Q.getLookup('Erp.Companies');
            }
            CompaniesRow.getLookup = getLookup;
        })(CompaniesRow = Erp.CompaniesRow || (Erp.CompaniesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesService;
        (function (CompaniesService) {
            CompaniesService.baseUrl = 'Erp/Companies';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CompaniesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CompaniesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CompaniesService = Erp.CompaniesService || (Erp.CompaniesService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsForm = /** @class */ (function (_super) {
            __extends(ExpensesAttachmentsForm, _super);
            function ExpensesAttachmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpensesAttachmentsForm.init) {
                    ExpensesAttachmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(ExpensesAttachmentsForm, [
                        'Name', w0,
                        'Description', w1,
                        'FilePath', w2,
                        'ExpenseId', w3
                    ]);
                }
                return _this;
            }
            ExpensesAttachmentsForm.formKey = 'Erp.ExpensesAttachments';
            return ExpensesAttachmentsForm;
        }(Serenity.PrefixedContext));
        Erp.ExpensesAttachmentsForm = ExpensesAttachmentsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsRow;
        (function (ExpensesAttachmentsRow) {
            ExpensesAttachmentsRow.idProperty = 'ExpenseAttachmentId';
            ExpensesAttachmentsRow.isActiveProperty = 'IsActive';
            ExpensesAttachmentsRow.nameProperty = 'Name';
            ExpensesAttachmentsRow.localTextPrefix = 'Erp.ExpensesAttachments';
            ExpensesAttachmentsRow.lookupKey = 'Erp.ExpensesAttachments';
            function getLookup() {
                return Q.getLookup('Erp.ExpensesAttachments');
            }
            ExpensesAttachmentsRow.getLookup = getLookup;
        })(ExpensesAttachmentsRow = Erp.ExpensesAttachmentsRow || (Erp.ExpensesAttachmentsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsService;
        (function (ExpensesAttachmentsService) {
            ExpensesAttachmentsService.baseUrl = 'Erp/ExpensesAttachments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExpensesAttachmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpensesAttachmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpensesAttachmentsService = Erp.ExpensesAttachmentsService || (Erp.ExpensesAttachmentsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesForm = /** @class */ (function (_super) {
            __extends(ExpensesForm, _super);
            function ExpensesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpensesForm.init) {
                    ExpensesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.DateTimeEditor;
                    var w4 = s.LookupEditor;
                    var w5 = s.BooleanEditor;
                    var w6 = s.HtmlNoteContentEditor;
                    var w7 = Erp.NotesEditor;
                    Q.initFormType(ExpensesForm, [
                        'Name', w0,
                        'Total', w1,
                        'TransactionType', w2,
                        'TransactionDate', w3,
                        'PaymentTypeId', w4,
                        'BudgetId', w4,
                        'WithVat', w5,
                        'DepositPayment', w5,
                        'Description', w6,
                        'AccountId', w4,
                        'OrderId', w4,
                        'OutsideOrderId', w4,
                        'UserId', w4,
                        'NoteList', w7
                    ]);
                }
                return _this;
            }
            ExpensesForm.formKey = 'Erp.Expenses';
            return ExpensesForm;
        }(Serenity.PrefixedContext));
        Erp.ExpensesForm = ExpensesForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesRow;
        (function (ExpensesRow) {
            ExpensesRow.idProperty = 'ExpenseId';
            ExpensesRow.isActiveProperty = 'IsActive';
            ExpensesRow.nameProperty = 'Name';
            ExpensesRow.localTextPrefix = 'Erp.Expenses';
            ExpensesRow.lookupKey = 'Erp.Expenses';
            function getLookup() {
                return Q.getLookup('Erp.Expenses');
            }
            ExpensesRow.getLookup = getLookup;
        })(ExpensesRow = Erp.ExpensesRow || (Erp.ExpensesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesService;
        (function (ExpensesService) {
            ExpensesService.baseUrl = 'Erp/Expenses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExpensesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpensesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpensesService = Erp.ExpensesService || (Erp.ExpensesService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Erp.Note';
        })(NoteRow = Erp.NoteRow || (Erp.NoteRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsForm = /** @class */ (function (_super) {
            __extends(OrderAttachmentsForm, _super);
            function OrderAttachmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderAttachmentsForm.init) {
                    OrderAttachmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(OrderAttachmentsForm, [
                        'Name', w0,
                        'Description', w1,
                        'FilePath', w2,
                        'OrderId', w3
                    ]);
                }
                return _this;
            }
            OrderAttachmentsForm.formKey = 'Erp.OrderAttachments';
            return OrderAttachmentsForm;
        }(Serenity.PrefixedContext));
        Erp.OrderAttachmentsForm = OrderAttachmentsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsRow;
        (function (OrderAttachmentsRow) {
            OrderAttachmentsRow.idProperty = 'OrderAttachmentId';
            OrderAttachmentsRow.isActiveProperty = 'IsActive';
            OrderAttachmentsRow.nameProperty = 'Name';
            OrderAttachmentsRow.localTextPrefix = 'Erp.OrderAttachments';
            OrderAttachmentsRow.lookupKey = 'Erp.OrderAttachments';
            function getLookup() {
                return Q.getLookup('Erp.OrderAttachments');
            }
            OrderAttachmentsRow.getLookup = getLookup;
        })(OrderAttachmentsRow = Erp.OrderAttachmentsRow || (Erp.OrderAttachmentsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsService;
        (function (OrderAttachmentsService) {
            OrderAttachmentsService.baseUrl = 'Erp/OrderAttachments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderAttachmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderAttachmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderAttachmentsService = Erp.OrderAttachmentsService || (Erp.OrderAttachmentsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderDetailsForm = /** @class */ (function (_super) {
            __extends(OrderDetailsForm, _super);
            function OrderDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailsForm.init) {
                    OrderDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = Erp.NotesEditor;
                    Q.initFormType(OrderDetailsForm, [
                        'ProductId', w0,
                        'Description', w1,
                        'Width', w2,
                        'Height', w2,
                        'Quadrature', w2,
                        'Quantity', w3,
                        'UnitPrice', w2,
                        'Discount', w2,
                        'AdditionalCosts', w2,
                        'NoteList', w4
                    ]);
                }
                return _this;
            }
            OrderDetailsForm.formKey = 'Erp.OrderDetails';
            return OrderDetailsForm;
        }(Serenity.PrefixedContext));
        Erp.OrderDetailsForm = OrderDetailsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderDetailsRow;
        (function (OrderDetailsRow) {
            OrderDetailsRow.idProperty = 'OrderDetailId';
            OrderDetailsRow.localTextPrefix = 'Erp.OrderDetails';
        })(OrderDetailsRow = Erp.OrderDetailsRow || (Erp.OrderDetailsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderDetailsService;
        (function (OrderDetailsService) {
            OrderDetailsService.baseUrl = 'Erp/OrderDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailsService = Erp.OrderDetailsService || (Erp.OrderDetailsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersForm = /** @class */ (function (_super) {
            __extends(OrdersForm, _super);
            function OrdersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrdersForm.init) {
                    OrdersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = Erp.OrderDetailsEditor;
                    var w4 = s.DateTimeEditor;
                    var w5 = s.DateEditor;
                    var w6 = Erp.NotesEditor;
                    Q.initFormType(OrdersForm, [
                        'Name', w0,
                        'AccountId', w1,
                        'PaymentTypeId', w1,
                        'WithVat', w2,
                        'DetailList', w3,
                        'CuttingByOne', w2,
                        'CuttingManual', w2,
                        'CuttingMachine', w2,
                        'Printing', w2,
                        'Laminating', w2,
                        'TransportFolio', w2,
                        'Cleaning', w2,
                        'Cashing', w2,
                        'OrderStatusId', w1,
                        'UserId', w1,
                        'StartDate', w4,
                        'DeadLine', w4,
                        'NotReal', w2,
                        'OrderDate', w5,
                        'ShippedDate', w5,
                        'ShipName', w0,
                        'ShipAddress', w0,
                        'ShipCity', w0,
                        'ShipCountry', w0,
                        'NoteList', w6
                    ]);
                }
                return _this;
            }
            OrdersForm.formKey = 'Erp.Orders';
            return OrdersForm;
        }(Serenity.PrefixedContext));
        Erp.OrdersForm = OrdersForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersRow;
        (function (OrdersRow) {
            OrdersRow.idProperty = 'OrderId';
            OrdersRow.isActiveProperty = 'IsActive';
            OrdersRow.nameProperty = 'Name';
            OrdersRow.localTextPrefix = 'Erp.Orders';
            OrdersRow.lookupKey = 'Erp.Orders';
            function getLookup() {
                return Q.getLookup('Erp.Orders');
            }
            OrdersRow.getLookup = getLookup;
        })(OrdersRow = Erp.OrdersRow || (Erp.OrdersRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersService;
        (function (OrdersService) {
            OrdersService.baseUrl = 'Erp/Orders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrdersService = Erp.OrdersService || (Erp.OrdersService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesForm = /** @class */ (function (_super) {
            __extends(OrderStatusesForm, _super);
            function OrderStatusesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderStatusesForm.init) {
                    OrderStatusesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = PGMS.Common.ColorPickerEditor;
                    Q.initFormType(OrderStatusesForm, [
                        'Name', w0,
                        'BackgroundColor', w1,
                        'BorderColor', w1
                    ]);
                }
                return _this;
            }
            OrderStatusesForm.formKey = 'Erp.OrderStatuses';
            return OrderStatusesForm;
        }(Serenity.PrefixedContext));
        Erp.OrderStatusesForm = OrderStatusesForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesRow;
        (function (OrderStatusesRow) {
            OrderStatusesRow.idProperty = 'OrderStatusId';
            OrderStatusesRow.isActiveProperty = 'IsActive';
            OrderStatusesRow.nameProperty = 'Name';
            OrderStatusesRow.localTextPrefix = 'Erp.OrderStatuses';
            OrderStatusesRow.lookupKey = 'Erp.OrderStatuses';
            function getLookup() {
                return Q.getLookup('Erp.OrderStatuses');
            }
            OrderStatusesRow.getLookup = getLookup;
        })(OrderStatusesRow = Erp.OrderStatusesRow || (Erp.OrderStatusesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesService;
        (function (OrderStatusesService) {
            OrderStatusesService.baseUrl = 'Erp/OrderStatuses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderStatusesService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderStatusesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderStatusesService = Erp.OrderStatusesService || (Erp.OrderStatusesService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsForm = /** @class */ (function (_super) {
            __extends(OutsideOrderAttachmentsForm, _super);
            function OutsideOrderAttachmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutsideOrderAttachmentsForm.init) {
                    OutsideOrderAttachmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(OutsideOrderAttachmentsForm, [
                        'Name', w0,
                        'Description', w1,
                        'FilePath', w2,
                        'OutsideOrderId', w3
                    ]);
                }
                return _this;
            }
            OutsideOrderAttachmentsForm.formKey = 'Erp.OutsideOrderAttachments';
            return OutsideOrderAttachmentsForm;
        }(Serenity.PrefixedContext));
        Erp.OutsideOrderAttachmentsForm = OutsideOrderAttachmentsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsRow;
        (function (OutsideOrderAttachmentsRow) {
            OutsideOrderAttachmentsRow.idProperty = 'OutsideOrderAttachmentId';
            OutsideOrderAttachmentsRow.isActiveProperty = 'IsActive';
            OutsideOrderAttachmentsRow.nameProperty = 'Name';
            OutsideOrderAttachmentsRow.localTextPrefix = 'Erp.OutsideOrderAttachments';
            OutsideOrderAttachmentsRow.lookupKey = 'Erp.OutsideOrderAttachments';
            function getLookup() {
                return Q.getLookup('Erp.OutsideOrderAttachments');
            }
            OutsideOrderAttachmentsRow.getLookup = getLookup;
        })(OutsideOrderAttachmentsRow = Erp.OutsideOrderAttachmentsRow || (Erp.OutsideOrderAttachmentsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsService;
        (function (OutsideOrderAttachmentsService) {
            OutsideOrderAttachmentsService.baseUrl = 'Erp/OutsideOrderAttachments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutsideOrderAttachmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutsideOrderAttachmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutsideOrderAttachmentsService = Erp.OutsideOrderAttachmentsService || (Erp.OutsideOrderAttachmentsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrdersForm = /** @class */ (function (_super) {
            __extends(OutsideOrdersForm, _super);
            function OutsideOrdersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OutsideOrdersForm.init) {
                    OutsideOrdersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateTimeEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.BooleanEditor;
                    var w5 = s.HtmlNoteContentEditor;
                    var w6 = Erp.NotesEditor;
                    Q.initFormType(OutsideOrdersForm, [
                        'Name', w0,
                        'AccountRepresentsId', w1,
                        'OrderStatusId', w1,
                        'CompanyRepresentsId', w1,
                        'AssignUserId', w1,
                        'StartDate', w2,
                        'DeadLine', w2,
                        'PriceTheyOffer', w3,
                        'PriceWeSell', w3,
                        'WithVat', w4,
                        'Description', w5,
                        'NoteList', w6
                    ]);
                }
                return _this;
            }
            OutsideOrdersForm.formKey = 'Erp.OutsideOrders';
            return OutsideOrdersForm;
        }(Serenity.PrefixedContext));
        Erp.OutsideOrdersForm = OutsideOrdersForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrdersRow;
        (function (OutsideOrdersRow) {
            OutsideOrdersRow.idProperty = 'OutsideOrderId';
            OutsideOrdersRow.isActiveProperty = 'IsActive';
            OutsideOrdersRow.nameProperty = 'Name';
            OutsideOrdersRow.localTextPrefix = 'Erp.OutsideOrders';
            OutsideOrdersRow.lookupKey = 'Erp.OutsideOrders';
            function getLookup() {
                return Q.getLookup('Erp.OutsideOrders');
            }
            OutsideOrdersRow.getLookup = getLookup;
        })(OutsideOrdersRow = Erp.OutsideOrdersRow || (Erp.OutsideOrdersRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrdersService;
        (function (OutsideOrdersService) {
            OutsideOrdersService.baseUrl = 'Erp/OutsideOrders';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OutsideOrdersService[x] = function (r, s, o) {
                    return Q.serviceRequest(OutsideOrdersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OutsideOrdersService = Erp.OutsideOrdersService || (Erp.OutsideOrdersService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnersForm = /** @class */ (function (_super) {
            __extends(PartnersForm, _super);
            function PartnersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PartnersForm.init) {
                    PartnersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    Q.initFormType(PartnersForm, [
                        'Name', w0,
                        'HardPercent', w1,
                        'PartnerType', w2
                    ]);
                }
                return _this;
            }
            PartnersForm.formKey = 'Erp.Partners';
            return PartnersForm;
        }(Serenity.PrefixedContext));
        Erp.PartnersForm = PartnersForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnersRow;
        (function (PartnersRow) {
            PartnersRow.idProperty = 'PartnerId';
            PartnersRow.isActiveProperty = 'IsActive';
            PartnersRow.nameProperty = 'Name';
            PartnersRow.localTextPrefix = 'Erp.Partners';
            PartnersRow.lookupKey = 'Erp.Partners';
            function getLookup() {
                return Q.getLookup('Erp.Partners');
            }
            PartnersRow.getLookup = getLookup;
        })(PartnersRow = Erp.PartnersRow || (Erp.PartnersRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnersService;
        (function (PartnersService) {
            PartnersService.baseUrl = 'Erp/Partners';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PartnersService[x] = function (r, s, o) {
                    return Q.serviceRequest(PartnersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PartnersService = Erp.PartnersService || (Erp.PartnersService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnerTypesForm = /** @class */ (function (_super) {
            __extends(PartnerTypesForm, _super);
            function PartnerTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PartnerTypesForm.init) {
                    PartnerTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PartnerTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            PartnerTypesForm.formKey = 'Erp.PartnerTypes';
            return PartnerTypesForm;
        }(Serenity.PrefixedContext));
        Erp.PartnerTypesForm = PartnerTypesForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnerTypesRow;
        (function (PartnerTypesRow) {
            PartnerTypesRow.idProperty = 'PartnerTypeId';
            PartnerTypesRow.isActiveProperty = 'IsActive';
            PartnerTypesRow.nameProperty = 'Name';
            PartnerTypesRow.localTextPrefix = 'Erp.PartnerTypes';
            PartnerTypesRow.lookupKey = 'Erp.PartnerTypes';
            function getLookup() {
                return Q.getLookup('Erp.PartnerTypes');
            }
            PartnerTypesRow.getLookup = getLookup;
        })(PartnerTypesRow = Erp.PartnerTypesRow || (Erp.PartnerTypesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnerTypesService;
        (function (PartnerTypesService) {
            PartnerTypesService.baseUrl = 'Erp/PartnerTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PartnerTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PartnerTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PartnerTypesService = Erp.PartnerTypesService || (Erp.PartnerTypesService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PaymentTypesForm = /** @class */ (function (_super) {
            __extends(PaymentTypesForm, _super);
            function PaymentTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PaymentTypesForm.init) {
                    PaymentTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PaymentTypesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
            }
            PaymentTypesForm.formKey = 'Erp.PaymentTypes';
            return PaymentTypesForm;
        }(Serenity.PrefixedContext));
        Erp.PaymentTypesForm = PaymentTypesForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PaymentTypesRow;
        (function (PaymentTypesRow) {
            PaymentTypesRow.idProperty = 'PaymentTypeId';
            PaymentTypesRow.isActiveProperty = 'IsActive';
            PaymentTypesRow.nameProperty = 'Name';
            PaymentTypesRow.localTextPrefix = 'Erp.PaymentTypes';
            PaymentTypesRow.lookupKey = 'Erp.PaymentTypes';
            function getLookup() {
                return Q.getLookup('Erp.PaymentTypes');
            }
            PaymentTypesRow.getLookup = getLookup;
        })(PaymentTypesRow = Erp.PaymentTypesRow || (Erp.PaymentTypesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PaymentTypesService;
        (function (PaymentTypesService) {
            PaymentTypesService.baseUrl = 'Erp/PaymentTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaymentTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaymentTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PaymentTypesService = Erp.PaymentTypesService || (Erp.PaymentTypesService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductsForm = /** @class */ (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductsForm.init) {
                    ProductsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.HtmlNoteContentEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.LookupEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    var w7 = Erp.NotesEditor;
                    Q.initFormType(ProductsForm, [
                        'Name', w0,
                        'Description', w1,
                        'ProductImage', w2,
                        'Discontinued', w3,
                        'SupplierId', w4,
                        'UnitPriceWithDDS', w5,
                        'UnitPricePartner', w5,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6,
                        'NoteList', w7
                    ]);
                }
                return _this;
            }
            ProductsForm.formKey = 'Erp.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        Erp.ProductsForm = ProductsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'ProductId';
            ProductsRow.isActiveProperty = 'IsActive';
            ProductsRow.nameProperty = 'Name';
            ProductsRow.localTextPrefix = 'Erp.Products';
            ProductsRow.lookupKey = 'Erp.Products';
            function getLookup() {
                return Q.getLookup('Erp.Products');
            }
            ProductsRow.getLookup = getLookup;
        })(ProductsRow = Erp.ProductsRow || (Erp.ProductsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'Erp/Products';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductsService = Erp.ProductsService || (Erp.ProductsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ReportsEndpointService;
        (function (ReportsEndpointService) {
            ReportsEndpointService.baseUrl = 'Erp/Reports';
            [
                'IncomeVSExpenseResponse',
                'OrdersPerStatus'
            ].forEach(function (x) {
                ReportsEndpointService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReportsEndpointService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReportsEndpointService = Erp.ReportsEndpointService || (Erp.ReportsEndpointService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SentEmailsForm = /** @class */ (function (_super) {
            __extends(SentEmailsForm, _super);
            function SentEmailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SentEmailsForm.init) {
                    SentEmailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.HtmlContentEditor;
                    Q.initFormType(SentEmailsForm, [
                        'FromEmail', w0,
                        'FromName', w1,
                        'Subject', w1,
                        'ToEmail', w0,
                        'ToName', w1,
                        'Attachments', w2,
                        'Body', w3
                    ]);
                }
                return _this;
            }
            SentEmailsForm.formKey = 'Erp.SentEmails';
            return SentEmailsForm;
        }(Serenity.PrefixedContext));
        Erp.SentEmailsForm = SentEmailsForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SentEmailsRow;
        (function (SentEmailsRow) {
            SentEmailsRow.idProperty = 'SentEmailsId';
            SentEmailsRow.isActiveProperty = 'IsActive';
            SentEmailsRow.nameProperty = 'FromEmail';
            SentEmailsRow.localTextPrefix = 'Erp.SentEmails';
            SentEmailsRow.lookupKey = 'Erp.SentEmails';
            function getLookup() {
                return Q.getLookup('Erp.SentEmails');
            }
            SentEmailsRow.getLookup = getLookup;
        })(SentEmailsRow = Erp.SentEmailsRow || (Erp.SentEmailsRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SentEmailsService;
        (function (SentEmailsService) {
            SentEmailsService.baseUrl = 'Erp/SentEmails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SentEmailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SentEmailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SentEmailsService = Erp.SentEmailsService || (Erp.SentEmailsService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SupplierRepresentativesRow;
        (function (SupplierRepresentativesRow) {
            SupplierRepresentativesRow.idProperty = 'RepresentativeId';
            SupplierRepresentativesRow.localTextPrefix = 'Erp.SupplierRepresentatives';
        })(SupplierRepresentativesRow = Erp.SupplierRepresentativesRow || (Erp.SupplierRepresentativesRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SuppliersForm = /** @class */ (function (_super) {
            __extends(SuppliersForm, _super);
            function SuppliersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppliersForm.init) {
                    SuppliersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Erp.NotesEditor;
                    Q.initFormType(SuppliersForm, [
                        'Name', w0,
                        'PhoneNumber', w0,
                        'SupplierRepresentatives', w1,
                        'Address', w0,
                        'City', w0,
                        'Country', w0,
                        'NoteList', w2
                    ]);
                }
                return _this;
            }
            SuppliersForm.formKey = 'Erp.Suppliers';
            return SuppliersForm;
        }(Serenity.PrefixedContext));
        Erp.SuppliersForm = SuppliersForm;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SuppliersRow;
        (function (SuppliersRow) {
            SuppliersRow.idProperty = 'SupplierId';
            SuppliersRow.isActiveProperty = 'IsActive';
            SuppliersRow.nameProperty = 'Name';
            SuppliersRow.localTextPrefix = 'Erp.Suppliers';
            SuppliersRow.lookupKey = 'Erp.Suppliers';
            function getLookup() {
                return Q.getLookup('Erp.Suppliers');
            }
            SuppliersRow.getLookup = getLookup;
        })(SuppliersRow = Erp.SuppliersRow || (Erp.SuppliersRow = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SuppliersService;
        (function (SuppliersService) {
            SuppliersService.baseUrl = 'Erp/Suppliers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SuppliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppliersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppliersService = Erp.SuppliersService || (Erp.SuppliersService = {}));
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var TransactionType;
        (function (TransactionType) {
            TransactionType[TransactionType["Expense"] = 1] = "Expense";
            TransactionType[TransactionType["Income"] = 2] = "Income";
        })(TransactionType = Erp.TransactionType || (Erp.TransactionType = {}));
        Serenity.Decorators.registerEnumType(TransactionType, 'PGMS.Erp.TransactionType', 'PGMS.Erp.Entities.TransactionType');
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = PGMS.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = PGMS.LanguageList || (PGMS.LanguageList = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />
var PGMS;
(function (PGMS) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('PGMS');
        Serenity.EntityDialog.defaultLanguageList = PGMS.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        Serenity.DataGrid.defaultPersistanceStorage = new PGMS.Common.UserPreferenceStorage();
    })(ScriptInitialization = PGMS.ScriptInitialization || (PGMS.ScriptInitialization = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = PGMS.Administration || (PGMS.Administration = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    PGMS.BasicProgressDialog = BasicProgressDialog;
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new PGMS.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CheckboxColoredFormatter = /** @class */ (function () {
            function CheckboxColoredFormatter() {
            }
            CheckboxColoredFormatter.prototype.format = function (ctx) {
                if (ctx.value === false)
                    return "<div style='height:100%;' ><span class='check-box no-float readonly'></span></div> ";
                else
                    return "<div style='height:100%; background-color: #3C8DBC;' ><span class='check-box no-float readonly checked'></span> </div>";
            };
            CheckboxColoredFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
            ], CheckboxColoredFormatter);
            return CheckboxColoredFormatter;
        }());
        Erp.CheckboxColoredFormatter = CheckboxColoredFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ColorPickerEditor = /** @class */ (function (_super) {
            __extends(ColorPickerEditor, _super);
            function ColorPickerEditor(container) {
                var _this = _super.call(this, container) || this;
                _this.updateElementContent();
                return _this;
            }
            ColorPickerEditor.prototype.updateElementContent = function () {
                var divID = this.element.attr('id');
                var inputID = 'clpkr' + this.uniqueName;
                this.element.append('<input type="text" class="editor flexify" id="' + inputID + '" /><span class="inplace-button input-group-addon" style="padding-top: 5px; padding-left: 3px; border-radius: 4px"><i></i></span>');
                this.element.append("<script>" +
                    "$('#" + divID + "').colorpicker({" +
                    "autoInputFallback: false" +
                    "});" +
                    "</script>");
            };
            Object.defineProperty(ColorPickerEditor.prototype, "value", {
                get: function () {
                    return $('#clpkr' + this.uniqueName).val();
                },
                set: function (value) {
                    if (value != undefined) {
                        var pick = this.element.data('colorpicker');
                        pick.color.setColor(value);
                        $('#clpkr' + this.uniqueName).val(pick.update());
                    }
                },
                enumerable: true,
                configurable: true
            });
            ColorPickerEditor.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            ColorPickerEditor.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            ColorPickerEditor = __decorate([
                Serenity.Decorators.element("<div style='display: flex' />"),
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], ColorPickerEditor);
            return ColorPickerEditor;
        }(Serenity.Widget));
        Common.ColorPickerEditor = ColorPickerEditor;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = PGMS.DialogUtils || (PGMS.DialogUtils = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    PGMS.StaticTextBlock = StaticTextBlock;
})(PGMS || (PGMS = {}));
var Serenity;
(function (Serenity) {
    var TabsExtensions;
    (function (TabsExtensions) {
        function setCounter(grid, totalCount, tabKey) {
            var tabs = grid.closest(".ui-tabs");
            var indexByKey = Serenity.TabsExtensions.indexByKey(tabs);
            var tabTitle = $(tabs.find("li[role='tab']")[indexByKey[tabKey]]).find('span');
            var leftParenthesesPosition = tabTitle.text().indexOf('(');
            var rightParenthesesPosition = tabTitle.text().indexOf(')');
            if (leftParenthesesPosition != -1 && rightParenthesesPosition != -1) {
                // counter already exists
                if (totalCount > 0) {
                    var prevCounter = tabTitle.text().substring(leftParenthesesPosition + 1, rightParenthesesPosition);
                    tabTitle.text(tabTitle.text().replace(prevCounter, totalCount.toString()));
                }
                else {
                    tabTitle.text(tabTitle.text().substring(0, leftParenthesesPosition - 1));
                }
            }
            else {
                // counter not exists
                if (totalCount > 0)
                    tabTitle.text(tabTitle.text() + ' (' + totalCount + ')');
            }
        }
        TabsExtensions.setCounter = setCounter;
    })(TabsExtensions = Serenity.TabsExtensions || (Serenity.TabsExtensions = {}));
})(Serenity || (Serenity = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = PGMS.Common || (PGMS.Common = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsDialog = /** @class */ (function (_super) {
            __extends(AccountAttachmentsDialog, _super);
            function AccountAttachmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.AccountAttachmentsForm(_this.idPrefix);
                return _this;
            }
            AccountAttachmentsDialog.prototype.getFormKey = function () { return Erp.AccountAttachmentsForm.formKey; };
            AccountAttachmentsDialog.prototype.getIdProperty = function () { return Erp.AccountAttachmentsRow.idProperty; };
            AccountAttachmentsDialog.prototype.getLocalTextPrefix = function () { return Erp.AccountAttachmentsRow.localTextPrefix; };
            AccountAttachmentsDialog.prototype.getNameProperty = function () { return Erp.AccountAttachmentsRow.nameProperty; };
            AccountAttachmentsDialog.prototype.getService = function () { return Erp.AccountAttachmentsService.baseUrl; };
            AccountAttachmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountAttachmentsDialog);
            return AccountAttachmentsDialog;
        }(Serenity.EntityDialog));
        Erp.AccountAttachmentsDialog = AccountAttachmentsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsGrid = /** @class */ (function (_super) {
            __extends(AccountAttachmentsGrid, _super);
            function AccountAttachmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountAttachmentsGrid.prototype.getColumnsKey = function () { return 'Erp.AccountAttachments'; };
            AccountAttachmentsGrid.prototype.getDialogType = function () { return Erp.AccountAttachmentsDialog; };
            AccountAttachmentsGrid.prototype.getIdProperty = function () { return Erp.AccountAttachmentsRow.idProperty; };
            AccountAttachmentsGrid.prototype.getLocalTextPrefix = function () { return Erp.AccountAttachmentsRow.localTextPrefix; };
            AccountAttachmentsGrid.prototype.getService = function () { return Erp.AccountAttachmentsService.baseUrl; };
            AccountAttachmentsGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
                return listResponse;
            };
            AccountAttachmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountAttachmentsGrid);
            return AccountAttachmentsGrid;
        }(Serenity.EntityGrid));
        Erp.AccountAttachmentsGrid = AccountAttachmentsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../AccountAttachments/AccountAttachmentsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsExtendedDialog = /** @class */ (function (_super) {
            __extends(AccountAttachmentsExtendedDialog, _super);
            function AccountAttachmentsExtendedDialog() {
                return _super.call(this) || this;
            }
            AccountAttachmentsExtendedDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.AccountId, true); 
            };
            AccountAttachmentsExtendedDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountAttachmentsExtendedDialog);
            return AccountAttachmentsExtendedDialog;
        }(Erp.AccountAttachmentsDialog));
        Erp.AccountAttachmentsExtendedDialog = AccountAttachmentsExtendedDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../AccountAttachments/AccountAttachmentsDialog.ts"/>
///<reference path="./../AccountAttachments/AccountAttachmentsGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountAttachmentsExtendedGrid = /** @class */ (function (_super) {
            __extends(AccountAttachmentsExtendedGrid, _super);
            function AccountAttachmentsExtendedGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountAttachmentsExtendedGrid.prototype.getDialogType = function () { return Erp.AccountAttachmentsExtendedDialog; };
            AccountAttachmentsExtendedGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            AccountAttachmentsExtendedGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            AccountAttachmentsExtendedGrid.prototype.addButtonClick = function () {
                this.editItem({ AccountId: this.accountId });
            };
            AccountAttachmentsExtendedGrid.prototype.getInitialTitle = function () {
                return null;
            };
            AccountAttachmentsExtendedGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.accountId;
            };
            Object.defineProperty(AccountAttachmentsExtendedGrid.prototype, "accountId", {
                get: function () {
                    return this._accountId;
                },
                set: function (value) {
                    if (this._accountId !== value) {
                        this._accountId = value;
                        this.setEquality('AccountId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AccountAttachmentsExtendedGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountAttachmentsExtendedGrid);
            return AccountAttachmentsExtendedGrid;
        }(Erp.AccountAttachmentsGrid));
        Erp.AccountAttachmentsExtendedGrid = AccountAttachmentsExtendedGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersDialog = /** @class */ (function (_super) {
            __extends(OrdersDialog, _super);
            function OrdersDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.OrdersForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                _this.attachmentsGrid = new Erp.OrderAttachmentsExtendedGrid(_this.byId("AttachmentsPropertyGrid"));
                _this.attachmentsGrid.openDialogsAsPanel = false;
                _this.attachmentsGrid.element.flexHeightOnly(1);
                _this.expensesGrid = new Erp.OrderExpensesGrid(_this.byId("ExpensesPropertyGrid"));
                _this.expensesGrid.element.flexHeightOnly(1);
                _this.expensesGrid.openDialogsAsPanel = false;
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            OrdersDialog.prototype.getFormKey = function () { return Erp.OrdersForm.formKey; };
            OrdersDialog.prototype.getIdProperty = function () { return Erp.OrdersRow.idProperty; };
            OrdersDialog.prototype.getLocalTextPrefix = function () { return Erp.OrdersRow.localTextPrefix; };
            OrdersDialog.prototype.getNameProperty = function () { return Erp.OrdersRow.nameProperty; };
            OrdersDialog.prototype.getService = function () { return Erp.OrdersService.baseUrl; };
            OrdersDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' ' + Q.tryGetText("Site.Orders.CloneNameSuffix");
                if (!Q.endsWith(clone.Name || '', suffix)) {
                    clone.Name = (clone.Name || '') + suffix;
                }
                clone.NoteList = [];
                return clone;
            };
            OrdersDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            OrdersDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Expenses', this.isNewOrDeleted());
                if (this.isNew()) {
                    var date = new Date();
                    date.setDate(date.getDate() + 2);
                    this.form.DeadLine.value = date.toISOString();
                }
                this.attachmentsGrid.orderId = entity.OrderId;
                this.expensesGrid.orderId = entity.OrderId;
                this.expensesGrid.accountId = entity.AccountId;
            };
            OrdersDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            OrdersDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            OrdersDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], OrdersDialog);
            return OrdersDialog;
        }(Serenity.EntityDialog));
        Erp.OrdersDialog = OrdersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Orders/OrdersDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountOrdersDialog = /** @class */ (function (_super) {
            __extends(AccountOrdersDialog, _super);
            function AccountOrdersDialog() {
                return _super.call(this) || this;
            }
            AccountOrdersDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.AccountId, true);
            };
            AccountOrdersDialog = __decorate([
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], AccountOrdersDialog);
            return AccountOrdersDialog;
        }(Erp.OrdersDialog));
        Erp.AccountOrdersDialog = AccountOrdersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersGrid = /** @class */ (function (_super) {
            __extends(OrdersGrid, _super);
            function OrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            OrdersGrid.prototype.getColumnsKey = function () { return 'Erp.Orders'; };
            OrdersGrid.prototype.getDialogType = function () { return Erp.OrdersDialog; };
            OrdersGrid.prototype.getIdProperty = function () { return Erp.OrdersRow.idProperty; };
            OrdersGrid.prototype.getLocalTextPrefix = function () { return Erp.OrdersRow.localTextPrefix; };
            OrdersGrid.prototype.getService = function () { return Erp.OrdersService.baseUrl; };
            OrdersGrid.prototype.getIsActiveProperty = function () { return Erp.OrdersRow.isActiveProperty; };
            OrdersGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Orders');
                return listResponse;
            };
            OrdersGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            OrdersGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                var filter = Q.first(filters, function (x) { return x.field == "OrderStatusId" /* OrderStatusId */; });
                filter.title = Q.tryGetText("Site.OrderStatusNotEqualTo");
                filter.cssClass = "order-status-id";
                filter.handler = function (h) {
                    // if filter is active, e.g. editor has some value
                    if (h.active) {
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["OrderStatusId" /* OrderStatusId */], 'not in', [h.value]]);
                    }
                };
                return filters;
            };
            OrdersGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Total'),
                        new Slick.Aggregators.Sum('PaymentsTotal')
                    ]
                });
                return grid;
            };
            OrdersGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            OrdersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.OrdersService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                buttons.push({
                    title: text + Q.text("Db.Erp.Accounts.EntitySingular"),
                    cssClass: 'expand-all-button',
                    separator: true,
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'AccountName'
                        }
                    ]); }
                });
                //buttons.push({
                //    title: text + Q.text("Db.Erp.Companies.EntitySingular"),
                //    cssClass: 'expand-all-button',
                //    onClick: () => this.view.setGrouping(
                //        [
                //            {
                //                getter: 'CompanyName'
                //            }
                //        ])
                //});
                buttons.push({
                    title: text + Q.text("Db.Erp.OrderStatuses.EntitySingular"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'OrderStatusName'
                        }
                    ]); }
                });
                buttons.push({
                    title: Q.text("Site.NoGroupingButton"),
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
                //return [{
                //    title: 'Group By Account Name',
                //        cssClass: 'expand-all-button',
                //        onClick: () => this.view.setGrouping(
                //            [{
                //                getter: 'AccountName'
                //            }])
                //}, {
                //        title: 'Group By Company Name',
                //        cssClass: 'expand-all-button',
                //        onClick: () => this.view.setGrouping(
                //            [{
                //                getter: 'CompanyName'
                //            }])
                //    },
                //    //{
                //    //    title: 'Group By Category and Supplier',
                //    //    cssClass: 'expand-all-button',
                //    //    onClick: () => this.view.setGrouping(
                //    //        [{
                //    //            formatter: x => 'Category: ' + x.value + ' (' + x.count + ' items)',
                //    //            getter: 'CategoryName'
                //    //        }, {
                //    //            formatter: x => 'Supplier: ' + x.value + ' (' + x.count + ' items)',
                //    //            getter: 'SupplierCompanyName'
                //    //        }])
                //    //},
                //    {
                //        title: 'No Grouping',
                //        cssClass: 'collapse-all-button',
                //        onClick: () => this.view.setGrouping([])
                //    }];
            };
            OrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrdersGrid);
            return OrdersGrid;
        }(Serenity.EntityGrid));
        Erp.OrdersGrid = OrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Orders/OrdersGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountOrdersGrid = /** @class */ (function (_super) {
            __extends(AccountOrdersGrid, _super);
            function AccountOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountOrdersGrid.prototype.getDialogType = function () { return Erp.AccountOrdersDialog; };
            AccountOrdersGrid.prototype.getColumnsKey = function () {
                return "Erp.AccountOrders";
            };
            AccountOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            AccountOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            AccountOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ AccountId: this.accountId });
            };
            AccountOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            AccountOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.accountId;
            };
            Object.defineProperty(AccountOrdersGrid.prototype, "accountId", {
                get: function () {
                    return this._accountId;
                },
                set: function (value) {
                    if (this._accountId !== value) {
                        this._accountId = value;
                        this.setEquality('AccountId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AccountOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountOrdersGrid);
            return AccountOrdersGrid;
        }(Erp.OrdersGrid));
        Erp.AccountOrdersGrid = AccountOrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrdersDialog = /** @class */ (function (_super) {
            __extends(OutsideOrdersDialog, _super);
            function OutsideOrdersDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.OutsideOrdersForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                _this.attachmentsGrid = new Erp.OutsideOrderAttachmentsExtendedGrid(_this.byId("AttachmentsPropertyGrid"));
                _this.attachmentsGrid.openDialogsAsPanel = false;
                _this.attachmentsGrid.element.flexHeightOnly(1);
                _this.expensesGrid = new Erp.OutsideOrderExpensesGrid(_this.byId("ExpensesPropertyGrid"));
                _this.expensesGrid.element.flexHeightOnly(1);
                _this.expensesGrid.openDialogsAsPanel = false;
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            OutsideOrdersDialog.prototype.getFormKey = function () { return Erp.OutsideOrdersForm.formKey; };
            OutsideOrdersDialog.prototype.getIdProperty = function () { return Erp.OutsideOrdersRow.idProperty; };
            OutsideOrdersDialog.prototype.getLocalTextPrefix = function () { return Erp.OutsideOrdersRow.localTextPrefix; };
            OutsideOrdersDialog.prototype.getNameProperty = function () { return Erp.OutsideOrdersRow.nameProperty; };
            OutsideOrdersDialog.prototype.getService = function () { return Erp.OutsideOrdersService.baseUrl; };
            OutsideOrdersDialog.prototype.getCloningEntity = function () {
                var clone = _super.prototype.getCloningEntity.call(this);
                // add (Clone) suffix if it's not already added
                var suffix = ' ' + Q.tryGetText("Site.OutsideOrders.CloneNameSuffix");
                if (!Q.endsWith(clone.Name || '', suffix)) {
                    clone.Name = (clone.Name || '') + suffix;
                }
                clone.NoteList = [];
                return clone;
            };
            OutsideOrdersDialog.prototype.updateInterface = function () {
                // by default cloneButton is hidden in base UpdateInterface method
                _super.prototype.updateInterface.call(this);
                // here we show it if it is edit mode (not new)
                this.cloneButton.toggle(this.isEditMode());
            };
            OutsideOrdersDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Expenses', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
                this.attachmentsGrid.outsideOrderId = entity.OutsideOrderId;
                this.expensesGrid.outsideOrderId = entity.OutsideOrderId;
                this.expensesGrid.accountId = entity.AccountRepresentsId;
                if (this.isNew()) {
                    var date = new Date();
                    date.setDate(date.getDate() + 2);
                    this.form.DeadLine.value = date.toISOString();
                }
            };
            OutsideOrdersDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            OutsideOrdersDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            OutsideOrdersDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], OutsideOrdersDialog);
            return OutsideOrdersDialog;
        }(Serenity.EntityDialog));
        Erp.OutsideOrdersDialog = OutsideOrdersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../OutsideOrders/OutsideOrdersDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountOutsideOrdersDialog = /** @class */ (function (_super) {
            __extends(AccountOutsideOrdersDialog, _super);
            function AccountOutsideOrdersDialog() {
                return _super.call(this) || this;
            }
            AccountOutsideOrdersDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.AccountRepresentsId, true);
            };
            AccountOutsideOrdersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountOutsideOrdersDialog);
            return AccountOutsideOrdersDialog;
        }(Erp.OutsideOrdersDialog));
        Erp.AccountOutsideOrdersDialog = AccountOutsideOrdersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrdersGrid = /** @class */ (function (_super) {
            __extends(OutsideOrdersGrid, _super);
            function OutsideOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            OutsideOrdersGrid.prototype.getColumnsKey = function () { return 'Erp.OutsideOrders'; };
            OutsideOrdersGrid.prototype.getDialogType = function () { return Erp.OutsideOrdersDialog; };
            OutsideOrdersGrid.prototype.getIdProperty = function () { return Erp.OutsideOrdersRow.idProperty; };
            OutsideOrdersGrid.prototype.getLocalTextPrefix = function () { return Erp.OutsideOrdersRow.localTextPrefix; };
            OutsideOrdersGrid.prototype.getService = function () { return Erp.OutsideOrdersService.baseUrl; };
            OutsideOrdersGrid.prototype.getIsActiveProperty = function () { return Erp.OutsideOrdersRow.isActiveProperty; };
            OutsideOrdersGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'OutsideOrders');
                return listResponse;
            };
            OutsideOrdersGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            OutsideOrdersGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class, e.g. columns
                var filters = _super.prototype.getQuickFilters.call(this);
                var filter = Q.tryFirst(filters, function (x) { return x.field == "OrderStatusId" /* OrderStatusId */; });
                if (filter != null) {
                    filter.title = Q.tryGetText("Site.OrderStatusNotEqualTo");
                    filter.cssClass = "order-status-id";
                    filter.handler = function (h) {
                        // if filter is active, e.g. editor has some value
                        if (h.active) {
                            h.request.Criteria = Serenity.Criteria.and(h.request.Criteria, [["OrderStatusId" /* OrderStatusId */], 'not in', [h.value]]);
                        }
                    };
                }
                return filters;
            };
            OutsideOrdersGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('PriceTheyOffer'),
                        new Slick.Aggregators.Sum('PriceWeSell'),
                        new Slick.Aggregators.Sum('PaymentsTotal')
                    ]
                });
                return grid;
            };
            OutsideOrdersGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            OutsideOrdersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.OutsideOrdersService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                buttons.push({
                    title: text + Q.text("Db.Erp.Accounts.EntitySingular"),
                    separator: true,
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'AccountRepresentsName'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Erp.Companies.EntitySingular"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'CompanyRepresentsName'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Erp.OrderStatuses.EntitySingular"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'OrderStatusName'
                        }
                    ]); }
                });
                buttons.push({
                    title: Q.text("Site.NoGroupingButton"),
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            OutsideOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrdersGrid);
            return OutsideOrdersGrid;
        }(Serenity.EntityGrid));
        Erp.OutsideOrdersGrid = OutsideOrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../OutsideOrders/OutsideOrdersGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountOutsideOrdersGrid = /** @class */ (function (_super) {
            __extends(AccountOutsideOrdersGrid, _super);
            function AccountOutsideOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountOutsideOrdersGrid.prototype.getDialogType = function () { return Erp.AccountOutsideOrdersDialog; };
            AccountOutsideOrdersGrid.prototype.getColumnsKey = function () {
                return "Erp.AccountOutsideOrders";
            };
            AccountOutsideOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            AccountOutsideOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            AccountOutsideOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ AccountRepresentsId: this.accountRepresentsId });
            };
            AccountOutsideOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            AccountOutsideOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.accountRepresentsId;
            };
            Object.defineProperty(AccountOutsideOrdersGrid.prototype, "accountRepresentsId", {
                get: function () {
                    return this._accountRepresentsId;
                },
                set: function (value) {
                    if (this._accountRepresentsId !== value) {
                        this._accountRepresentsId = value;
                        this.setEquality('AccountRepresentsId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AccountOutsideOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountOutsideOrdersGrid);
            return AccountOutsideOrdersGrid;
        }(Erp.OutsideOrdersGrid));
        Erp.AccountOutsideOrdersGrid = AccountOutsideOrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsDialog = /** @class */ (function (_super) {
            __extends(AccountsDialog, _super);
            function AccountsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.AccountsForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                _this.attachmentsGrid = new Erp.AccountAttachmentsExtendedGrid(_this.byId("AttachmentsPropertyGrid"));
                _this.attachmentsGrid.openDialogsAsPanel = false;
                _this.attachmentsGrid.element.flexHeightOnly(1);
                _this.accountOrdersGrid = new Erp.AccountOrdersGrid(_this.byId("OrdersPropertyGrid"));
                _this.accountOrdersGrid.openDialogsAsPanel = false;
                _this.accountOrdersGrid.element.flexHeightOnly(1);
                _this.accountOutsideOrdersGrid = new Erp.AccountOutsideOrdersGrid(_this.byId("OutsideOrdersPropertyGrid"));
                _this.accountOutsideOrdersGrid.openDialogsAsPanel = false;
                _this.accountOutsideOrdersGrid.element.flexHeightOnly(1);
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            AccountsDialog.prototype.getFormKey = function () { return Erp.AccountsForm.formKey; };
            AccountsDialog.prototype.getIdProperty = function () { return Erp.AccountsRow.idProperty; };
            AccountsDialog.prototype.getLocalTextPrefix = function () { return Erp.AccountsRow.localTextPrefix; };
            AccountsDialog.prototype.getNameProperty = function () { return Erp.AccountsRow.nameProperty; };
            AccountsDialog.prototype.getService = function () { return Erp.AccountsService.baseUrl; };
            AccountsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'OutsideOrders', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                this.attachmentsGrid.accountId = entity.AccountId;
                this.accountOrdersGrid.accountId = entity.AccountId;
                this.accountOutsideOrdersGrid.accountRepresentsId = entity.AccountId;
            };
            AccountsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            AccountsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            AccountsDialog = __decorate([
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], AccountsDialog);
            return AccountsDialog;
        }(Serenity.EntityDialog));
        Erp.AccountsDialog = AccountsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountFormatter = /** @class */ (function () {
            function AccountFormatter() {
            }
            AccountFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.isVipProperty) {
                    return text;
                }
                var _isVipProperty = ctx.item[this.isVipProperty];
                if (_isVipProperty == 1)
                    return "<div style='height:100%; background-color: #FF8630;' >" + text + '</div>';
                else
                    return text;
            };
            AccountFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.isVipProperty)
                    column.referencedFields.push(this.isVipProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], AccountFormatter.prototype, "isVipProperty", void 0);
            AccountFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], AccountFormatter);
            return AccountFormatter;
        }());
        Erp.AccountFormatter = AccountFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsGrid = /** @class */ (function (_super) {
            __extends(AccountsGrid, _super);
            function AccountsGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountsGrid.prototype.getColumnsKey = function () { return 'Erp.Accounts'; };
            AccountsGrid.prototype.getDialogType = function () { return Erp.AccountsDialog; };
            AccountsGrid.prototype.getIdProperty = function () { return Erp.AccountsRow.idProperty; };
            AccountsGrid.prototype.getLocalTextPrefix = function () { return Erp.AccountsRow.localTextPrefix; };
            AccountsGrid.prototype.getService = function () { return Erp.AccountsService.baseUrl; };
            AccountsGrid.prototype.getIsActiveProperty = function () { return Erp.AccountsRow.isActiveProperty; };
            AccountsGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            AccountsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.AccountsService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            AccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountsGrid);
            return AccountsGrid;
        }(Serenity.EntityGrid));
        Erp.AccountsGrid = AccountsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var AccountsListFormatter = /** @class */ (function () {
            function AccountsListFormatter() {
            }
            AccountsListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Erp.AccountsRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.Name : x); }).join(", ");
            };
            AccountsListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], AccountsListFormatter);
            return AccountsListFormatter;
        }());
        Erp.AccountsListFormatter = AccountsListFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesDialog = /** @class */ (function (_super) {
            __extends(ExpensesDialog, _super);
            function ExpensesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.ExpensesForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                _this.attachmentsGrid = new Erp.ExpensesAttachmentsExtendedGrid(_this.byId("AttachmentsPropertyGrid"));
                _this.attachmentsGrid.openDialogsAsPanel = false;
                _this.attachmentsGrid.element.flexHeightOnly(1);
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ExpensesDialog.prototype.getFormKey = function () { return Erp.ExpensesForm.formKey; };
            ExpensesDialog.prototype.getIdProperty = function () { return Erp.ExpensesRow.idProperty; };
            ExpensesDialog.prototype.getLocalTextPrefix = function () { return Erp.ExpensesRow.localTextPrefix; };
            ExpensesDialog.prototype.getNameProperty = function () { return Erp.ExpensesRow.nameProperty; };
            ExpensesDialog.prototype.getService = function () { return Erp.ExpensesService.baseUrl; };
            ExpensesDialog.prototype.loadEntity = function (entity) {
                var _this = this;
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Attachments', this.isNewOrDeleted());
                this.attachmentsGrid.expenseId = entity.ExpenseId;
                var budgetsRowItems = Erp.BudgetsRow.getLookup().items;
                console.log(budgetsRowItems);
                if (!this.isEditMode()) {
                    budgetsRowItems =
                        budgetsRowItems.filter(function (s) { return new Date(s.StartDate) <= new Date() &&
                            new Date(s.EndDate) >= new Date(); });
                    this.form.BudgetId.items = [];
                    budgetsRowItems.forEach(function (s) {
                        _this.form.BudgetId.addOption(s.BudgetId + "", s.Name);
                        //Q.addOption(this.form.BudgetId.element, s.BudgetId + "", s.Name);
                    });
                    //this.form.BudgetId.items.filter(s => s.StartDate <= startDate.toString() &&
                    //    s.EndDate >= endDate.toString());
                }
                //else {
                //    this.form.BudgetId.items = [];
                //    budgetsRowItems.forEach(s => {
                //        Q.addOption(this.form.BudgetId.element, s.BudgetId + "", s.Name);
                //    });
                //}
            };
            ExpensesDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            ExpensesDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ExpensesDialog = __decorate([
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], ExpensesDialog);
            return ExpensesDialog;
        }(Serenity.EntityDialog));
        Erp.ExpensesDialog = ExpensesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Expenses/ExpensesDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetExpensesDialog = /** @class */ (function (_super) {
            __extends(BudgetExpensesDialog, _super);
            function BudgetExpensesDialog() {
                return _super.call(this) || this;
            }
            BudgetExpensesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.BudgetId, true);
            };
            BudgetExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BudgetExpensesDialog);
            return BudgetExpensesDialog;
        }(Erp.ExpensesDialog));
        Erp.BudgetExpensesDialog = BudgetExpensesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesGrid = /** @class */ (function (_super) {
            __extends(ExpensesGrid, _super);
            function ExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesGrid.prototype.getColumnsKey = function () { return 'Erp.Expenses'; };
            ExpensesGrid.prototype.getDialogType = function () { return Erp.ExpensesDialog; };
            ExpensesGrid.prototype.getIdProperty = function () { return Erp.ExpensesRow.idProperty; };
            ExpensesGrid.prototype.getLocalTextPrefix = function () { return Erp.ExpensesRow.localTextPrefix; };
            ExpensesGrid.prototype.getService = function () { return Erp.ExpensesService.baseUrl; };
            ExpensesGrid.prototype.getIsActiveProperty = function () { return Erp.ExpensesRow.isActiveProperty; };
            ExpensesGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            ExpensesGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Expenses');
                return listResponse;
            };
            ExpensesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Total')
                    ]
                });
                return grid;
            };
            ExpensesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            ExpensesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.ExpensesService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                buttons.push({
                    title: text + Q.text("Db.Erp.Budgets.EntitySingular"),
                    separator: true,
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'BudgetName'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Erp.Expenses.AccountName"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'AccountName'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Administration.User.EntitySingular"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'UserUsername'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Erp.Expenses.TransactionType"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'TransactionType'
                        }
                    ]); }
                });
                buttons.push({
                    title: text + Q.text("Db.Erp.PaymentTypes.EntitySingular"),
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([
                        {
                            formatter: function (x) { return x.value + ' (' + x.count + ' ' + Q.text("Site.GroupByButtonFormatter") + ')'; },
                            getter: 'PaymentTypeName'
                        }
                    ]); }
                });
                buttons.push({
                    title: Q.text("Site.NoGroupingButton"),
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            ExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesGrid);
            return ExpensesGrid;
        }(Serenity.EntityGrid));
        Erp.ExpensesGrid = ExpensesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Expenses/ExpensesGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetExpensesGrid = /** @class */ (function (_super) {
            __extends(BudgetExpensesGrid, _super);
            function BudgetExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            BudgetExpensesGrid.prototype.getDialogType = function () { return Erp.BudgetExpensesDialog; };
            BudgetExpensesGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "BudgetName" /* BudgetName */; });
            };
            BudgetExpensesGrid.prototype.getQuickFilters = function () {
                // get quick filter list from base class
                var filters = _super.prototype.getQuickFilters.call(this);
                var filtersNew = [];
                filtersNew.push(Q.first(filters, function (x) { return x.field == "TransactionDate" /* TransactionDate */; }));
                return filtersNew;
            };
            BudgetExpensesGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            BudgetExpensesGrid.prototype.addButtonClick = function () {
                this.editItem({ BudgetId: this.budgetId });
            };
            BudgetExpensesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            BudgetExpensesGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.budgetId;
            };
            Object.defineProperty(BudgetExpensesGrid.prototype, "budgetId", {
                get: function () {
                    return this._budgetId;
                },
                set: function (value) {
                    if (this._budgetId !== value) {
                        this._budgetId = value;
                        this.setEquality('BudgetId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            BudgetExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BudgetExpensesGrid);
            return BudgetExpensesGrid;
        }(Erp.ExpensesGrid));
        Erp.BudgetExpensesGrid = BudgetExpensesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetsDialog = /** @class */ (function (_super) {
            __extends(BudgetsDialog, _super);
            function BudgetsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.BudgetsForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                _this.budgetExpensesGrid = new Erp.BudgetExpensesGrid(_this.byId("BudgetExpensesPropertyGrid"));
                _this.budgetExpensesGrid.element.flexHeightOnly(1);
                _this.budgetExpensesGrid.openDialogsAsPanel = false;
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            BudgetsDialog.prototype.getFormKey = function () { return Erp.BudgetsForm.formKey; };
            BudgetsDialog.prototype.getIdProperty = function () { return Erp.BudgetsRow.idProperty; };
            BudgetsDialog.prototype.getLocalTextPrefix = function () { return Erp.BudgetsRow.localTextPrefix; };
            BudgetsDialog.prototype.getNameProperty = function () { return Erp.BudgetsRow.nameProperty; };
            BudgetsDialog.prototype.getService = function () { return Erp.BudgetsService.baseUrl; };
            BudgetsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'BudgetExpenses', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                this.budgetExpensesGrid.budgetId = entity.BudgetId;
            };
            BudgetsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            BudgetsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            BudgetsDialog = __decorate([
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.responsive(),
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], BudgetsDialog);
            return BudgetsDialog;
        }(Serenity.EntityDialog));
        Erp.BudgetsDialog = BudgetsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var BudgetsGrid = /** @class */ (function (_super) {
            __extends(BudgetsGrid, _super);
            function BudgetsGrid(container) {
                return _super.call(this, container) || this;
            }
            BudgetsGrid.prototype.getColumnsKey = function () { return 'Erp.Budgets'; };
            BudgetsGrid.prototype.getDialogType = function () { return Erp.BudgetsDialog; };
            BudgetsGrid.prototype.getIdProperty = function () { return Erp.BudgetsRow.idProperty; };
            BudgetsGrid.prototype.getLocalTextPrefix = function () { return Erp.BudgetsRow.localTextPrefix; };
            BudgetsGrid.prototype.getService = function () { return Erp.BudgetsService.baseUrl; };
            BudgetsGrid.prototype.getIsActiveProperty = function () { return Erp.BudgetsRow.isActiveProperty; };
            BudgetsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.BudgetsService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            BudgetsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BudgetsGrid);
            return BudgetsGrid;
        }(Serenity.EntityGrid));
        Erp.BudgetsGrid = BudgetsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesDialog = /** @class */ (function (_super) {
            __extends(CompaniesDialog, _super);
            function CompaniesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.CompaniesForm(_this.idPrefix);
                return _this;
            }
            CompaniesDialog.prototype.getFormKey = function () { return Erp.CompaniesForm.formKey; };
            CompaniesDialog.prototype.getIdProperty = function () { return Erp.CompaniesRow.idProperty; };
            CompaniesDialog.prototype.getLocalTextPrefix = function () { return Erp.CompaniesRow.localTextPrefix; };
            CompaniesDialog.prototype.getNameProperty = function () { return Erp.CompaniesRow.nameProperty; };
            CompaniesDialog.prototype.getService = function () { return Erp.CompaniesService.baseUrl; };
            CompaniesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CompaniesDialog);
            return CompaniesDialog;
        }(Serenity.EntityDialog));
        Erp.CompaniesDialog = CompaniesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesGrid = /** @class */ (function (_super) {
            __extends(CompaniesGrid, _super);
            function CompaniesGrid(container) {
                return _super.call(this, container) || this;
            }
            CompaniesGrid.prototype.getColumnsKey = function () { return 'Erp.Companies'; };
            CompaniesGrid.prototype.getDialogType = function () { return Erp.CompaniesDialog; };
            CompaniesGrid.prototype.getIdProperty = function () { return Erp.CompaniesRow.idProperty; };
            CompaniesGrid.prototype.getLocalTextPrefix = function () { return Erp.CompaniesRow.localTextPrefix; };
            CompaniesGrid.prototype.getService = function () { return Erp.CompaniesService.baseUrl; };
            CompaniesGrid.prototype.getIsActiveProperty = function () { return Erp.CompaniesRow.isActiveProperty; };
            CompaniesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.CompaniesService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            CompaniesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CompaniesGrid);
            return CompaniesGrid;
        }(Serenity.EntityGrid));
        Erp.CompaniesGrid = CompaniesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var CompaniesListFormatter = /** @class */ (function () {
            function CompaniesListFormatter() {
            }
            CompaniesListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Erp.CompaniesRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.Name : x); }).join(", ");
            };
            CompaniesListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], CompaniesListFormatter);
            return CompaniesListFormatter;
        }());
        Erp.CompaniesListFormatter = CompaniesListFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsDialog = /** @class */ (function (_super) {
            __extends(ExpensesAttachmentsDialog, _super);
            function ExpensesAttachmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.ExpensesAttachmentsForm(_this.idPrefix);
                return _this;
            }
            ExpensesAttachmentsDialog.prototype.getFormKey = function () { return Erp.ExpensesAttachmentsForm.formKey; };
            ExpensesAttachmentsDialog.prototype.getIdProperty = function () { return Erp.ExpensesAttachmentsRow.idProperty; };
            ExpensesAttachmentsDialog.prototype.getLocalTextPrefix = function () { return Erp.ExpensesAttachmentsRow.localTextPrefix; };
            ExpensesAttachmentsDialog.prototype.getNameProperty = function () { return Erp.ExpensesAttachmentsRow.nameProperty; };
            ExpensesAttachmentsDialog.prototype.getService = function () { return Erp.ExpensesAttachmentsService.baseUrl; };
            ExpensesAttachmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesAttachmentsDialog);
            return ExpensesAttachmentsDialog;
        }(Serenity.EntityDialog));
        Erp.ExpensesAttachmentsDialog = ExpensesAttachmentsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../ExpensesAttachments/ExpensesAttachmentsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsExtendedDialog = /** @class */ (function (_super) {
            __extends(ExpensesAttachmentsExtendedDialog, _super);
            function ExpensesAttachmentsExtendedDialog() {
                return _super.call(this) || this;
            }
            ExpensesAttachmentsExtendedDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.ExpenseId, true);
            };
            ExpensesAttachmentsExtendedDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesAttachmentsExtendedDialog);
            return ExpensesAttachmentsExtendedDialog;
        }(Erp.ExpensesAttachmentsDialog));
        Erp.ExpensesAttachmentsExtendedDialog = ExpensesAttachmentsExtendedDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsGrid = /** @class */ (function (_super) {
            __extends(ExpensesAttachmentsGrid, _super);
            function ExpensesAttachmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesAttachmentsGrid.prototype.getColumnsKey = function () { return 'Erp.ExpensesAttachments'; };
            ExpensesAttachmentsGrid.prototype.getDialogType = function () { return Erp.ExpensesAttachmentsDialog; };
            ExpensesAttachmentsGrid.prototype.getIdProperty = function () { return Erp.ExpensesAttachmentsRow.idProperty; };
            ExpensesAttachmentsGrid.prototype.getLocalTextPrefix = function () { return Erp.ExpensesAttachmentsRow.localTextPrefix; };
            ExpensesAttachmentsGrid.prototype.getService = function () { return Erp.ExpensesAttachmentsService.baseUrl; };
            ExpensesAttachmentsGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
                return listResponse;
            };
            ExpensesAttachmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesAttachmentsGrid);
            return ExpensesAttachmentsGrid;
        }(Serenity.EntityGrid));
        Erp.ExpensesAttachmentsGrid = ExpensesAttachmentsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../ExpensesAttachments/ExpensesAttachmentsDialog.ts"/>
///<reference path="./../ExpensesAttachments/ExpensesAttachmentsGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ExpensesAttachmentsExtendedGrid = /** @class */ (function (_super) {
            __extends(ExpensesAttachmentsExtendedGrid, _super);
            function ExpensesAttachmentsExtendedGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesAttachmentsExtendedGrid.prototype.getDialogType = function () { return Erp.ExpensesAttachmentsExtendedDialog; };
            ExpensesAttachmentsExtendedGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            ExpensesAttachmentsExtendedGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            ExpensesAttachmentsExtendedGrid.prototype.addButtonClick = function () {
                this.editItem({ ExpenseId: this.expenseId });
            };
            ExpensesAttachmentsExtendedGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ExpensesAttachmentsExtendedGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.expenseId;
            };
            Object.defineProperty(ExpensesAttachmentsExtendedGrid.prototype, "expenseId", {
                get: function () {
                    return this._expenseId;
                },
                set: function (value) {
                    if (this._expenseId !== value) {
                        this._expenseId = value;
                        this.setEquality('ExpenseId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ExpensesAttachmentsExtendedGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesAttachmentsExtendedGrid);
            return ExpensesAttachmentsExtendedGrid;
        }(Erp.ExpensesAttachmentsGrid));
        Erp.ExpensesAttachmentsExtendedGrid = ExpensesAttachmentsExtendedGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var TransactionTypeFormatter = /** @class */ (function () {
            function TransactionTypeFormatter() {
            }
            TransactionTypeFormatter.prototype.format = function (ctx) {
                if (ctx.value === 1)
                    return "<div style='height:100%; background-color: #FF6E6E;' >" + Q.tryGetText("Enums.PGMS.Erp.Entities.TransactionType.Expense") + '</div>';
                else
                    return "<div style='height:100%; background-color: #57F777;' >" + Q.tryGetText("Enums.PGMS.Erp.Entities.TransactionType.Income") + '</div>';
            };
            TransactionTypeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
            ], TransactionTypeFormatter);
            return TransactionTypeFormatter;
        }());
        Erp.TransactionTypeFormatter = TransactionTypeFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'), { rows: 25 });
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Erp.NoteDialog = NoteDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    // Notes counter in Tabs 
                    Serenity.TabsExtensions.setCounter(this.element, this.items.length, 'Notes');
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Erp.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: PGMS.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Erp.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Erp.NotesEditor = NotesEditor;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsDialog = /** @class */ (function (_super) {
            __extends(OrderAttachmentsDialog, _super);
            function OrderAttachmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.OrderAttachmentsForm(_this.idPrefix);
                return _this;
            }
            OrderAttachmentsDialog.prototype.getFormKey = function () { return Erp.OrderAttachmentsForm.formKey; };
            OrderAttachmentsDialog.prototype.getIdProperty = function () { return Erp.OrderAttachmentsRow.idProperty; };
            OrderAttachmentsDialog.prototype.getLocalTextPrefix = function () { return Erp.OrderAttachmentsRow.localTextPrefix; };
            OrderAttachmentsDialog.prototype.getNameProperty = function () { return Erp.OrderAttachmentsRow.nameProperty; };
            OrderAttachmentsDialog.prototype.getService = function () { return Erp.OrderAttachmentsService.baseUrl; };
            OrderAttachmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderAttachmentsDialog);
            return OrderAttachmentsDialog;
        }(Serenity.EntityDialog));
        Erp.OrderAttachmentsDialog = OrderAttachmentsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsGrid = /** @class */ (function (_super) {
            __extends(OrderAttachmentsGrid, _super);
            function OrderAttachmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderAttachmentsGrid.prototype.getColumnsKey = function () { return 'Erp.OrderAttachments'; };
            OrderAttachmentsGrid.prototype.getDialogType = function () { return Erp.OrderAttachmentsDialog; };
            OrderAttachmentsGrid.prototype.getIdProperty = function () { return Erp.OrderAttachmentsRow.idProperty; };
            OrderAttachmentsGrid.prototype.getLocalTextPrefix = function () { return Erp.OrderAttachmentsRow.localTextPrefix; };
            OrderAttachmentsGrid.prototype.getService = function () { return Erp.OrderAttachmentsService.baseUrl; };
            OrderAttachmentsGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
                return listResponse;
            };
            OrderAttachmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderAttachmentsGrid);
            return OrderAttachmentsGrid;
        }(Serenity.EntityGrid));
        Erp.OrderAttachmentsGrid = OrderAttachmentsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderDetailsDialog = /** @class */ (function (_super) {
            __extends(OrderDetailsDialog, _super);
            function OrderDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.OrderDetailsForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                // this.form = new OrderDetailsForm(this.idPrefix);
                _this.form.ProductId.changeSelect2(function (e) {
                    var productId = Q.toId(_this.form.ProductId.value);
                    if (productId != null) {
                        _this.form.UnitPrice.value = Erp.ProductsRow.getLookup().itemById[productId].UnitPrice;
                    }
                });
                _this.form.Width.change(function (e) {
                    var height = _this.form.Height.value;
                    var width = _this.form.Width.value;
                    if (height != null && width != null) {
                        _this.form.Quadrature.value = height * width;
                    }
                    else {
                        _this.form.Quadrature.value = 0;
                    }
                });
                _this.form.Height.change(function (e) {
                    var height = _this.form.Height.value;
                    var width = _this.form.Width.value;
                    if (height != null && width != null) {
                        _this.form.Quadrature.value = height * width;
                    }
                    else {
                        _this.form.Quadrature.value = 0;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailsDialog.prototype.getFormKey = function () { return Erp.OrderDetailsForm.formKey; };
            OrderDetailsDialog.prototype.getLocalTextPrefix = function () { return Erp.OrderDetailsRow.localTextPrefix; };
            OrderDetailsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                console.log(entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            };
            OrderDetailsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            OrderDetailsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            OrderDetailsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], OrderDetailsDialog);
            return OrderDetailsDialog;
        }(PGMS.Common.GridEditorDialog));
        Erp.OrderDetailsDialog = OrderDetailsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Erp.OrderDetails"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Erp.OrderDetailsDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Erp.OrderDetailsRow.localTextPrefix; };
            OrderDetailsEditor.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            OrderDetailsEditor.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Quadrature'),
                        new Slick.Aggregators.Sum('Quantity'),
                        new Slick.Aggregators.Sum('Discount'),
                        new Slick.Aggregators.Sum('AdditionalCosts'),
                        new Slick.Aggregators.Sum('LineTotal')
                    ]
                });
                return grid;
            };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductId = Q.toId(row.ProductId);
                //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
                //if (sameProduct && this.id(sameProduct) !== id) {
                //    Q.alert('This product is already in order details!');
                //    return false;
                //}
                var productLookup = Erp.ProductsRow.getLookup().itemById[row.ProductId];
                row.ProductQuantityPerUnit = productLookup.QuantityPerUnit;
                row.ProductName = productLookup.Name;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0);
                if (row.Quadrature > 0)
                    row.LineTotal = row.LineTotal * row.Quadrature;
                row.LineTotal = row.LineTotal - (row.Discount || 0) + (row.AdditionalCosts || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(PGMS.Common.GridEditorBase));
        Erp.OrderDetailsEditor = OrderDetailsEditor;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var DeadlineFormatter = /** @class */ (function () {
            function DeadlineFormatter() {
            }
            DeadlineFormatter.prototype.format = function (ctx) {
                if (ctx.value && Q.parseDate(ctx.value) < new Date())
                    return "<div style='height:100%; background-color: #ff574f;' >" + Q.formatDate(ctx.value, "HH:mm dd/MM/yyyy") + '</div>';
                else
                    return Q.formatDate(ctx.value, "HH:mm dd/MM/yyyy");
            };
            DeadlineFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
            ], DeadlineFormatter);
            return DeadlineFormatter;
        }());
        Erp.DeadlineFormatter = DeadlineFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="OrdersGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var MyOrdersGrid = /** @class */ (function (_super) {
            __extends(MyOrdersGrid, _super);
            function MyOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            // Remove quick filter for assigned to user. We only show
            MyOrdersGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, "UserId" /* UserId */);
                this.myLookupQuickFilter.element.parent().remove("*");
                //removed Group by Companie
                //this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, PGMS.Erp.OrdersRow.Fields.CompanyId);
                //this.myLookupQuickFilter.element.parent().remove("*");
            };
            // Here you can set the onDataLoaded event to use for set new title 
            MyOrdersGrid.prototype.createView = function () {
                var _this = this;
                var view = _super.prototype.createView.call(this);
                view.onDataLoaded.subscribe(function (e, ui) {
                    _this.setTitle(Q.text("Site.Dashboard.OrdersGridTitle") + _this.totalRecord);
                });
                return view;
            };
            // Here you can get the total number of records
            MyOrdersGrid.prototype.onViewProcessData = function (response) {
                var lr = _super.prototype.onViewProcessData.call(this, response);
                this.totalRecord = lr.TotalCount;
                return lr;
            };
            //protected getButtons() {
            //    var buttons = super.getButtons();
            //    //removed Group by Companie
            //    buttons.splice(5, 1);
            //    return buttons;
            //}
            MyOrdersGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['UserId'], '=', PGMS.Authorization.userDefinition.UserId]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            MyOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MyOrdersGrid);
            return MyOrdersGrid;
        }(Erp.OrdersGrid));
        Erp.MyOrdersGrid = MyOrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../OrderAttachments/OrderAttachmentsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsExtendedDialog = /** @class */ (function (_super) {
            __extends(OrderAttachmentsExtendedDialog, _super);
            function OrderAttachmentsExtendedDialog() {
                return _super.call(this) || this;
            }
            OrderAttachmentsExtendedDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
            };
            OrderAttachmentsExtendedDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderAttachmentsExtendedDialog);
            return OrderAttachmentsExtendedDialog;
        }(Erp.OrderAttachmentsDialog));
        Erp.OrderAttachmentsExtendedDialog = OrderAttachmentsExtendedDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../OrderAttachments/OrderAttachmentsDialog.ts"/>
///<reference path="./../OrderAttachments/OrderAttachmentsGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderAttachmentsExtendedGrid = /** @class */ (function (_super) {
            __extends(OrderAttachmentsExtendedGrid, _super);
            function OrderAttachmentsExtendedGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderAttachmentsExtendedGrid.prototype.getDialogType = function () { return Erp.OrderAttachmentsExtendedDialog; };
            OrderAttachmentsExtendedGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            OrderAttachmentsExtendedGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            OrderAttachmentsExtendedGrid.prototype.addButtonClick = function () {
                this.editItem({ OrderId: this.orderId });
            };
            OrderAttachmentsExtendedGrid.prototype.getInitialTitle = function () {
                return null;
            };
            OrderAttachmentsExtendedGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.orderId;
            };
            Object.defineProperty(OrderAttachmentsExtendedGrid.prototype, "orderId", {
                get: function () {
                    return this._orderId;
                },
                set: function (value) {
                    if (this._orderId !== value) {
                        this._orderId = value;
                        this.setEquality('OrderId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            OrderAttachmentsExtendedGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderAttachmentsExtendedGrid);
            return OrderAttachmentsExtendedGrid;
        }(Erp.OrderAttachmentsGrid));
        Erp.OrderAttachmentsExtendedGrid = OrderAttachmentsExtendedGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Expenses/ExpensesDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderExpensesDialog = /** @class */ (function (_super) {
            __extends(OrderExpensesDialog, _super);
            function OrderExpensesDialog() {
                return _super.call(this) || this;
            }
            OrderExpensesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
                Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
                Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
                Serenity.EditorUtils.setReadOnly(this.form.AccountId, true);
                //Serenity.EditorUtils.setReadOnly(this.form.TransactionType, true);
                if (this.isNew())
                    this.form.TransactionType.value = "2";
            };
            OrderExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderExpensesDialog);
            return OrderExpensesDialog;
        }(Erp.ExpensesDialog));
        Erp.OrderExpensesDialog = OrderExpensesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../Expenses/ExpensesGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderExpensesGrid = /** @class */ (function (_super) {
            __extends(OrderExpensesGrid, _super);
            function OrderExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderExpensesGrid.prototype.getDialogType = function () { return Erp.OrderExpensesDialog; };
            OrderExpensesGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            OrderExpensesGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            OrderExpensesGrid.prototype.addButtonClick = function () {
                var name = Q.format(Q.tryGetText("Site.Expenses.ExpenseNameOrder"), "#" + this.orderId);
                this.editItem({ OrderId: this.orderId, AccountId: this.accountId, Name: name });
            };
            OrderExpensesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            OrderExpensesGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.orderId;
            };
            Object.defineProperty(OrderExpensesGrid.prototype, "accountId", {
                get: function () {
                    return this._accountId;
                },
                set: function (value) {
                    if (this._accountId !== value) {
                        this._accountId = value;
                        this.setEquality('AccountId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OrderExpensesGrid.prototype, "orderId", {
                get: function () {
                    return this._orderId;
                },
                set: function (value) {
                    if (this._orderId !== value) {
                        this._orderId = value;
                        this.setEquality('OrderId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            OrderExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderExpensesGrid);
            return OrderExpensesGrid;
        }(Erp.ExpensesGrid));
        Erp.OrderExpensesGrid = OrderExpensesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersIsRealFormatter = /** @class */ (function () {
            function OrdersIsRealFormatter() {
            }
            OrdersIsRealFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.isRealProperty) {
                    return text;
                }
                var _isRealProperty = ctx.item[this.isRealProperty];
                if (_isRealProperty == 1)
                    return "<div style='height:100%; background-color: #F00;' >" + text + '</div>';
                else
                    return text;
            };
            OrdersIsRealFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.isRealProperty)
                    column.referencedFields.push(this.isRealProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], OrdersIsRealFormatter.prototype, "isRealProperty", void 0);
            OrdersIsRealFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], OrdersIsRealFormatter);
            return OrdersIsRealFormatter;
        }());
        Erp.OrdersIsRealFormatter = OrdersIsRealFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesDialog = /** @class */ (function (_super) {
            __extends(OrderStatusesDialog, _super);
            function OrderStatusesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.OrderStatusesForm(_this.idPrefix);
                return _this;
            }
            OrderStatusesDialog.prototype.getFormKey = function () { return Erp.OrderStatusesForm.formKey; };
            OrderStatusesDialog.prototype.getIdProperty = function () { return Erp.OrderStatusesRow.idProperty; };
            OrderStatusesDialog.prototype.getLocalTextPrefix = function () { return Erp.OrderStatusesRow.localTextPrefix; };
            OrderStatusesDialog.prototype.getNameProperty = function () { return Erp.OrderStatusesRow.nameProperty; };
            OrderStatusesDialog.prototype.getService = function () { return Erp.OrderStatusesService.baseUrl; };
            OrderStatusesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderStatusesDialog);
            return OrderStatusesDialog;
        }(Serenity.EntityDialog));
        Erp.OrderStatusesDialog = OrderStatusesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesFormatter = /** @class */ (function () {
            function OrderStatusesFormatter() {
            }
            OrderStatusesFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.backgroundProperty || !this.borderProperty) {
                    return text;
                }
                var backgroundColor = ctx.item[this.backgroundProperty];
                var borderColor = ctx.item[this.borderProperty];
                //return "<span style='background-color: " + color +";'>" + text + '</span>';
                return "<div style='height:100%; background-color: " + backgroundColor + "; border-color: " + borderColor + ";' >" + text + '</div>';
            };
            OrderStatusesFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.backgroundProperty)
                    column.referencedFields.push(this.backgroundProperty);
                if (this.borderProperty)
                    column.referencedFields.push(this.borderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], OrderStatusesFormatter.prototype, "backgroundProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], OrderStatusesFormatter.prototype, "borderProperty", void 0);
            OrderStatusesFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], OrderStatusesFormatter);
            return OrderStatusesFormatter;
        }());
        Erp.OrderStatusesFormatter = OrderStatusesFormatter;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrderStatusesGrid = /** @class */ (function (_super) {
            __extends(OrderStatusesGrid, _super);
            function OrderStatusesGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderStatusesGrid.prototype.getColumnsKey = function () { return 'Erp.OrderStatuses'; };
            OrderStatusesGrid.prototype.getDialogType = function () { return Erp.OrderStatusesDialog; };
            OrderStatusesGrid.prototype.getIdProperty = function () { return Erp.OrderStatusesRow.idProperty; };
            OrderStatusesGrid.prototype.getLocalTextPrefix = function () { return Erp.OrderStatusesRow.localTextPrefix; };
            OrderStatusesGrid.prototype.getService = function () { return Erp.OrderStatusesService.baseUrl; };
            OrderStatusesGrid.prototype.getIsActiveProperty = function () { return Erp.OrderStatusesRow.isActiveProperty; };
            OrderStatusesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderStatusesGrid);
            return OrderStatusesGrid;
        }(Serenity.EntityGrid));
        Erp.OrderStatusesGrid = OrderStatusesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsDialog = /** @class */ (function (_super) {
            __extends(OutsideOrderAttachmentsDialog, _super);
            function OutsideOrderAttachmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.OutsideOrderAttachmentsForm(_this.idPrefix);
                return _this;
            }
            OutsideOrderAttachmentsDialog.prototype.getFormKey = function () { return Erp.OutsideOrderAttachmentsForm.formKey; };
            OutsideOrderAttachmentsDialog.prototype.getIdProperty = function () { return Erp.OutsideOrderAttachmentsRow.idProperty; };
            OutsideOrderAttachmentsDialog.prototype.getLocalTextPrefix = function () { return Erp.OutsideOrderAttachmentsRow.localTextPrefix; };
            OutsideOrderAttachmentsDialog.prototype.getNameProperty = function () { return Erp.OutsideOrderAttachmentsRow.nameProperty; };
            OutsideOrderAttachmentsDialog.prototype.getService = function () { return Erp.OutsideOrderAttachmentsService.baseUrl; };
            OutsideOrderAttachmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderAttachmentsDialog);
            return OutsideOrderAttachmentsDialog;
        }(Serenity.EntityDialog));
        Erp.OutsideOrderAttachmentsDialog = OutsideOrderAttachmentsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsGrid = /** @class */ (function (_super) {
            __extends(OutsideOrderAttachmentsGrid, _super);
            function OutsideOrderAttachmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            OutsideOrderAttachmentsGrid.prototype.getColumnsKey = function () { return 'Erp.OutsideOrderAttachments'; };
            OutsideOrderAttachmentsGrid.prototype.getDialogType = function () { return Erp.OutsideOrderAttachmentsDialog; };
            OutsideOrderAttachmentsGrid.prototype.getIdProperty = function () { return Erp.OutsideOrderAttachmentsRow.idProperty; };
            OutsideOrderAttachmentsGrid.prototype.getLocalTextPrefix = function () { return Erp.OutsideOrderAttachmentsRow.localTextPrefix; };
            OutsideOrderAttachmentsGrid.prototype.getService = function () { return Erp.OutsideOrderAttachmentsService.baseUrl; };
            OutsideOrderAttachmentsGrid.prototype.onViewProcessData = function (response) {
                var listResponse = _super.prototype.onViewProcessData.call(this, response);
                Serenity.TabsExtensions.setCounter(this.element, listResponse.TotalCount, 'Attachments');
                return listResponse;
            };
            OutsideOrderAttachmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderAttachmentsGrid);
            return OutsideOrderAttachmentsGrid;
        }(Serenity.EntityGrid));
        Erp.OutsideOrderAttachmentsGrid = OutsideOrderAttachmentsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="OutsideOrdersGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var MyOutsideOrdersGrid = /** @class */ (function (_super) {
            __extends(MyOutsideOrdersGrid, _super);
            function MyOutsideOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            // Remove quick filter for assigned to user. We only show
            MyOutsideOrdersGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, "AssignUserId" /* AssignUserId */);
                this.myLookupQuickFilter.element.parent().remove("*");
                //removed Group by Companie
                //this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, PGMS.Erp.OrdersRow.Fields.CompanyId);
                //this.myLookupQuickFilter.element.parent().remove("*");
            };
            // Here you can set the onDataLoaded event to use for set new title 
            MyOutsideOrdersGrid.prototype.createView = function () {
                var _this = this;
                var view = _super.prototype.createView.call(this);
                view.onDataLoaded.subscribe(function (e, ui) {
                    _this.setTitle(Q.text("Site.Dashboard.OutsideOrdersGridTitle") + _this.totalRecord);
                });
                return view;
            };
            // Here you can get the total number of records
            MyOutsideOrdersGrid.prototype.onViewProcessData = function (response) {
                var lr = _super.prototype.onViewProcessData.call(this, response);
                this.totalRecord = lr.TotalCount;
                return lr;
            };
            //protected getButtons() {
            //    var buttons = super.getButtons();
            //    //removed Group by Companie
            //    buttons.splice(5, 1);
            //    return buttons;
            //}
            MyOutsideOrdersGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['AssignUserId'], '=', PGMS.Authorization.userDefinition.UserId]);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            MyOutsideOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MyOutsideOrdersGrid);
            return MyOutsideOrdersGrid;
        }(Erp.OutsideOrdersGrid));
        Erp.MyOutsideOrdersGrid = MyOutsideOrdersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../OutsideOrderAttachments/OutsideOrderAttachmentsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsExtendedDialog = /** @class */ (function (_super) {
            __extends(OutsideOrderAttachmentsExtendedDialog, _super);
            function OutsideOrderAttachmentsExtendedDialog() {
                return _super.call(this) || this;
            }
            OutsideOrderAttachmentsExtendedDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
            };
            OutsideOrderAttachmentsExtendedDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderAttachmentsExtendedDialog);
            return OutsideOrderAttachmentsExtendedDialog;
        }(Erp.OutsideOrderAttachmentsDialog));
        Erp.OutsideOrderAttachmentsExtendedDialog = OutsideOrderAttachmentsExtendedDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../OutsideOrderAttachments/OutsideOrderAttachmentsDialog.ts"/>
///<reference path="./../OutsideOrderAttachments/OutsideOrderAttachmentsGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderAttachmentsExtendedGrid = /** @class */ (function (_super) {
            __extends(OutsideOrderAttachmentsExtendedGrid, _super);
            function OutsideOrderAttachmentsExtendedGrid(container) {
                return _super.call(this, container) || this;
            }
            OutsideOrderAttachmentsExtendedGrid.prototype.getDialogType = function () { return Erp.OutsideOrderAttachmentsExtendedDialog; };
            OutsideOrderAttachmentsExtendedGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            OutsideOrderAttachmentsExtendedGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            OutsideOrderAttachmentsExtendedGrid.prototype.addButtonClick = function () {
                this.editItem({ OutsideOrderId: this.outsideOrderId });
            };
            OutsideOrderAttachmentsExtendedGrid.prototype.getInitialTitle = function () {
                return null;
            };
            OutsideOrderAttachmentsExtendedGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.outsideOrderId;
            };
            Object.defineProperty(OutsideOrderAttachmentsExtendedGrid.prototype, "outsideOrderId", {
                get: function () {
                    return this._outsideOrderId;
                },
                set: function (value) {
                    if (this._outsideOrderId !== value) {
                        this._outsideOrderId = value;
                        this.setEquality('OutsideOrderId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            OutsideOrderAttachmentsExtendedGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderAttachmentsExtendedGrid);
            return OutsideOrderAttachmentsExtendedGrid;
        }(Erp.OutsideOrderAttachmentsGrid));
        Erp.OutsideOrderAttachmentsExtendedGrid = OutsideOrderAttachmentsExtendedGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Expenses/ExpensesDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderExpensesDialog = /** @class */ (function (_super) {
            __extends(OutsideOrderExpensesDialog, _super);
            function OutsideOrderExpensesDialog() {
                return _super.call(this) || this;
            }
            OutsideOrderExpensesDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.OutsideOrderId, true);
                Serenity.EditorUtils.setReadOnly(this.form.UserId, true);
                Serenity.EditorUtils.setReadOnly(this.form.OrderId, true);
                Serenity.EditorUtils.setReadOnly(this.form.AccountId, true);
                //Serenity.EditorUtils.setReadOnly(this.form.TransactionType, true);
                if (this.isNew()) {
                    this.form.TransactionType.value = "2";
                }
            };
            OutsideOrderExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderExpensesDialog);
            return OutsideOrderExpensesDialog;
        }(Erp.ExpensesDialog));
        Erp.OutsideOrderExpensesDialog = OutsideOrderExpensesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../Expenses/ExpensesGrid.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OutsideOrderExpensesGrid = /** @class */ (function (_super) {
            __extends(OutsideOrderExpensesGrid, _super);
            function OutsideOrderExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            OutsideOrderExpensesGrid.prototype.getDialogType = function () { return Erp.OutsideOrderExpensesDialog; };
            OutsideOrderExpensesGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            OutsideOrderExpensesGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            OutsideOrderExpensesGrid.prototype.addButtonClick = function () {
                var name = Q.format(Q.tryGetText("Site.Expenses.ExpenseNameOutsideOrder"), this.outsideOrderId.toString());
                this.editItem({ OutsideOrderId: this.outsideOrderId, AccountId: this.accountId, Name: name });
            };
            OutsideOrderExpensesGrid.prototype.getInitialTitle = function () {
                return null;
            };
            OutsideOrderExpensesGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.outsideOrderId;
            };
            Object.defineProperty(OutsideOrderExpensesGrid.prototype, "accountId", {
                get: function () {
                    return this._accountId;
                },
                set: function (value) {
                    if (this._accountId !== value) {
                        this._accountId = value;
                        this.setEquality('AccountId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OutsideOrderExpensesGrid.prototype, "outsideOrderId", {
                get: function () {
                    return this._outsideOrderId;
                },
                set: function (value) {
                    if (this._outsideOrderId !== value) {
                        this._outsideOrderId = value;
                        this.setEquality('OutsideOrderId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            OutsideOrderExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OutsideOrderExpensesGrid);
            return OutsideOrderExpensesGrid;
        }(Erp.ExpensesGrid));
        Erp.OutsideOrderExpensesGrid = OutsideOrderExpensesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnersDialog = /** @class */ (function (_super) {
            __extends(PartnersDialog, _super);
            function PartnersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.PartnersForm(_this.idPrefix);
                return _this;
            }
            PartnersDialog.prototype.getFormKey = function () { return Erp.PartnersForm.formKey; };
            PartnersDialog.prototype.getIdProperty = function () { return Erp.PartnersRow.idProperty; };
            PartnersDialog.prototype.getLocalTextPrefix = function () { return Erp.PartnersRow.localTextPrefix; };
            PartnersDialog.prototype.getNameProperty = function () { return Erp.PartnersRow.nameProperty; };
            PartnersDialog.prototype.getService = function () { return Erp.PartnersService.baseUrl; };
            PartnersDialog = __decorate([
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], PartnersDialog);
            return PartnersDialog;
        }(Serenity.EntityDialog));
        Erp.PartnersDialog = PartnersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnersGrid = /** @class */ (function (_super) {
            __extends(PartnersGrid, _super);
            function PartnersGrid(container) {
                return _super.call(this, container) || this;
            }
            PartnersGrid.prototype.getColumnsKey = function () { return 'Erp.Partners'; };
            PartnersGrid.prototype.getDialogType = function () { return Erp.PartnersDialog; };
            PartnersGrid.prototype.getIdProperty = function () { return Erp.PartnersRow.idProperty; };
            PartnersGrid.prototype.getLocalTextPrefix = function () { return Erp.PartnersRow.localTextPrefix; };
            PartnersGrid.prototype.getService = function () { return Erp.PartnersService.baseUrl; };
            PartnersGrid.prototype.getIsActiveProperty = function () { return Erp.PartnersRow.isActiveProperty; };
            PartnersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.PartnersService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            PartnersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PartnersGrid);
            return PartnersGrid;
        }(Serenity.EntityGrid));
        Erp.PartnersGrid = PartnersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnerTypesDialog = /** @class */ (function (_super) {
            __extends(PartnerTypesDialog, _super);
            function PartnerTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.PartnerTypesForm(_this.idPrefix);
                return _this;
            }
            PartnerTypesDialog.prototype.getFormKey = function () { return Erp.PartnerTypesForm.formKey; };
            PartnerTypesDialog.prototype.getIdProperty = function () { return Erp.PartnerTypesRow.idProperty; };
            PartnerTypesDialog.prototype.getLocalTextPrefix = function () { return Erp.PartnerTypesRow.localTextPrefix; };
            PartnerTypesDialog.prototype.getNameProperty = function () { return Erp.PartnerTypesRow.nameProperty; };
            PartnerTypesDialog.prototype.getService = function () { return Erp.PartnerTypesService.baseUrl; };
            PartnerTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PartnerTypesDialog);
            return PartnerTypesDialog;
        }(Serenity.EntityDialog));
        Erp.PartnerTypesDialog = PartnerTypesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PartnerTypesGrid = /** @class */ (function (_super) {
            __extends(PartnerTypesGrid, _super);
            function PartnerTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            PartnerTypesGrid.prototype.getColumnsKey = function () { return 'Erp.PartnerTypes'; };
            PartnerTypesGrid.prototype.getDialogType = function () { return Erp.PartnerTypesDialog; };
            PartnerTypesGrid.prototype.getIdProperty = function () { return Erp.PartnerTypesRow.idProperty; };
            PartnerTypesGrid.prototype.getLocalTextPrefix = function () { return Erp.PartnerTypesRow.localTextPrefix; };
            PartnerTypesGrid.prototype.getService = function () { return Erp.PartnerTypesService.baseUrl; };
            PartnerTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PartnerTypesGrid);
            return PartnerTypesGrid;
        }(Serenity.EntityGrid));
        Erp.PartnerTypesGrid = PartnerTypesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PaymentTypesDialog = /** @class */ (function (_super) {
            __extends(PaymentTypesDialog, _super);
            function PaymentTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.PaymentTypesForm(_this.idPrefix);
                return _this;
            }
            PaymentTypesDialog.prototype.getFormKey = function () { return Erp.PaymentTypesForm.formKey; };
            PaymentTypesDialog.prototype.getIdProperty = function () { return Erp.PaymentTypesRow.idProperty; };
            PaymentTypesDialog.prototype.getLocalTextPrefix = function () { return Erp.PaymentTypesRow.localTextPrefix; };
            PaymentTypesDialog.prototype.getNameProperty = function () { return Erp.PaymentTypesRow.nameProperty; };
            PaymentTypesDialog.prototype.getService = function () { return Erp.PaymentTypesService.baseUrl; };
            PaymentTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentTypesDialog);
            return PaymentTypesDialog;
        }(Serenity.EntityDialog));
        Erp.PaymentTypesDialog = PaymentTypesDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var PaymentTypesGrid = /** @class */ (function (_super) {
            __extends(PaymentTypesGrid, _super);
            function PaymentTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentTypesGrid.prototype.getColumnsKey = function () { return 'Erp.PaymentTypes'; };
            PaymentTypesGrid.prototype.getDialogType = function () { return Erp.PaymentTypesDialog; };
            PaymentTypesGrid.prototype.getIdProperty = function () { return Erp.PaymentTypesRow.idProperty; };
            PaymentTypesGrid.prototype.getLocalTextPrefix = function () { return Erp.PaymentTypesRow.localTextPrefix; };
            PaymentTypesGrid.prototype.getService = function () { return Erp.PaymentTypesService.baseUrl; };
            PaymentTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentTypesGrid);
            return PaymentTypesGrid;
        }(Serenity.EntityGrid));
        Erp.PaymentTypesGrid = PaymentTypesGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductsDialog = /** @class */ (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.ProductsForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            ProductsDialog.prototype.getFormKey = function () { return Erp.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return Erp.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return Erp.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return Erp.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return Erp.ProductsService.baseUrl; };
            ProductsDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
            };
            ProductsDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            ProductsDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            ProductsDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                if ($('.s-OrderDetailsDialog input[name="UnitPrice"]').length > 0) {
                    console.log(Q.formatNumber(this.form.UnitPrice.value, "#.##"));
                    $('.s-OrderDetailsDialog input[name="UnitPrice"]').val(Q.formatNumber(this.form.UnitPrice.value, "#.##"));
                }
            };
            ProductsDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.maximizable(),
                Serenity.Decorators.registerClass()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        Erp.ProductsDialog = ProductsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductsGrid = /** @class */ (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'Erp.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return Erp.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return Erp.ProductsRow.idProperty; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return Erp.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return Erp.ProductsService.baseUrl; };
            ProductsGrid.prototype.getIsActiveProperty = function () { return Erp.ProductsRow.isActiveProperty; };
            ProductsGrid.prototype.getViewOptions = function () {
                var options = _super.prototype.getViewOptions.call(this);
                options.rowsPerPage = 2500;
                return options;
            };
            ProductsGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.ProductsService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        Erp.ProductsGrid = ProductsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SentEmailsDialog = /** @class */ (function (_super) {
            __extends(SentEmailsDialog, _super);
            function SentEmailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Erp.SentEmailsForm(_this.idPrefix);
                return _this;
            }
            SentEmailsDialog.prototype.getFormKey = function () { return Erp.SentEmailsForm.formKey; };
            SentEmailsDialog.prototype.getIdProperty = function () { return Erp.SentEmailsRow.idProperty; };
            SentEmailsDialog.prototype.getLocalTextPrefix = function () { return Erp.SentEmailsRow.localTextPrefix; };
            SentEmailsDialog.prototype.getNameProperty = function () { return Erp.SentEmailsRow.nameProperty; };
            SentEmailsDialog.prototype.getService = function () { return Erp.SentEmailsService.baseUrl; };
            SentEmailsDialog = __decorate([
                Serenity.Decorators.panel(),
                Serenity.Decorators.registerClass()
            ], SentEmailsDialog);
            return SentEmailsDialog;
        }(Serenity.EntityDialog));
        Erp.SentEmailsDialog = SentEmailsDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SentEmailsGrid = /** @class */ (function (_super) {
            __extends(SentEmailsGrid, _super);
            function SentEmailsGrid(container) {
                return _super.call(this, container) || this;
            }
            SentEmailsGrid.prototype.getColumnsKey = function () { return 'Erp.SentEmails'; };
            SentEmailsGrid.prototype.getDialogType = function () { return Erp.SentEmailsDialog; };
            SentEmailsGrid.prototype.getIdProperty = function () { return Erp.SentEmailsRow.idProperty; };
            SentEmailsGrid.prototype.getLocalTextPrefix = function () { return Erp.SentEmailsRow.localTextPrefix; };
            SentEmailsGrid.prototype.getService = function () { return Erp.SentEmailsService.baseUrl; };
            SentEmailsGrid.prototype.getIsActiveProperty = function () { return Erp.SentEmailsRow.isActiveProperty; };
            SentEmailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SentEmailsGrid);
            return SentEmailsGrid;
        }(Serenity.EntityGrid));
        Erp.SentEmailsGrid = SentEmailsGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
/// <reference path="../Products/ProductsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductSuppliersdDialog = /** @class */ (function (_super) {
            __extends(ProductSuppliersdDialog, _super);
            function ProductSuppliersdDialog() {
                return _super.call(this) || this;
            }
            ProductSuppliersdDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.SupplierId, true); 
            };
            ProductSuppliersdDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSuppliersdDialog);
            return ProductSuppliersdDialog;
        }(Erp.ProductsDialog));
        Erp.ProductSuppliersdDialog = ProductSuppliersdDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
///<reference path="./../Products/ProductsGrid.ts"/>
///<reference path="./../Products/ProductsDialog.ts"/>
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var ProductSuppliersdGrid = /** @class */ (function (_super) {
            __extends(ProductSuppliersdGrid, _super);
            function ProductSuppliersdGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductSuppliersdGrid.prototype.getDialogType = function () { return Erp.ProductSuppliersdDialog; };
            ProductSuppliersdGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this);
            };
            ProductSuppliersdGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            ProductSuppliersdGrid.prototype.addButtonClick = function () {
                this.editItem({ SupplierId: this.supplierId });
            };
            ProductSuppliersdGrid.prototype.getInitialTitle = function () {
                return null;
            };
            ProductSuppliersdGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.supplierId;
            };
            Object.defineProperty(ProductSuppliersdGrid.prototype, "supplierId", {
                get: function () {
                    return this._supplierId;
                },
                set: function (value) {
                    if (this._supplierId !== value) {
                        this._supplierId = value;
                        this.setEquality('SupplierId', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ProductSuppliersdGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSuppliersdGrid);
            return ProductSuppliersdGrid;
        }(Erp.ProductsGrid));
        Erp.ProductSuppliersdGrid = ProductSuppliersdGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SuppliersDialog = /** @class */ (function (_super) {
            __extends(SuppliersDialog, _super);
            function SuppliersDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Erp.SuppliersForm(_this.idPrefix);
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                PGMS.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.productsGrid = new Erp.ProductSuppliersdGrid(_this.byId("ProductsPropertyGrid"));
                _this.productsGrid.element.flexHeightOnly(1);
                return _this;
            }
            SuppliersDialog.prototype.getFormKey = function () { return Erp.SuppliersForm.formKey; };
            SuppliersDialog.prototype.getIdProperty = function () { return Erp.SuppliersRow.idProperty; };
            SuppliersDialog.prototype.getLocalTextPrefix = function () { return Erp.SuppliersRow.localTextPrefix; };
            SuppliersDialog.prototype.getNameProperty = function () { return Erp.SuppliersRow.nameProperty; };
            SuppliersDialog.prototype.getService = function () { return Erp.SuppliersService.baseUrl; };
            SuppliersDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Products', this.isNewOrDeleted());
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Notes', this.isNewOrDeleted());
                this.productsGrid.supplierId = entity.SupplierId;
            };
            SuppliersDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SuppliersDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SuppliersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersDialog);
            return SuppliersDialog;
        }(Serenity.EntityDialog));
        Erp.SuppliersDialog = SuppliersDialog;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var SuppliersGrid = /** @class */ (function (_super) {
            __extends(SuppliersGrid, _super);
            function SuppliersGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppliersGrid.prototype.getColumnsKey = function () { return 'Erp.Suppliers'; };
            SuppliersGrid.prototype.getDialogType = function () { return Erp.SuppliersDialog; };
            SuppliersGrid.prototype.getIdProperty = function () { return Erp.SuppliersRow.idProperty; };
            SuppliersGrid.prototype.getLocalTextPrefix = function () { return Erp.SuppliersRow.localTextPrefix; };
            SuppliersGrid.prototype.getService = function () { return Erp.SuppliersService.baseUrl; };
            SuppliersGrid.prototype.getIsActiveProperty = function () { return Erp.SuppliersRow.isActiveProperty; };
            SuppliersGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                var text = Q.text("Site.GroupByButton");
                buttons.push(PGMS.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Erp.SuppliersService.baseUrl + '/ListExcel',
                    separator: true,
                    hint: Q.tryGetText("Site.ExportToExcelHintButton"),
                    title: Q.tryGetText("Site.ExportToExcelButton")
                }));
                return buttons;
            };
            SuppliersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersGrid);
            return SuppliersGrid;
        }(Serenity.EntityGrid));
        Erp.SuppliersGrid = SuppliersGrid;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = PGMS.Authorization || (PGMS.Authorization = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var IncomeVSExpense = /** @class */ (function (_super) {
            __extends(IncomeVSExpense, _super);
            function IncomeVSExpense(elem, opt) {
                var _this = _super.call(this, elem, opt) || this;
                Erp.ReportsEndpointService.IncomeVSExpenseResponse({}, function (response) {
                    var config = {
                        type: 'line',
                        data: {
                            datasets: response.Entity.datasets,
                            labels: response.Entity.labels
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: true
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                        }
                                    }
                                ]
                            }
                        },
                    };
                    var ctx = $(_this.byId("IncomeVSExpense")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);
                });
                return _this;
            }
            return IncomeVSExpense;
        }(Serenity.TemplatedWidget));
        Erp.IncomeVSExpense = IncomeVSExpense;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Erp;
    (function (Erp) {
        var OrdersPerStatus = /** @class */ (function (_super) {
            __extends(OrdersPerStatus, _super);
            function OrdersPerStatus(elem, opt) {
                var _this = _super.call(this, elem, opt) || this;
                Erp.ReportsEndpointService.OrdersPerStatus({}, function (response) {
                    var config = {
                        type: 'line',
                        data: {
                            datasets: response.Entity.datasets,
                            labels: response.Entity.labels
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: true
                            },
                            tooltips: {
                                mode: 'index',
                                intersect: false,
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            scales: {
                                xAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                        }
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                        }
                                    }
                                ]
                            }
                        },
                    };
                    var ctx = $(_this.byId("IncomeVSExpense")).get(0).getContext("2d", {});
                    var myPie = new Chart(ctx, config);
                });
                return _this;
            }
            return OrdersPerStatus;
        }(Serenity.TemplatedWidget));
        Erp.OrdersPerStatus = OrdersPerStatus;
    })(Erp = PGMS.Erp || (PGMS.Erp = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
var PGMS;
(function (PGMS) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = PGMS.Membership || (PGMS.Membership = {}));
})(PGMS || (PGMS = {}));
//# sourceMappingURL=PGMS.Web.js.map