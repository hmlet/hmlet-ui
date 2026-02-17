/**
 * Chip Component
 *
 * A versatile chip/tag component with multiple variants, sizes, and states.
 * Designed for status indicators, labels, categories, and interactive tags.
 *
 * Features:
 * - 18 pre-built variants (semantic, theme, and status-based)
 * - 4 sizes (xs, sm, md, lg)
 * - Clickable and deletable variants
 * - Full dark/light mode support with proper contrast
 * - Uppercase text with letter spacing for better readability
 * - Smooth hover transitions
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Chip label="Success" variant="success" />
 *
 * // With size
 * <Chip label="Active" variant="active" size="sm" />
 *
 * // Clickable
 * <Chip label="Click me" variant="primary" onClick={() => alert('Clicked!')} />
 *
 * // Deletable
 * <Chip label="Remove me" variant="warning" onDelete={() => handleDelete()} />
 * ```
 */
export interface ChipProps {
    label: string;
    variant?: 'success' | 'danger' | 'warning' | 'info' | 'default' | 'primary' | 'secondary' | 'neutral' | 'active' | 'inactive' | 'pending' | 'approved' | 'rejected' | 'cancelled' | 'completed' | 'processing' | 'draft' | 'urgent';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    onDelete?: () => void;
    onClick?: () => void;
}
export declare function Chip({ label, variant, size, className, onDelete, onClick, }: ChipProps): import("react/jsx-runtime").JSX.Element;
