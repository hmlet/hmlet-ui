import {z} from 'zod'

export const ROLE_INTENTS = [
  'guest',
  'admin',
  'vendor',
  'ops',
  'finance',
  'support',
]

export const ACTION_INTENTS = [
  'primary-cta',
  'secondary-cta',
  'confirmation',
  'approval',
  'rejection',
  'assignment',
  'handover',
  'destructive',
]

export const OPERATIONAL_INTENTS = [
  'scheduled',
  'in-progress',
  'completed',
  'blocked',
  'attention-required',
  'sla-breach',
]

export const RISK_INTENTS = ['low', 'medium', 'high', 'irreversible']

export const URGENCY_INTENTS = [
  'normal',
  'time-sensitive',
  'urgent',
  'sla-breach',
]

export const DENSITY_INTENTS = ['comfortable', 'compact', 'dense']

export const intentInputSchema = z
  .object({
    role: z.enum(ROLE_INTENTS).optional(),
    action: z.enum(ACTION_INTENTS).optional(),
    operational: z.enum(OPERATIONAL_INTENTS).optional(),
    risk: z.enum(RISK_INTENTS).optional(),
    urgency: z.enum(URGENCY_INTENTS).optional(),
    density: z.enum(DENSITY_INTENTS).optional(),
  })
  .strict()

export function coerceIntentInput(intent) {
  // Accepts either an object (preferred) or a legacy string (treated as action).
  if (!intent) return null
  if (typeof intent === 'string') {
    // Best effort: map common phrases/aliases to action intents.
    const raw = intent.trim().toLowerCase()
    const normalized = raw.replace(/[_\s]+/g, '-').replace(/-+/g, '-')

    const direct = {
      primary: 'primary-cta',
      'primary-cta': 'primary-cta',
      'primary-cta.': 'primary-cta',
      'primary-cta!': 'primary-cta',
      'primary-cta?': 'primary-cta',
      'primary-cta:': 'primary-cta',
      'primary-cta;': 'primary-cta',
      'primary-cta,': 'primary-cta',
      'primary-cta/': 'primary-cta',
      'primary-cta\\': 'primary-cta',
      'primary-cta"': 'primary-cta',
      "primary-cta'": 'primary-cta',
      'primary-cta)': 'primary-cta',
      'primary-cta(': 'primary-cta',
      'primary-cta]': 'primary-cta',
      'primary-cta[': 'primary-cta',
      'primary-cta}': 'primary-cta',
      'primary-cta{': 'primary-cta',
      'primary-cta.': 'primary-cta',
      'primary-cta…': 'primary-cta',

      secondary: 'secondary-cta',
      'secondary-cta': 'secondary-cta',
      approve: 'approval',
      approval: 'approval',
      reject: 'rejection',
      rejection: 'rejection',
      delete: 'destructive',
      destructive: 'destructive',
      confirm: 'confirmation',
      confirmation: 'confirmation',
    }[normalized]

    if (direct) return {action: direct}

    // Contains matching for natural phrases.
    if (
      raw.includes('delete') ||
      raw.includes('remove') ||
      raw.includes('destroy')
    )
      return {action: 'destructive'}
    if (
      raw.includes('approve') ||
      raw.includes('accept') ||
      raw.includes('confirm approval')
    )
      return {action: 'approval'}
    if (
      raw.includes('reject') ||
      raw.includes('deny') ||
      raw.includes('decline')
    )
      return {action: 'rejection'}
    if (raw.includes('confirm') || raw.includes('are you sure'))
      return {action: 'confirmation'}
    if (raw.includes('secondary')) return {action: 'secondary-cta'}
    if (
      raw.includes('primary') ||
      raw.includes('cta') ||
      raw.includes('continue') ||
      raw.includes('next')
    )
      return {action: 'primary-cta'}

    return null
  }

  // Object input: accept common aliases and ignore unknown keys.
  if (typeof intent !== 'object') return null

  const normalizeEnumValue = value => {
    if (typeof value !== 'string') return value
    return value
      .trim()
      .toLowerCase()
      .replace(/[_\s]+/g, '-')
      .replace(/-+/g, '-')
  }

  const raw = /** @type {Record<string, unknown>} */ (intent)

  const candidate = {
    role: normalizeEnumValue(raw.role),
    action: normalizeEnumValue(raw.action),
    operational: normalizeEnumValue(
      raw.operational ?? raw.operationalState ?? raw.operational_state,
    ),
    risk: normalizeEnumValue(raw.risk),
    urgency: normalizeEnumValue(raw.urgency),
    density: normalizeEnumValue(raw.density),
  }

  // Common urgency synonyms.
  if (candidate.urgency === 'high') candidate.urgency = 'urgent'
  if (candidate.urgency === 'medium') candidate.urgency = 'time-sensitive'
  if (candidate.urgency === 'low') candidate.urgency = 'normal'
  if (candidate.urgency === 'sla' || candidate.urgency === 'sla-breached')
    candidate.urgency = 'sla-breach'

  // Common risk synonyms.
  if (candidate.risk === 'critical') candidate.risk = 'high'
  if (candidate.risk === 'permanent') candidate.risk = 'irreversible'

  // Common density synonyms.
  if (candidate.density === 'cozy') candidate.density = 'comfortable'
  if (candidate.density === 'tight') candidate.density = 'compact'

  try {
    return intentInputSchema.parse(candidate)
  } catch {
    return null
  }
}
