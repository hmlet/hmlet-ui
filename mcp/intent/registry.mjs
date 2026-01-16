// Intent registry maps business intent -> component props.
// Keep this explicit and reviewable.
// IMPORTANT: Only use variants/sizes that exist in @hmlet/ui.

export const INTENT_REGISTRY = {
  AspectRatio: {default: {}},
  Bleed: {default: {}},
  Center: {default: {}},
  Container: {default: {}},
  Divider: {default: {}},
  GridItem: {default: {}},
  HStack: {default: {}},
  Inline: {default: {}},
  Section: {
    comfortable: {paddingY: '12'},
    compact: {paddingY: '8'},
    dense: {paddingY: '6'},
    guest: {paddingY: '12'},
    admin: {paddingY: '8'},
  },
  Spacer: {default: {}},
  Stack: {
    comfortable: {gap: '4'},
    compact: {gap: '3'},
    dense: {gap: '2'},
    urgent: {gap: '2'},
    'time-sensitive': {gap: '3'},
    normal: {gap: '4'},
  },
  Types: {default: {}},
  VStack: {default: {}},
  Wrap: {default: {}},
  Accordion: {default: {}},
  AlertDialog: {default: {}},
  AspectRatio: {default: {}},
  Avatar: {default: {}},
  Breadcrumb: {default: {}},
  ButtonGroup: {default: {}},
  Calendar: {default: {}},
  Card: {default: {}},
  Chart: {default: {}},
  Checkbox: {default: {}},
  Collapsible: {default: {}},
  Command: {default: {}},
  ContextMenu: {default: {}},
  Dialog: {default: {}},
  Drawer: {default: {}},
  DropdownMenu: {default: {}},
  Empty: {default: {}},
  Field: {default: {}},
  Form: {default: {}},
  HoverCard: {default: {}},
  Input: {default: {}},
  InputGroup: {default: {}},
  InputOtp: {default: {}},
  Item: {default: {}},
  Kbd: {default: {}},
  Label: {default: {}},
  Menubar: {default: {}},
  NavigationMenu: {default: {}},
  Pagination: {default: {}},
  Popover: {default: {}},
  Progress: {default: {}},
  RadioGroup: {default: {}},
  Resizable: {default: {}},
  ScrollArea: {default: {}},
  SegmentControl: {default: {}},
  Select: {default: {}},
  Separator: {default: {}},
  Sheet: {default: {}},
  Sidebar: {default: {}},
  Skeleton: {default: {}},
  Slider: {default: {}},
  Sonner: {default: {}},
  Switch: {default: {}},
  Table: {default: {}},
  Tabs: {default: {}},
  Textarea: {default: {}},
  ToggleGroup: {default: {}},
  Toggle: {default: {}},
  Tooltip: {default: {}},
  Typography: {default: {}},
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

  // Newly added UI components
  Spinner: {
    'in-progress': {variant: 'muted', size: 'md'},
    completed: {variant: 'success', size: 'md'},
    blocked: {variant: 'destructive', size: 'md'},
  },

  Carousel: {
    comfortable: {orientation: 'horizontal'},
    compact: {orientation: 'vertical'},
  },
}
