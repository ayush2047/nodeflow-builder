import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { styles, colors, nodeTypeStyles, nodeIcons } from '../styles';

export const BaseNode = ({ id, data, config }) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialValues = {};
    config.fields?.forEach(field => {
      initialValues[field.name] = data?.[field.name] ?? field.defaultValue ?? '';
    });
    return initialValues;
  });

  const [isFocused, setIsFocused] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const renderField = (field) => {
    const value = fieldValues[field.name];
    const isFieldFocused = isFocused[field.name];

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onFocus={() => setIsFocused({...isFocused, [field.name]: true})}
            onBlur={() => setIsFocused({...isFocused, [field.name]: false})}
            placeholder={field.placeholder}
            style={{
              ...styles.input,
              ...(isFieldFocused ? styles.inputFocus : {}),
              ...field.style
            }}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onFocus={() => setIsFocused({...isFocused, [field.name]: true})}
            onBlur={() => setIsFocused({...isFocused, [field.name]: false})}
            placeholder={field.placeholder}
            rows={field.rows || 3}
            style={{
              ...styles.textarea,
              ...(isFieldFocused ? styles.inputFocus : {}),
              ...field.style
            }}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleFieldChange(field.name, parseFloat(e.target.value) || 0)}
            onFocus={() => setIsFocused({...isFocused, [field.name]: true})}
            onBlur={() => setIsFocused({...isFocused, [field.name]: false})}
            min={field.min}
            max={field.max}
            step={field.step}
            placeholder={field.placeholder}
            style={{
              ...styles.input,
              ...(isFieldFocused ? styles.inputFocus : {}),
              ...field.style
            }}
          />
        );

      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            onFocus={() => setIsFocused({...isFocused, [field.name]: true})}
            onBlur={() => setIsFocused({...isFocused, [field.name]: false})}
            style={{
              ...styles.select,
              ...(isFieldFocused ? styles.inputFocus : {}),
              ...field.style
            }}
          >
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleFieldChange(field.name, e.target.checked)}
            style={{
              ...styles.checkbox,
              ...field.style
            }}
          />
        );

      case 'label':
        return <span style={{color: colors.textPrimary, ...field.style}}>{field.text || value}</span>;

      default:
        return null;
    }
  };

  const renderHandle = (handle, index) => {
    const position = handle.position || (handle.type === 'source' ? Position.Right : Position.Left);
    const handleId = handle.id || `${id}-${handle.name || index}`;
    
    let handleStyle = { 
      ...styles.handle,
      ...(handle.type === 'source' ? styles.handleSource : styles.handleTarget),
      ...handle.style 
    };
    
    if (handle.index !== undefined && handle.total !== undefined) {
      const percentage = ((handle.index + 1) / (handle.total + 1)) * 100;
      if (position === Position.Top || position === Position.Bottom) {
        handleStyle.left = `${percentage}%`;
      } else {
        handleStyle.top = `${percentage}%`;
      }
    }

    return (
      <Handle
        key={handleId}
        type={handle.type}
        position={position}
        id={handleId}
        style={handleStyle}
      />
    );
  };

  const nodeType = data?.nodeType || config.nodeType || 'default';
  const typeStyles = nodeTypeStyles[nodeType] || {};
  const icon = nodeIcons[nodeType] || config.icon || '📦';

  const nodeStyle = {
    ...styles.baseNode,
    ...typeStyles,
    ...config.style
  };

  return (
    <div style={nodeStyle} className={config.className}>
      {config.handles?.filter(h => h.type === 'target').map((handle, idx) => 
        renderHandle(handle, idx)
      )}

      <div style={{
        ...styles.nodeHeader,
        ...config.titleStyle
      }}>
        <span>{icon}</span>
        <span>{config.title}</span>
      </div>

      {config.description && (
        <div style={{ 
          ...styles.nodeDescription,
          ...config.descriptionStyle 
        }}>
          {config.description}
        </div>
      )}

      {config.fields?.map((field, idx) => (
        <div key={field.name || idx} style={styles.fieldContainer}>
          {field.label && (
            <label style={{ 
              ...styles.fieldLabel,
              ...field.labelStyle 
            }}>
              {field.label}
            </label>
          )}
          {renderField(field)}
        </div>
      ))}

      {config.handles?.filter(h => h.type === 'source').map((handle, idx) => 
        renderHandle(handle, idx)
      )}
    </div>
  );
};

export const createNode = (config) => {
  return (props) => <BaseNode {...props} config={config} />;
};
