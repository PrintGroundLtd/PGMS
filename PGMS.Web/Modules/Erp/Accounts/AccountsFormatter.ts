namespace PGMS.Erp {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class AccountFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            if (!this.isVipProperty) {
                return text;
            }
            var _isVipProperty = ctx.item[this.isVipProperty];
            if (_isVipProperty == 1)
                return "<div style='height:100%; background-color: #FF8630;' >" + text + '</div>';
            else
                return text;
        }


        @Serenity.Decorators.option()
        public isVipProperty: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];

            if (this.isVipProperty)
                column.referencedFields.push(this.isVipProperty);
                
        }
    }
}