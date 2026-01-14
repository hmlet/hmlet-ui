export type StringFromNumber<T> = T extends number ? `${T}` : never

export type NumberFromString<T> = T extends `${infer N extends number}`
  ? N
  : never

/**
 * Accepts numeric tokens in either form: `4` or `'4'`.
 * Also preserves non-numeric string variants like `'none'` or `'full'`.
 */
export type WithNumberish<T> = T | StringFromNumber<T> | NumberFromString<T>

/**
 * Normalizes a `WithNumberish<T>` value into the exact `T` expected by `cva`.
 *
 * - Converts numeric strings like `'4'` to `4`
 * - Preserves non-numeric variants like `'none'`, `'full'`
 * - Preserves `null` (used by cva to omit a variant)
 */
export function normalizeNumberish<T extends string | number>(
  value: WithNumberish<T> | null | undefined,
): T | null | undefined {
  if (value === undefined || value === null) return value as null | undefined

  if (typeof value === 'string' && /^\d+$/.test(value)) {
    return Number(value) as unknown as T
  }

  return value as unknown as T
}
