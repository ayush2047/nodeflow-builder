import { DraggableNode } from './draggableNode';
import { styles } from './styles';

export const PipelineToolbar = () => {
    return (
        <div style={styles.toolbar}>
            <div style={styles.toolbarTitle}>
                <span>⚡</span>
                <span>Pipeline Builder</span>
            </div>
            <div style={styles.toolbarSubtitle}>
                Drag and drop nodes to create your workflow
            </div>
            <div style={styles.toolbarGrid}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='log' label='Log' />
            </div>
        </div>
    );
};
