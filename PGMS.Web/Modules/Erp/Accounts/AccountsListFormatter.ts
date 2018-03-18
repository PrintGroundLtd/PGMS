namespace PGMS.Erp{

    @Serenity.Decorators.registerFormatter()
    export class AccountsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";
                 
            var byId = AccountsRow.getLookup().itemById;
            let z: AccountsRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }
}