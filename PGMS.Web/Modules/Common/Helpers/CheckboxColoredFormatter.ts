namespace PGMS.Erp{

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    export class CheckboxColoredFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            
            if (ctx.value === false)
                return "<div style='height:100%;' ><span class='check-box no-float readonly'></span></div> ";
            else
                return "<div style='height:100%; background-color: #3C8DBC;' ><span class='check-box no-float readonly checked'></span> </div>";
                
        }
    }
} 