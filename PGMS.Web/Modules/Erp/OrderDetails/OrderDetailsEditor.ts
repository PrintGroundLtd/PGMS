﻿/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace PGMS.Erp {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey() { return "Erp.OrderDetails"; }
        protected getDialogType() { return OrderDetailsDialog; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Quadrature'),
                    new Slick.Aggregators.Sum('Quantity'),
                    new Slick.Aggregators.Sum('Discount'),
                    new Slick.Aggregators.Sum('AdditionalCosts'),
                    new Slick.Aggregators.Sum('LineTotal')

            ]
            });

            return grid;
        }
        validateEntity(row, id) {
            row.ProductId = Q.toId(row.ProductId);
             
            //var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            //if (sameProduct && this.id(sameProduct) !== id) {
            //    Q.alert('This product is already in order details!');
            //    return false;
            //}
            var productLookup = ProductsRow.getLookup().itemById[row.ProductId];
     
            row.ProductQuantityPerUnit = productLookup.QuantityPerUnit;
            row.ProductName = productLookup.Name;
            row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) ;
            if (row.Quadrature > 0)
                row.LineTotal = row.LineTotal * row.Quadrature;
                 
            row.LineTotal = row.LineTotal - (row.Discount || 0) + (row.AdditionalCosts || 0);
            return true;
        }
    }
}