namespace PGMS.Erp {
    export namespace OutsideOrderAttachmentsService {
        export const baseUrl = 'Erp/OutsideOrderAttachments';

        export declare function Create(request: Serenity.SaveRequest<OutsideOrderAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OutsideOrderAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OutsideOrderAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OutsideOrderAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Erp/OutsideOrderAttachments/Create",
            Update = "Erp/OutsideOrderAttachments/Update",
            Delete = "Erp/OutsideOrderAttachments/Delete",
            Retrieve = "Erp/OutsideOrderAttachments/Retrieve",
            List = "Erp/OutsideOrderAttachments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>OutsideOrderAttachmentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
