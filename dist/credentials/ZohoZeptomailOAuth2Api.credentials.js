"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoZeptomailOAuth2Api = void 0;
class ZohoZeptomailOAuth2Api {
    constructor() {
        this.name = 'zohoZeptomailOAuth2Api';
        this.extends = ['oAuth2Api'];
        this.displayName = 'Zoho ZeptoMail OAuth2 API';
        this.documentationUrl = 'zohozeptomail';
        this.properties = [
            {
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'hidden',
                default: 'authorizationCode',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'options',
                options: [
                    {
                        name: 'AU - https://accounts.zoho.com.au/oauth/v2/auth',
                        value: 'https://accounts.zoho.com.au/oauth/v2/auth'
                    },
                    {
                        name: 'CN - https://accounts.zoho.com.cn/oauth/v2/auth',
                        value: 'https://accounts.zoho.com.cn/oauth/v2/auth'
                    },
                    {
                        name: 'EU - https://accounts.zoho.eu/oauth/v2/auth',
                        value: 'https://accounts.zoho.eu/oauth/v2/auth'
                    },
                    {
                        name: 'IN - https://accounts.zoho.in/oauth/v2/auth',
                        value: 'https://accounts.zoho.in/oauth/v2/auth'
                    },
                    {
                        name: 'US - https://accounts.zoho.com/oauth/v2/auth',
                        value: 'https://accounts.zoho.com/oauth/v2/auth'
                    },
                    {
                        name: 'CA - https://accounts.zohocloud.ca/oauth/v2/auth',
                        value: 'https://accounts.zohocloud.ca/oauth/v2/auth'
                    },
                    {
                        name: 'SA - https://accounts.zoho.sa/oauth/v2/auth',
                        value: 'https://accounts.zoho.sa/oauth/v2/auth'
                    },
                    {
                        name: 'JP - https://accounts.zoho.jp/oauth/v2/auth',
                        value: 'https://accounts.zoho.jp/oauth/v2/auth',
                    }
                ],
                default: 'https://accounts.zoho.com/oauth/v2/auth',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'options',
                options: [
                    {
                        name: 'AU - https://accounts.zoho.com.au/oauth/v2/token',
                        value: 'https://accounts.zoho.com.au/oauth/v2/token'
                    },
                    {
                        name: 'CN - https://accounts.zoho.com.cn/oauth/v2/token',
                        value: 'https://accounts.zoho.com.cn/oauth/v2/token'
                    },
                    {
                        name: 'EU - https://accounts.zoho.eu/oauth/v2/token',
                        value: 'https://accounts.zoho.eu/oauth/v2/token'
                    },
                    {
                        name: 'IN - https://accounts.zoho.in/oauth/v2/token',
                        value: 'https://accounts.zoho.in/oauth/v2/token'
                    },
                    {
                        name: 'US - https://accounts.zoho.com/oauth/v2/token',
                        value: 'https://accounts.zoho.com/oauth/v2/token'
                    },
                    {
                        name: 'CA - https://accounts.zohocloud.ca/oauth/v2/token',
                        value: 'https://accounts.zohocloud.ca/oauth/v2/token'
                    },
                    {
                        name: 'SA - https://accounts.zoho.sa/oauth/v2/token',
                        value: 'https://accounts.zoho.sa/oauth/v2/token'
                    },
                    {
                        name: 'JP - https://accounts.zoho.jp/oauth/v2/token',
                        value: 'https://accounts.zoho.jp/oauth/v2/token',
                    }
                ],
                default: 'https://accounts.zoho.com/oauth/v2/token',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: 'transmail.accounts.READ,transmail.email.CREATE,transmail.mailagent.READ,transmail.webhooks.CREATE,transmail.webhooks.DELETE,transmail.webhooks.READ,transmail.bounceSetup.READ,transmail.accounts.READ,transmail.email.CREATE,transmail.mailagent.READ,transmail.bounceSetup.READ,transmail.domain.READ,transmail.MailTemplates.READ',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: 'access_type=offline',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'body',
            },
        ];
    }
}
exports.ZohoZeptomailOAuth2Api = ZohoZeptomailOAuth2Api;
//# sourceMappingURL=ZohoZeptomailOAuth2Api.credentials.js.map