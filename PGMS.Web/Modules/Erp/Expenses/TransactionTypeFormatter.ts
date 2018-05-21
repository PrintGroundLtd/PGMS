namespace PGMS.Erp {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    export class TransactionTypeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value === 1)
                return "<div style='height:100%; background-color: #FF6E6E;' >" + Q.tryGetText("Enums.PGMS.Erp.Entities.TransactionType.Expense") + '</div>';
            else
                return "<div style='height:100%; background-color: #57F777;' >" + Q.tryGetText("Enums.PGMS.Erp.Entities.TransactionType.Income")  + '</div>';
        }

    }
} 