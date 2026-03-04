import { createNode } from './BaseNode';
import {
  inputNodeConfig,
  outputNodeConfig,
  llmNodeConfig,
  textNodeConfig
} from './nodeConfigs';

import {
  emailNodeConfig,
  delayNodeConfig,
  conditionNodeConfig,
  databaseNodeConfig,
  logNodeConfig
} from './simpleNodeConfigs';

import { EnhancedTextNode } from './EnhancedTextNode';

export const InputNode = createNode(inputNodeConfig);
export const OutputNode = createNode(outputNodeConfig);
export const LLMNode = createNode(llmNodeConfig);

export const TextNode = EnhancedTextNode;

export const EmailNode = createNode(emailNodeConfig);
export const DelayNode = createNode(delayNodeConfig);
export const ConditionNode = createNode(conditionNodeConfig);
export const DatabaseNode = createNode(databaseNodeConfig);
export const LogNode = createNode(logNodeConfig);

export {
  inputNodeConfig,
  outputNodeConfig,
  llmNodeConfig,
  textNodeConfig,
  emailNodeConfig,
  delayNodeConfig,
  conditionNodeConfig,
  databaseNodeConfig,
  logNodeConfig
};
