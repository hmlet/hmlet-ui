import {INTENT_REGISTRY} from './registry.mjs'

export function resolveIntent(component, intent) {
  const registry = INTENT_REGISTRY?.[component]
  if (!registry || !intent) return null

  const reasons = []

  // Priority order matters.
  if (intent.action && registry[intent.action]) {
    reasons.push(`Resolved from action: ${intent.action}`)
    return {props: registry[intent.action], reason: reasons}
  }

  if (intent.role === 'ops' && registry['ops-alert']) {
    reasons.push('Resolved from role: ops')
    return {props: registry['ops-alert'], reason: reasons}
  }

  if (intent.role === 'finance' && registry['finance-alert']) {
    reasons.push('Resolved from role: finance')
    return {props: registry['finance-alert'], reason: reasons}
  }

  if (intent.operational && registry[intent.operational]) {
    reasons.push(`Resolved from operational state: ${intent.operational}`)
    return {props: registry[intent.operational], reason: reasons}
  }

  if (intent.risk === 'irreversible' && registry.destructive) {
    reasons.push('Irreversible action → destructive variant')
    return {props: registry.destructive, reason: reasons}
  }

  // Fallback: if urgency is SLA breach, try a breach mapping.
  if (intent.urgency === 'sla-breach' && registry['sla-breach']) {
    reasons.push('SLA breach urgency → sla-breach mapping')
    return {props: registry['sla-breach'], reason: reasons}
  }

  return null
}
