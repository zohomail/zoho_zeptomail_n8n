"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFields = exports.eventOperations = void 0;
exports.eventOperations = [
    {
        displayName: 'Action Event',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['event'],
            },
        },
        options: [
            {
                name: 'Create an Event',
                value: 'create',
                description: 'Creates an event in the specified calendar',
                action: 'Create New Event',
            },
            {
                name: 'Update an Event',
                value: 'update',
                description: 'Updates an event in the specified calendar',
                action: 'Update Event',
            },
            {
                name: 'Delete an Event',
                value: 'delete',
                description: 'Deletes an event from the specified calendar',
                action: 'Delete Event',
            },
            {
                name: 'Quick Add an Event',
                value: 'quick_event',
                description: 'Creates an event from a piece of text.',
                action: 'Quick Add Event',
            },
        ],
        default: 'create',
    },
];
exports.eventFields = [
    {
        displayName: 'Calendar',
        name: 'calendar_id',
        type: 'options',
        default: '',
        description: 'Select a calendar to connect',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update', 'delete'],
            },
        },
        typeOptions: {
            loadOptionsMethod: 'getListCalendar',
        },
        required: true,
    },
    {
        displayName: 'Event',
        name: 'event',
        type: 'options',
        default: 'Specify the event you want to update or Delete.',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['update', 'delete'],
            },
        },
        typeOptions: {
            loadOptionsMethod: 'getListEvent',
            loadOptionsDependsOn: ['calendar_id']
        },
        required: true,
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        description: 'Specify the name of the event.',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
        required: true,
    },
    {
        displayName: 'Start time',
        name: 'start',
        type: 'dateTime',
        description: 'Specify a start date and time for the event.',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
        required: true,
    },
    {
        displayName: 'End time',
        name: 'end',
        type: 'dateTime',
        description: 'Specify a date and time for when the event ends.',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
        required: true,
    },
    {
        displayName: 'Is all day',
        name: 'isallday',
        type: 'boolean',
        description: 'Specify if the event is an all day event.',
        default: false,
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Color',
        name: 'color',
        type: 'options',
        description: 'Choose a preferred color for this event.',
        default: '#008000',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                name: 'Red',
                value: '#FF0000',
            },
            {
                name: 'Blue',
                value: '#0000FF',
            },
            {
                name: 'Green',
                value: '#008000',
            },
            {
                name: 'Yellow',
                value: '#FFFF00',
            },
            {
                name: 'Pink',
                value: '#FFC0CB',
            },
            {
                name: 'Lavender',
                value: '#E6E6FA',
            },
            {
                name: 'Turquoise',
                value: '#40E0D0',
            },
        ]
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        description: 'Provide a description for this event.',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Location',
        name: 'location',
        type: 'string',
        description: 'Specify where the event takes place',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Private',
        name: 'isprivate',
        type: 'boolean',
        description: 'Specify if this event is private.',
        default: false,
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Attendees',
        name: 'attendees',
        type: 'string',
        description: 'For multiple attendees email addresses, separate with comma',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Add to free/busy schedule',
        name: 'transparency',
        type: 'options',
        description: 'Specify whether this event should be added to your free/busy schedule',
        default: '0',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                name: 'True',
                value: '0',
            },
            {
                name: 'False',
                value: '1',
            },
        ],
    },
    {
        displayName: 'Allow Forward',
        name: 'allowForwarding',
        type: 'boolean',
        description: 'Specify if this event can be forwarded by your attendees.',
        default: false,
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Describe Event',
        name: 'saddtext',
        type: 'string',
        description: 'Description of the new event.',
        default: '',
        displayOptions: {
            show: {
                resource: ['event'],
                operation: ['quick_event'],
            },
        },
        required: true
    },
];
//# sourceMappingURL=EventDescription.js.map