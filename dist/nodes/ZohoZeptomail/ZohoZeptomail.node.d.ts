import { type IExecuteFunctions, type ILoadOptionsFunctions, type INodeExecutionData, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
export declare class ZohoZeptomail implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getListMailagent(this: ILoadOptionsFunctions): Promise<{
                name: string;
                value: string;
            }[]>;
            getListTemplate(this: ILoadOptionsFunctions): Promise<{
                name: string;
                value: string;
            }[]>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
