import { Position } from 'reactflow';

export const inputNodeConfig = {
  title: 'Input',
  nodeType: 'customInput',
  icon: '📥',
  fields: [
    {
      name: 'inputName',
      label: 'Name',
      type: 'text',
      defaultValue: (id) => id.replace('customInput-', 'input_'),
      placeholder: 'Enter input name'
    },
    {
      name: 'inputType',
      label: 'Type',
      type: 'select',
      defaultValue: 'Text',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'File', label: 'File' }
      ]
    }
  ],
  handles: [
    {
      type: 'source',
      position: Position.Right,
      name: 'value'
    }
  ]
};

export const outputNodeConfig = {
  title: 'Output',
  nodeType: 'customOutput',
  icon: '📤',
  fields: [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      defaultValue: (id) => id.replace('customOutput-', 'output_'),
      placeholder: 'Enter output name'
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      defaultValue: 'Text',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' }
      ]
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'value'
    }
  ]
};

export const llmNodeConfig = {
  title: 'LLM',
  nodeType: 'llm',
  icon: '🤖',
  description: 'Large Language Model',
  fields: [],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'system',
      index: 0,
      total: 2
    },
    {
      type: 'target',
      position: Position.Left,
      name: 'prompt',
      index: 1,
      total: 2
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'response'
    }
  ]
};

export const textNodeConfig = {
  title: 'Text',
  nodeType: 'text',
  icon: '📝',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'text',
      defaultValue: '{{input}}',
      placeholder: 'Enter text'
    }
  ],
  handles: [
    {
      type: 'source',
      position: Position.Right,
      name: 'output'
    }
  ]
};

// NEW NODE CONFIGURATIONS - Demonstrating flexibility

export const filterNodeConfig = {
  title: 'Filter',
  description: 'Filter data based on conditions',
  fields: [
    {
      name: 'filterType',
      label: 'Filter Type:',
      type: 'select',
      defaultValue: 'contains',
      options: [
        { value: 'contains', label: 'Contains' },
        { value: 'equals', label: 'Equals' },
        { value: 'startsWith', label: 'Starts With' },
        { value: 'regex', label: 'Regex' }
      ]
    },
    {
      name: 'filterValue',
      label: 'Value:',
      type: 'text',
      defaultValue: '',
      placeholder: 'Enter filter value'
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
      name: 'output',
      index: 0,
      total: 2
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'filtered',
      index: 1,
      total: 2
    }
  ],
  style: {
    width: 220,
    border: '2px solid #4CAF50',
    borderRadius: 8,
    background: '#f0f8f0'
  }
};

export const transformNodeConfig = {
  title: 'Transform',
  description: 'Transform text data',
  fields: [
    {
      name: 'operation',
      label: 'Operation:',
      type: 'select',
      defaultValue: 'uppercase',
      options: [
        { value: 'uppercase', label: 'UPPERCASE' },
        { value: 'lowercase', label: 'lowercase' },
        { value: 'trim', label: 'Trim' },
        { value: 'reverse', label: 'Reverse' }
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
  ],
  style: {
    width: 200,
    border: '2px solid #2196F3',
    borderRadius: 8,
    background: '#e3f2fd'
  }
};

export const mergeNodeConfig = {
  title: 'Merge',
  description: 'Combine multiple inputs',
  fields: [
    {
      name: 'separator',
      label: 'Separator:',
      type: 'text',
      defaultValue: ' ',
      placeholder: 'Enter separator'
    },
    {
      name: 'mergeOrder',
      label: 'Order:',
      type: 'select',
      defaultValue: 'sequential',
      options: [
        { value: 'sequential', label: 'Sequential' },
        { value: 'reverse', label: 'Reverse' }
      ]
    }
  ],
  handles: [
    {
      type: 'target',
      position: Position.Left,
      name: 'input1',
      index: 0,
      total: 3
    },
    {
      type: 'target',
      position: Position.Left,
      name: 'input2',
      index: 1,
      total: 3
    },
    {
      type: 'target',
      position: Position.Left,
      name: 'input3',
      index: 2,
      total: 3
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'merged'
    }
  ],
  style: {
    width: 220,
    height: 120,
    border: '2px solid #FF9800',
    borderRadius: 8,
    background: '#fff3e0'
  }
};

export const validatorNodeConfig = {
  title: 'Validator',
  description: 'Validate input data',
  fields: [
    {
      name: 'validationType',
      label: 'Validation:',
      type: 'select',
      defaultValue: 'notEmpty',
      options: [
        { value: 'notEmpty', label: 'Not Empty' },
        { value: 'email', label: 'Email' },
        { value: 'url', label: 'URL' },
        { value: 'number', label: 'Number' }
      ]
    },
    {
      name: 'strictMode',
      label: 'Strict Mode',
      type: 'checkbox',
      defaultValue: false
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
      name: 'valid',
      index: 0,
      total: 2
    },
    {
      type: 'source',
      position: Position.Right,
      name: 'invalid',
      index: 1,
      total: 2
    }
  ],
  style: {
    width: 220,
    border: '2px solid #9C27B0',
    borderRadius: 8,
    background: '#f3e5f5'
  }
};

export const noteNodeConfig = {
  title: 'Note',
  description: 'Add comments and documentation',
  fields: [
    {
      name: 'noteText',
      label: 'Note:',
      type: 'textarea',
      defaultValue: 'Add your notes here...',
      rows: 4,
      placeholder: 'Enter notes'
    },
    {
      name: 'priority',
      label: 'Priority:',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { value: 'low', label: 'Low' },
        { value: 'normal', label: 'Normal' },
        { value: 'high', label: 'High' }
      ]
    }
  ],
  handles: [],
  style: {
    width: 250,
    height: 150,
    border: '2px dashed #FFC107',
    borderRadius: 8,
    background: '#fffde7'
  }
};
