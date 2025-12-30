/**
 * colors.mjs
 * Centralized ANSI color helpers for scripts.
 * No external deps. Safe for Node >= 18.
 */

const supportsColor = process.stdout.isTTY && !process.env.NO_COLOR

const codes = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
}

function wrap(code, msg) {
  if (!supportsColor) return msg
  return `${code}${msg}${codes.reset}`
}

// -------- Public API --------

export const ok = msg => wrap(codes.green, msg)
export const warn = msg => wrap(codes.yellow, msg)
export const err = msg => wrap(codes.red, msg)
export const info = msg => wrap(codes.cyan, msg)
export const dim = msg => wrap(codes.dim, msg)
export const bold = msg => wrap(codes.bold, msg)

// Optional: raw access if ever needed
export const colorCodes = supportsColor ? codes : {}
