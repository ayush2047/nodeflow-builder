import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { styles, colors, nodeTypeStyles, nodeIcons } from '../styles';

export const EnhancedTextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 220, height: 'auto' });
  const textareaRef = useRef(null);

  const extractVariables = (textContent) => {
    const regex = /\{\{[\s]*([a-zA-Z_$][a-zA-Z0-9_$]*)[\s]*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(textContent)) !== null) {
      const variableName = match[1].trim();
      if (!matches.includes(variableName)) {
        matches.push(variableName);
      }
    }

    return matches;
  };

  const calculateDimensions = () => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const lines = text.split('\n').length;
    const longestLine = Math.max(...text.split('\n').map(line => line.length));

    const calculatedWidth = Math.min(500, Math.max(220, longestLine * 8 + 40));

    const minHeight = 100;
    const lineHeight = 20;
    const padding = 60;
    const calculatedHeight = Math.max(minHeight, lines * lineHeight + padding);

    setDimensions({
      width: calculatedWidth,
      height: calculatedHeight
    });
  };

  useEffect(() => {
    const detectedVars = extractVariables(text);
    setVariables(detectedVars);
    calculateDimensions();
  }, [text]);

  useEffect(() => {
    calculateDimensions();
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const renderVariableHandles = () => {
    if (variables.length === 0) return null;

    return variables.map((varName, index) => {
      const totalVars = variables.length;
      const percentage = ((index + 1) / (totalVars + 1)) * 100;

      return (
        <Handle
          key={`${id}-${varName}`}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{
            ...styles.handle,
            ...styles.handleTarget,
            top: `${percentage}%`,
          }}
          title={varName}
        >
          <div
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '10px',
              color: colors.textSecondary,
              backgroundColor: colors.bgDark,
              padding: '2px 6px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              border: `1px solid ${colors.border}`,
            }}
          >
            {varName}
          </div>
        </Handle>
      );
    });
  };

  const nodeType = 'text';
  const typeStyles = nodeTypeStyles[nodeType] || {};
  const icon = nodeIcons[nodeType] || '📝';

  const nodeStyle = {
    ...styles.baseNode,
    ...typeStyles,
    width: dimensions.width,
    height: dimensions.height,
    minHeight: '100px',
    transition: 'width 0.3s ease, height 0.3s ease',
  };

  return (
    <div style={nodeStyle}>
      {/* Render variable handles (dynamic based on text content) */}
      {renderVariableHandles()}

      {/* Node header */}
      <div style={styles.nodeHeader}>
        <span>{icon}</span>
        <span>Text</span>
      </div>

      {/* Variable count indicator */}
      {variables.length > 0 && (
        <div
          style={{
            fontSize: '11px',
            color: colors.textSecondary,
            marginBottom: '8px',
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontWeight: 600 }}>Variables:</span>
          {variables.map((v, i) => (
            <span
              key={v}
              style={{
                backgroundColor: colors.bgDark,
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '10px',
                border: `1px solid ${colors.handleTarget}`,
              }}
            >
              {v}
            </span>
          ))}
        </div>
      )}

      {/* Text input field */}
      <div style={styles.fieldContainer}>
        <label style={styles.fieldLabel}>Text</label>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text. Use {{variableName}} for inputs."
          rows={Math.max(3, text.split('\n').length)}
          style={{
            ...styles.textarea,
            width: '100%',
            minHeight: '60px',
            fontFamily: 'monospace',
            fontSize: '13px',
            lineHeight: '1.5',
          }}
        />
      </div>

      {/* Helper text */}
      <div
        style={{
          fontSize: '10px',
          color: colors.textMuted,
          marginTop: '4px',
          lineHeight: '1.4',
        }}
      >
        Tip: Use <code style={{ 
          backgroundColor: colors.bgDark, 
          padding: '1px 4px', 
          borderRadius: '2px' 
        }}>{'{{variableName}}'}</code> to create inputs
      </div>

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          ...styles.handle,
          ...styles.handleSource,
        }}
      />
    </div>
  );
};
