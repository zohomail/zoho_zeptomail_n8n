import type { IExecuteFunctions, IHookFunctions, IDataObject, ILoadOptionsFunctions, IHttpRequestMethods } from 'n8n-workflow';
export declare function throwOnErrorStatus(this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions, responseData: IDataObject): void;
export declare function zohoZeptomailApiRequest(this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject, uri?: string): Promise<any>;
export declare function getPicklistMailagentOptions(this: ILoadOptionsFunctions): Promise<{
    name: string;
    value: string;
}[]>;
export declare function getPicklistTemplateOptions(this: ILoadOptionsFunctions, targetField: string): Promise<{
    name: string;
    value: string;
}[]>;
export declare function getDomain(domain: string): string | undefined;
export declare function getRecipientAddresses(address: any): string;
export declare function getReplyToAddresses(address: any): string;
