export type StringFromNumber<T> = T extends number ? `${T}` : never

export type NumberFromString<T> = T extends `${infer N extends number}`
  ? N
  : never

/**
 * Accepts numeric tokens in either form: `4` or `'4'`.
 * Also preserves non-numeric string variants like `'none'` or `'full'`.
 */
export type WithNumberish<T> = T | StringFromNumber<T> | NumberFromString<T>
