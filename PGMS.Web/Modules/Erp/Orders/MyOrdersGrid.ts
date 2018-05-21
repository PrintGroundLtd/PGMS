/// <reference path="OrdersGrid.ts"/>


namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class MyOrdersGrid extends Erp.OrdersGrid {
        protected totalRecord: number;
        protected myLookupQuickFilter: Serenity.LookupEditor;

        constructor(container: JQuery) {
            super(container);
        }

        


        // Remove quick filter for assigned to user. We only show
        protected createQuickFilters() {
            super.createQuickFilters();

            this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, PGMS.Erp.OrdersRow.Fields.UserId);
            this.myLookupQuickFilter.element.parent().remove("*");

            //removed Group by Companie
            //this.myLookupQuickFilter = this.findQuickFilter(Serenity.LookupEditor, PGMS.Erp.OrdersRow.Fields.CompanyId);
            //this.myLookupQuickFilter.element.parent().remove("*");
        }

        // Here you can set the onDataLoaded event to use for set new title 
        protected createView(): Slick.RemoteView<OrdersRow> {
            let view = super.createView();
            (view as any).onDataLoaded.subscribe((e, ui) => {
                this.setTitle(Q.text("Site.Dashboard.OrdersGridTitle") + this.totalRecord);
            });
            return view;
        }

        // Here you can get the total number of records
        protected onViewProcessData(response: Serenity.ListResponse<OrdersRow>): Serenity.ListResponse<OrdersRow> {
            var lr = super.onViewProcessData(response);
            this.totalRecord = lr.TotalCount;
            return lr;
        }

        //protected getButtons() {

        //    var buttons = super.getButtons();
        //    //removed Group by Companie
        //    buttons.splice(5, 1);
        //    return buttons;
        //}

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['UserId'], '=', Authorization.userDefinition.UserId]);

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }
    }
}
