namespace PGMS.Erp {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    export class DeadlineFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value && Q.parseDate(ctx.value) < new Date())
                return "<div style='height:100%; background-color: #ff574f;' >" + Q.formatDate(ctx.value, "HH:mm dd/MM/yyyy") + '</div>';
            else
                return Q.formatDate(ctx.value, "HH:mm dd/MM/yyyy") ;
        }

    }
}