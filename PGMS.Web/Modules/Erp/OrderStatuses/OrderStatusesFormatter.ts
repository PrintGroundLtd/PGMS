namespace PGMS.Erp {
    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class OrderStatusesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            if (!this.backgroundProperty || !this.borderProperty) {
                return text;
            }
            var backgroundColor = ctx.item[this.backgroundProperty];
            var borderColor = ctx.item[this.borderProperty];

             
            //return "<span style='background-color: " + color +";'>" + text + '</span>';
            return "<div style='height:100%; background-color: " + backgroundColor + "; border-color: " + borderColor + ";' >" + text + '</div>' ;

        }


        @Serenity.Decorators.option()
        public backgroundProperty: string;
        @Serenity.Decorators.option()
        public borderProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.backgroundProperty)
                column.referencedFields.push(this.backgroundProperty);

            if (this.borderProperty)
                column.referencedFields.push(this.borderProperty);
        }
    }
}