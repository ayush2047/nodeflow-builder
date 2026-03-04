import { Position } from 'reactflow';

export const emailNodeConfig = {
  title: 'Email',
  nodeType: 'email',
  icon: '📧',
  description: 'Send email messages',
  fields: [
    {
      name: 'recipient',
      label: 'To',
      type: 'text',
      defaultValue: '',
      placeholder: 'user@example.com'
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      defaultValue: '',
      placeholder: 'Email subject'
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'message'
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'sent'
    }
  ]
};

export const delayNodeConfig = {
  title: 'Delay',
  nodeType: 'delay',
  icon: '⏱️',
  description: 'Wait before continuing',
  fields: [
    {
      name: 'seconds',
      label: 'Seconds',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 3600,
      step: 1
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'input'
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'output'
    }
  ]
};

export const conditionNodeConfig = {
  title: 'Condition',
  nodeType: 'condition',
  icon: '🔀',
  description: 'Branch based on condition',
  fields: [
    {
      name: 'operator',
      label: 'Operator',
      type: 'select',
      defaultValue: 'equals',
      options: [
        { value: 'equals', label: 'Equals (=)' },
        { value: 'notEquals', label: 'Not Equals (≠)' },
        { value: 'greaterThan', label: 'Greater Than (>)' },
        { value: 'lessThan', label: 'Less Than (<)' }
      ]
    },
    {
      name: 'value',
      label: 'Compare To',
      type: 'text',
      defaultValue: '',
      placeholder: 'Value to compare'
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'input'
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'true',
      index: 0,
      total: 2
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'false',
      index: 1,
      total: 2
    }
  ]
};

export const databaseNodeConfig = {
  title: 'Database',
  nodeType: 'database',
  icon: '💾',
  description: 'Store or retrieve data',
  fields: [
    {
      name: 'operation',
      label: 'Operation',
      type: 'select',
      defaultValue: 'save',
      options: [
        { value: 'save', label: 'Save Data' },
        { value: 'load', label: 'Load Data' },
        { value: 'delete', label: 'Delete Data' }
      ]
    },
    {
      name: 'key',
      label: 'Key',
      type: 'text',
      defaultValue: '',
      placeholder: 'data_key'
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'data'
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'result'
    }
  ]
};

export const logNodeConfig = {
  title: 'Log',
  nodeType: 'log',
  icon: '📋',
  description: 'Print to console',
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      defaultValue: 'Debug',
      placeholder: 'Log label'
    },
    {
      name: 'level',
      label: 'Level',
      type: 'select',
      defaultValue: 'info',
      options: [
        { value: 'info', label: 'Info' },
        { value: 'warning', label: 'Warning' },
        { value: 'error', label: 'Error' }
      ]
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'input'
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'output'
    }
  ]
};
