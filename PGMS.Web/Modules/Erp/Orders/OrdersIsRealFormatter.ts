namespace PGMS.Erp {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class OrdersIsRealFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            if (!this.isRealProperty) {
                return text;
            }
            var _isRealProperty = ctx.item[this.isRealProperty];
            if (_isRealProperty == 1)
                return "<div style='height:100%; background-color: #F00;' >" + text + '</div>';
            else
                return text;
        }


        @Serenity.Decorators.option()
        public isRealProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.isRealProperty)
                column.referencedFields.push(this.isRealProperty);
                
        }
    }
}