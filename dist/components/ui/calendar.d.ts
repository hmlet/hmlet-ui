import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import type { DateRange } from 'react-day-picker';
import { type InputProps } from './input';
export type CalendarBaseProps = Omit<React.ComponentProps<typeof DayPicker>, 'selected' | 'onSelect'> & {
    inputProps?: InputProps;
};
export type CalendarProps = (CalendarBaseProps & {
    mode: 'single';
    selected?: Date;
    onSelect?: (date?: Date) => void;
}) | (CalendarBaseProps & {
    mode: 'multiple';
    selected?: Date[];
    onSelect?: (dates?: Date[]) => void;
}) | (CalendarBaseProps & {
    mode: 'range';
    selected?: DateRange;
    onSelect?: (range?: DateRange) => void;
}) | (CalendarBaseProps & {
    mode?: undefined;
    selected?: undefined;
    onSelect?: undefined;
});
declare function Calendar(props: CalendarProps): import("react/jsx-runtime").JSX.Element;
export { Calendar };
