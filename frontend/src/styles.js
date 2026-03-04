export const colors = {
  primary: '#6366F1',
  primaryDark: '#4F46E5',
  primaryLight: '#818CF8',
  
  accent: '#EC4899',
  accentLight: '#F472B6',
  
  bgDark: '#0F172A',
  bgMedium: '#1E293B',
  bgLight: '#334155',
  bgCard: '#1E293B',
  
  surface: '#1E293B',
  surfaceHover: '#334155',
  
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  
  border: '#334155',
  borderLight: '#475569',
  borderFocus: '#6366F1',
  
  success: '#10B981',
  successLight: '#34D399',
  warning: '#F59E0B',
  warningLight: '#FBBF24',
  error: '#EF4444',
  errorLight: '#F87171',
  info: '#3B82F6',
  infoLight: '#60A5FA',
  
  nodeInput: '#10B981',
  nodeOutput: '#EC4899',
  nodeLLM: '#8B5CF6',
  nodeText: '#3B82F6',
  nodeEmail: '#10B981',
  nodeDelay: '#F59E0B',
  nodeCondition: '#3B82F6',
  nodeDatabase: '#8B5CF6',
  nodeLog: '#6B7280',
  
  handleSource: '#10B981',
  handleTarget: '#EC4899',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  glow: '0 0 20px rgba(99, 102, 241, 0.3)',
  glowHover: '0 0 30px rgba(99, 102, 241, 0.5)',
};

export const transitions = {
  fast: 'all 0.15s ease-in-out',
  normal: 'all 0.3s ease-in-out',
  slow: 'all 0.5s ease-in-out',
};

export const styles = {
  app: {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMedium} 100%)`,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: colors.textPrimary,
  },

  toolbar: {
    background: colors.surface,
    borderBottom: `1px solid ${colors.border}`,
    padding: spacing.lg,
    boxShadow: shadows.md,
  },

  toolbarTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.md,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  },

  toolbarSubtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  toolbarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: spacing.md,
    maxWidth: '1400px',
  },

  // Draggable Node (in toolbar)
  draggableNode: {
    cursor: 'grab',
    minWidth: '120px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: borderRadius.lg,
    border: `2px solid ${colors.border}`,
    background: colors.bgCard,
    transition: transitions.normal,
    boxShadow: shadows.sm,
    gap: spacing.xs,
    position: 'relative',
    overflow: 'hidden',
  },

  draggableNodeHover: {
    transform: 'translateY(-2px)',
    boxShadow: shadows.lg,
    borderColor: colors.borderFocus,
  },

  draggableNodeLabel: {
    color: colors.textPrimary,
    fontSize: '14px',
    fontWeight: '600',
    zIndex: 1,
  },

  draggableNodeIcon: {
    fontSize: '24px',
    zIndex: 1,
  },

  // Canvas/UI container
  canvasContainer: {
    height: '70vh',
    background: colors.bgDark,
    position: 'relative',
  },

  // Submit button
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    background: colors.surface,
    borderTop: `1px solid ${colors.border}`,
  },

  button: {
    padding: `${spacing.md} ${spacing.xl}`,
    fontSize: '16px',
    fontWeight: '600',
    color: colors.textPrimary,
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    border: 'none',
    borderRadius: borderRadius.lg,
    cursor: 'pointer',
    transition: transitions.normal,
    boxShadow: shadows.md,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  },

  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: shadows.xl,
  },

  buttonActive: {
    transform: 'translateY(0)',
  },

  // Base Node Styles
  baseNode: {
    background: colors.surface,
    border: `2px solid ${colors.border}`,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    boxShadow: shadows.md,
    transition: transitions.normal,
    minWidth: '220px',
  },

  baseNodeSelected: {
    borderColor: colors.primary,
    boxShadow: shadows.glow,
  },

  baseNodeHover: {
    boxShadow: shadows.lg,
  },

  nodeHeader: {
    fontSize: '16px',
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xs,
  },

  nodeDescription: {
    fontSize: '12px',
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: '1.4',
  },

  // Form fields
  fieldContainer: {
    marginBottom: spacing.md,
  },

  fieldLabel: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  input: {
    width: '100%',
    padding: spacing.sm,
    fontSize: '14px',
    color: colors.textPrimary,
    background: colors.bgDark,
    border: `1px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    outline: 'none',
    transition: transitions.fast,
    fontFamily: 'inherit',
  },

  inputFocus: {
    borderColor: colors.borderFocus,
    boxShadow: `0 0 0 3px rgba(99, 102, 241, 0.1)`,
  },

  textarea: {
    width: '100%',
    padding: spacing.sm,
    fontSize: '14px',
    color: colors.textPrimary,
    background: colors.bgDark,
    border: `1px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    outline: 'none',
    transition: transitions.fast,
    fontFamily: 'inherit',
    resize: 'vertical',
  },

  select: {
    width: '100%',
    padding: spacing.sm,
    fontSize: '14px',
    color: colors.textPrimary,
    background: colors.bgDark,
    border: `1px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    outline: 'none',
    transition: transitions.fast,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },

  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    accentColor: colors.primary,
  },

  // Handle styles
  handle: {
    width: '12px',
    height: '12px',
    border: '2px solid',
    borderRadius: '50%',
    transition: transitions.fast,
  },

  handleSource: {
    background: colors.handleSource,
    borderColor: colors.handleSource,
  },

  handleTarget: {
    background: colors.handleTarget,
    borderColor: colors.handleTarget,
  },
};

// Node type specific styles
export const nodeTypeStyles = {
  customInput: {
    borderColor: colors.nodeInput,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(16, 185, 129, 0.05) 100%)`,
  },
  
  customOutput: {
    borderColor: colors.nodeOutput,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(236, 72, 153, 0.05) 100%)`,
  },
  
  llm: {
    borderColor: colors.nodeLLM,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(139, 92, 246, 0.05) 100%)`,
  },
  
  text: {
    borderColor: colors.nodeText,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(59, 130, 246, 0.05) 100%)`,
  },
  
  email: {
    borderColor: colors.nodeEmail,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(16, 185, 129, 0.05) 100%)`,
  },
  
  delay: {
    borderColor: colors.nodeDelay,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(245, 158, 11, 0.05) 100%)`,
  },
  
  condition: {
    borderColor: colors.nodeCondition,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(59, 130, 246, 0.05) 100%)`,
  },
  
  database: {
    borderColor: colors.nodeDatabase,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(139, 92, 246, 0.05) 100%)`,
  },
  
  log: {
    borderColor: colors.nodeLog,
    background: `linear-gradient(135deg, ${colors.surface} 0%, rgba(107, 114, 128, 0.05) 100%)`,
  },
};

// Icons mapping for nodes (using emojis as fallback, can be replaced with icon library)
export const nodeIcons = {
  customInput: '📥',
  customOutput: '📤',
  llm: '🤖',
  text: '📝',
  email: '📧',
  delay: '⏱️',
  condition: '🔀',
  database: '💾',
  log: '📋',
};

// Helper function to get node color
export const getNodeColor = (type) => {
  const colorMap = {
    customInput: colors.nodeInput,
    customOutput: colors.nodeOutput,
    llm: colors.nodeLLM,
    text: colors.nodeText,
    email: colors.nodeEmail,
    delay: colors.nodeDelay,
    condition: colors.nodeCondition,
    database: colors.nodeDatabase,
    log: colors.nodeLog,
  };
  return colorMap[type] || colors.primary;
};
