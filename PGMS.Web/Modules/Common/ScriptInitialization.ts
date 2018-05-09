/// <reference path="../Common/Helpers/LanguageList.ts" />
/// <reference path="../Common/UserPreference/UserPreferenceStorage.ts" />

namespace PGMS.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('PGMS');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;

    Serenity.DataGrid.defaultPersistanceStorage = new Common.UserPreferenceStorage();
}