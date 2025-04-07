"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoZeptomail = void 0;
const descriptions_1 = require("./descriptions");
const GenericFunctions_1 = require("./GenericFunctions");
class ZohoZeptomail {
    constructor() {
        this.description = {
            displayName: 'Zoho Zeptomail',
            name: 'zohoZeptomail',
            icon: 'file:ZohoZeptoMail.png',
            group: ['transform'],
            subtitle: '={{$parameter["operation"]}}',
            version: 1,
            description: 'Consume Zoho ZeptoMail API',
            defaults: {
                name: 'Zoho ZeptoMail',
            },
            usableAsTool: true,
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: 'zohoZeptomailOAuth2Api',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    required: true,
                    options: [
                        {
                            name: 'Message',
                            value: 'message',
                        },
                    ],
                    default: 'message',
                },
                ...descriptions_1.messageOperations,
                ...descriptions_1.messageFields
            ],
        };
        this.methods = {
            loadOptions: {
                async getListMailagent() {
                    return await GenericFunctions_1.getPicklistMailagentOptions.call(this);
                },
                async getListTemplate() {
                    const mailagent = this.getCurrentNodeParameter('mailagent', { extractValue: true });
                    ;
                    return await GenericFunctions_1.getPicklistTemplateOptions.call(this, mailagent.toString());
                }
            }
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        let responseData;
        for (let i = 0; i < items.length; i++) {
            try {
                if (resource === 'message') {
                    if (operation === 'sendmail') {
                        const body = {
                            mailagent_key: this.getNodeParameter('mailagent', i),
                            from: this.getNodeParameter('fromaddress', i),
                            subject: this.getNodeParameter('subject', i),
                            to: (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('toaddress', i)),
                        };
                        if (this.getNodeParameter('htmlbody', i) !== undefined && this.getNodeParameter('htmlbody', i) !== '') {
                            body.htmlbody = this.getNodeParameter('htmlbody', i);
                        }
                        if (this.getNodeParameter('replyto', i) !== undefined && this.getNodeParameter('replyto', i) !== '') {
                            body.reply_to = (0, GenericFunctions_1.getReplyToAddresses)(this.getNodeParameter('replyto', i));
                        }
                        if (this.getNodeParameter('cc', i) !== undefined && this.getNodeParameter('cc', i) !== '') {
                            body.cc = (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('cc', i));
                        }
                        if (this.getNodeParameter('bcc', i) !== undefined && this.getNodeParameter('bcc', i) !== '') {
                            body.bcc = (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('bcc', i));
                        }
                        const attachment = this.getNodeParameter('attachment', i);
                        if (attachment && typeof attachment === 'object' && Object.keys(attachment).length > 0) {
                            body.attachments = [this.getNodeParameter('attachment', i)];
                        }
                        responseData = await GenericFunctions_1.zohoZeptomailApiRequest.call(this, 'POST', `v1.0/email`, body, {});
                        responseData = responseData.data;
                    }
                    else if (operation === 'sendtemplatemail') {
                        const body = {
                            mailagent_key: this.getNodeParameter('mailagent', i),
                            from: this.getNodeParameter('fromaddress', i),
                            to: (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('toaddress', i)),
                            mail_template_key: this.getNodeParameter('template', i),
                        };
                        if (this.getNodeParameter('replyto', i) !== undefined && this.getNodeParameter('replyto', i) !== '') {
                            body.reply_to = (0, GenericFunctions_1.getReplyToAddresses)(this.getNodeParameter('replyto', i));
                        }
                        if (this.getNodeParameter('cc', i) !== undefined && this.getNodeParameter('cc', i) !== '') {
                            body.cc = (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('cc', i));
                        }
                        if (this.getNodeParameter('bcc', i) !== undefined && this.getNodeParameter('bcc', i) !== '') {
                            body.bcc = (0, GenericFunctions_1.getRecipientAddresses)(this.getNodeParameter('bcc', i));
                        }
                        if (this.getNodeParameter('mergeinfo', i) !== undefined && this.getNodeParameter('mergeinfo', i) !== '') {
                            body.merge_info = this.getNodeParameter('mergeinfo', i);
                        }
                        responseData = await GenericFunctions_1.zohoZeptomailApiRequest.call(this, 'POST', `v1.0/email/template`, body, {});
                        responseData = responseData.data;
                    }
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ error: error.details[0].message, json: {} });
                    continue;
                }
                throw error;
            }
            const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
            returnData.push(...executionData);
        }
        return [returnData];
    }
}
exports.ZohoZeptomail = ZohoZeptomail;
//# sourceMappingURL=ZohoZeptomail.node.js.map