"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwOnErrorStatus = throwOnErrorStatus;
exports.zohoZeptomailApiRequest = zohoZeptomailApiRequest;
exports.getPicklistMailagentOptions = getPicklistMailagentOptions;
exports.getPicklistTemplateOptions = getPicklistTemplateOptions;
exports.getDomain = getDomain;
exports.getRecipientAddresses = getRecipientAddresses;
exports.getReplyToAddresses = getReplyToAddresses;
const n8n_workflow_1 = require("n8n-workflow");
function throwOnErrorStatus(responseData) {
    if (responseData.error) {
        const error = responseData.error;
        if (error.details && error.details.length > 0) {
            const errorMessage = error.details[0].message;
            if (errorMessage) {
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), new Error(errorMessage));
            }
        }
    }
}
async function zohoZeptomailApiRequest(method, endpoint, body = {}, qs = {}, uri) {
    const { oauthTokenData } = await this.getCredentials('zohoZeptomailOAuth2Api');
    const options = {
        body: body,
        method,
        qs,
        uri: `https://zeptomail.${getDomain(oauthTokenData.api_domain)}/${endpoint}`,
        json: true,
    };
    if (!Object.keys(body).length) {
        delete options.body;
    }
    if (!Object.keys(qs).length) {
        delete options.qs;
    }
    try {
        const responseData = await this.helpers.requestOAuth2?.call(this, 'zohoZeptomailOAuth2Api', options);
        if (responseData === undefined)
            return [];
        throwOnErrorStatus.call(this, responseData);
        return responseData;
    }
    catch (error) {
        const args = error ? {
            message: error.error.error.message || 'The Zoho ZeptoMail API returned an error.',
            description: JSON.stringify(error.error.error.details[0].message),
        }
            : undefined;
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, args);
    }
}
async function getPicklistMailagentOptions() {
    const responseData = (await zohoZeptomailApiRequest.call(this, 'GET', 'portal/v1.0/mailagents', {}));
    const pickListOptions = responseData.data;
    if (!pickListOptions)
        return [];
    return pickListOptions.map((option) => ({
        name: option.mailagent_name,
        value: option.mailagent_key,
    }));
}
async function getPicklistTemplateOptions(targetField) {
    const responseData = (await zohoZeptomailApiRequest.call(this, 'GET', `portal/v1.0/mailagents/${targetField}/template`, {}));
    const pickListOptions = responseData.data[0].data;
    if (!pickListOptions)
        return [];
    return pickListOptions.map((option) => ({
        name: option.template_name,
        value: option.template_key,
    }));
}
function getDomain(domain) {
    const value = {
        ".com": "zoho.com",
        ".eu": "zoho.eu",
        ".com.cn": "zoho.com.cn",
        ".com.au": "zoho.com.au",
        ".in": "zoho.in",
        ".ca": "zohocloud.ca",
        ".sa": "zoho.sa",
        ".jp": "zoho.jp"
    };
    const suffixes = new Set(Object.keys(value));
    for (const key of suffixes) {
        if (domain.endsWith(key)) {
            return value[key];
        }
    }
    return undefined;
}
function getRecipientAddresses(address) {
    if (address === undefined || address === null || address === '') {
        return '';
    }
    address = address.toString().trim();
    const addresss = [];
    address.split(',').forEach((email) => {
        addresss.push({ email_address: { address: email.trim() } });
    });
    return JSON.stringify(addresss);
}
function getReplyToAddresses(address) {
    if (address === undefined || address === null || address === '') {
        return '';
    }
    address = address.toString().trim();
    const addresss = [];
    address.split(',').forEach((email) => {
        addresss.push({ address: email.trim() });
    });
    return JSON.stringify(addresss);
}
//# sourceMappingURL=GenericFunctions.js.map