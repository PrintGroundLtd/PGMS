namespace PGMS.Erp {
    export namespace ReportsEndpointService {
        export const baseUrl = 'Erp/Reports';

        export declare function IncomeVSExpenseResponse(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<IncomeVSExpenseResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function OrdersPerStatus(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersPerStatusResponse>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            IncomeVSExpenseResponse = "Erp/Reports/IncomeVSExpenseResponse",
            OrdersPerStatus = "Erp/Reports/OrdersPerStatus"
        }

        [
            'IncomeVSExpenseResponse', 
            'OrdersPerStatus'
        ].forEach(x => {
            (<any>ReportsEndpointService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
