// Intent contracts define what intent dimensions are meaningful per component.
// They act as guardrails (and a discovery surface for agents).
//
// NOTE: We keep this pragmatic:
// - Some components have explicit contracts below.
// - Everything else falls back to a sensible default by kind + capabilities.

export const INTENT_CONTRACTS = {
  AspectRatio: {supports: {density: true}},
  Bleed: {supports: {density: true}},
  Center: {supports: {density: true}},
  Container: {supports: {density: true}},
  Divider: {supports: {density: true}},
  GridItem: {supports: {density: true}},
  HStack: {supports: {density: true}},
  Inline: {supports: {density: true}},
  Section: {
    supports: {role: true, density: true},
    defaults: {density: 'comfortable'},
  },
  Spacer: {supports: {}},
  Stack: {supports: {density: true, urgency: true}},
  Types: {supports: {}},
  VStack: {supports: {density: true}},
  Wrap: {supports: {density: true}},
  Accordion: {supports: {operational: true}},
  AlertDialog: {supports: {operational: true}},
  AspectRatio: {supports: {operational: true}},
  Avatar: {supports: {operational: true}},
  Breadcrumb: {supports: {operational: true}},
  ButtonGroup: {supports: {operational: true}},
  Calendar: {supports: {operational: true}},
  Card: {supports: {operational: true}},
  Chart: {supports: {operational: true}},
  Checkbox: {supports: {operational: true}},
  Collapsible: {supports: {operational: true}},
  Command: {supports: {operational: true}},
  ContextMenu: {supports: {operational: true}},
  Dialog: {supports: {operational: true}},
  Drawer: {supports: {operational: true}},
  DropdownMenu: {supports: {operational: true}},
  Empty: {supports: {operational: true}},
  Field: {supports: {operational: true}},
  Form: {supports: {operational: true}},
  HoverCard: {supports: {operational: true}},
  Input: {supports: {operational: true}},
  InputGroup: {supports: {operational: true}},
  InputOtp: {supports: {operational: true}},
  Item: {supports: {operational: true}},
  Kbd: {supports: {operational: true}},
  Label: {supports: {operational: true}},
  Menubar: {supports: {operational: true}},
  NavigationMenu: {supports: {operational: true}},
  Pagination: {supports: {operational: true}},
  Popover: {supports: {operational: true}},
  Progress: {supports: {operational: true}},
  RadioGroup: {supports: {operational: true}},
  Resizable: {supports: {operational: true}},
  ScrollArea: {supports: {operational: true}},
  SegmentControl: {supports: {operational: true}},
  Select: {supports: {operational: true}},
  Separator: {supports: {operational: true}},
  Sheet: {supports: {operational: true}},
  Sidebar: {supports: {operational: true}},
  Skeleton: {supports: {operational: true}},
  Slider: {supports: {operational: true}},
  Sonner: {supports: {operational: true}},
  Switch: {supports: {operational: true}},
  Table: {supports: {operational: true}},
  Tabs: {supports: {operational: true}},
  Textarea: {supports: {operational: true}},
  ToggleGroup: {supports: {operational: true}},
  Toggle: {supports: {operational: true}},
  Tooltip: {supports: {operational: true}},
  Typography: {supports: {operational: true}},
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

  // Newly added UI components
  Spinner: {
    supports: {operational: true, urgency: true},
    defaults: {operational: 'in-progress'},
  },

  Carousel: {
    supports: {role: true, density: true},
    defaults: {density: 'comfortable'},
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
