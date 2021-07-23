import { DateRangeRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { FacetValueState } from '../../../../features/facets/facet-api/value';
export declare type DateRangeInput = string | number | Date;
export interface DateRangeOptions {
    /**
     * The start value of the range.
     */
    start: DateRangeInput;
    /**
     * The end value of the range.
     */
    end: DateRangeInput;
    /**
     * Whether to include the end value in the range.
     *
     * @defaultValue `false`
     */
    endInclusive?: boolean;
    /**
     * The current facet value state.
     *
     * @defaultValue `idle`
     */
    state?: FacetValueState;
    /**
     * Allows specifying a custom string date format. See [Day.js](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens) for possible parsing tokens. Assumes [ISO 8601](https://day.js.org/docs/en/parse/string) format by default.
     */
    dateFormat?: string;
    /**
     * If `true`, the date will be returned unshifted. If `false`, the date will be adjusted to UTC time.
     *
     * @defaultValue `false`
     */
    useLocalTime?: boolean;
}
export declare function isSearchApiDate(date: string): boolean;
/**
 * Creates a `DateRangeRequest`.
 *
 * @param config - The options with which to create a `DateRangeRequest`.
 * @returns A new `DateRangeRequest`.
 */
export declare function buildDateRange(config: DateRangeOptions): DateRangeRequest;
