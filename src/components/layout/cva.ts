/**
 * Re-export class-variance-authority to fix TS2742 declaration emit errors.
 *
 * When using pnpm with symlinked node_modules, TypeScript's declaration emit
 * can fail because it tries to reference internal pnpm store paths.
 * By re-exporting from a local module, we ensure the declaration files
 * reference this local path instead.
 */
export {cva, type VariantProps} from 'class-variance-authority'
