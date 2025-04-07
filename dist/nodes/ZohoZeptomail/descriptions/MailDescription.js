"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailFields = void 0;
exports.mailFields = [
    {
        displayName: 'Calendar',
        name: 'calendar_id',
        type: 'options',
        default: '',
        description: 'Select a calendar to connect',
        displayOptions: {
            show: {
                action: ['sendmail'],
            },
        },
        typeOptions: {
            loadOptionsMethod: 'getListCalendar',
        },
        required: true,
    },
];
//# sourceMappingURL=MailDescription.js.map