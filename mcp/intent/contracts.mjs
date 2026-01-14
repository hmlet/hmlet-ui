// Intent contracts define what intent dimensions are meaningful per component.
// They act as guardrails (and a discovery surface for agents).
//
// NOTE: We keep this pragmatic:
// - Some components have explicit contracts below.
// - Everything else falls back to a sensible default by kind + capabilities.

export const INTENT_CONTRACTS = {
  // UI components (explicit examples)
  Button: {
    supports: {role: true, action: true, risk: true, urgency: true},
    defaults: {action: 'primary-cta'},
  },

  Badge: {
    supports: {operational: true, urgency: true},
  },

  Alert: {
    supports: {operational: true, risk: true, urgency: true, role: true},
  },

  // Layout primitives (explicit examples)
  Section: {
    supports: {role: true, density: true},
    defaults: {density: 'comfortable'},
  },

  Stack: {
    supports: {density: true, urgency: true},
  },

  Grid: {
    supports: {density: true},
  },

  Box: {
    supports: {density: true},
  },

  // Utility layout components typically should not receive intent.
  Spacer: {
    supports: {},
  },
}

export function getIntentContract(component) {
  return INTENT_CONTRACTS?.[component] ?? null
}

export function validateIntentAgainstContract({component, intent, contract}) {
  if (!intent) return null
  if (!contract) return null

  const supported = contract.supports ?? {}
  const unknownKeys = Object.keys(intent).filter(
    k => intent[k] != null && supported[k] !== true,
  )
  if (unknownKeys.length) {
    return {
      code: 'INTENT_UNSUPPORTED_DIMENSION',
      message: `Component ${component} does not support intent: ${unknownKeys.join(', ')}`,
      details: {component, unsupported: unknownKeys, supports: supported},
    }
  }

  return null
}
