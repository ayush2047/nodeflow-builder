import { useState } from 'react';
import { styles, nodeIcons, getNodeColor } from './styles';

export const DraggableNode = ({ type, label }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const onDragStart = (event, nodeType) => {
      const appData = { nodeType };
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
      setIsDragging(true);
    };

    const onDragEnd = (event) => {
      setIsDragging(false);
    };

    const nodeColor = getNodeColor(type);
    const icon = nodeIcons[type] || '📦';

    const baseStyle = {
      ...styles.draggableNode,
      ...(isHovering && !isDragging ? styles.draggableNodeHover : {}),
      cursor: isDragging ? 'grabbing' : 'grab',
      borderColor: nodeColor,
    };

    const iconBackgroundStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      background: `radial-gradient(circle at 50% 50%, ${nodeColor} 0%, transparent 70%)`,
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={baseStyle}
        draggable
      >
        <div style={iconBackgroundStyle}></div>
        <span style={styles.draggableNodeIcon}>{icon}</span>
        <span style={styles.draggableNodeLabel}>{label}</span>
      </div>
    );
};
  