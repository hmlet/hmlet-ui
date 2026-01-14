// Intent registry maps business intent -> component props.
// Keep this explicit and reviewable.
// IMPORTANT: Only use variants/sizes that exist in @hmlet/ui.

export const INTENT_REGISTRY = {
  Button: {
    'primary-cta': {variant: 'primary', size: 'lg'},
    'secondary-cta': {variant: 'secondary'},
    approval: {variant: 'success'},
    rejection: {variant: 'destructive'},
    assignment: {variant: 'secondary'},
    handover: {variant: 'primary'},
    confirmation: {variant: 'primary'},
    destructive: {variant: 'destructive', requiresConfirmation: true},
  },

  Badge: {
    scheduled: {variant: 'outline'},
    'in-progress': {variant: 'secondary'},
    completed: {variant: 'default'},
    blocked: {variant: 'destructive'},
    'attention-required': {variant: 'destructive'},
    'sla-breach': {variant: 'destructive'},
  },

  // Alert only supports {default, destructive} today.
  Alert: {
    info: {variant: 'default'},
    warning: {variant: 'default'},
    success: {variant: 'default'},
    error: {variant: 'destructive'},
    'ops-alert': {variant: 'default'},
    'finance-alert': {variant: 'destructive'},
  },

  // Layout primitives
  Section: {
    // density -> paddingY
    comfortable: {paddingY: '12'},
    compact: {paddingY: '8'},
    dense: {paddingY: '6'},
    // optional role tweaks
    guest: {paddingY: '12'},
    admin: {paddingY: '8'},
  },

  Stack: {
    // density -> gap
    comfortable: {gap: '4'},
    compact: {gap: '3'},
    dense: {gap: '2'},
    // urgency -> tighter spacing
    urgent: {gap: '2'},
    'time-sensitive': {gap: '3'},
    normal: {gap: '4'},
  },

  Grid: {
    comfortable: {gap: '6'},
    compact: {gap: '4'},
    dense: {gap: '2'},
  },

  Box: {
    comfortable: {padding: '4'},
    compact: {padding: '3'},
    dense: {padding: '2'},
  },
}
