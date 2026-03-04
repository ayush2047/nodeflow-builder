import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { styles } from './styles';
import {
  InputNode,
  OutputNode,
  LLMNode,
  TextNode,
  EmailNode,
  DelayNode,
  ConditionNode,
  DatabaseNode,
  LogNode
} from './nodes';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  email: EmailNode,
  delay: DelayNode,
  condition: ConditionNode,
  database: DatabaseNode,
  log: LogNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div ref={reactFlowWrapper} style={styles.canvasContainer}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
                defaultEdgeOptions={{
                  style: { stroke: '#6366F1', strokeWidth: 2 },
                  animated: true,
                }}
            >
                <Background 
                  color="#334155" 
                  gap={gridSize} 
                  style={{ background: '#0F172A' }}
                />
                <Controls 
                  style={{
                    button: {
                      backgroundColor: '#1E293B',
                      color: '#F1F5F9',
                      borderColor: '#334155',
                    }
                  }}
                />
                <MiniMap 
                  nodeColor={(node) => {
                    const colorMap = {
                      customInput: '#10B981',
                      customOutput: '#EC4899',
                      llm: '#8B5CF6',
                      text: '#3B82F6',
                      email: '#10B981',
                      delay: '#F59E0B',
                      condition: '#3B82F6',
                      database: '#8B5CF6',
                      log: '#6B7280',
                    };
                    return colorMap[node.type] || '#6366F1';
                  }}
                  maskColor="rgba(15, 23, 42, 0.8)"
                  style={{
                    backgroundColor: '#1E293B',
                  }}
                />
            </ReactFlow>
        </div>
        </>
    )
}
