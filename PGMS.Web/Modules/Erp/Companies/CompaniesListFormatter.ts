namespace PGMS.Erp{

    @Serenity.Decorators.registerFormatter()
    export class CompaniesListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = CompaniesRow.getLookup().itemById;
            let z: CompaniesRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }
}