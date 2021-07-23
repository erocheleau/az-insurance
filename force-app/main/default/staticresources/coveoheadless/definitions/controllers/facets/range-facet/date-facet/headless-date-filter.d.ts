import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { Controller } from '../../../controller/headless-controller';
import { DateFacetValue } from '../../../../features/facets/range-facets/date-facet-set/interfaces/response';
/**
 * The options defining a `DateFilter`.
 */
export interface DateFilterOptions {
    /**
     * The field whose values you want to display in the filter.
     */
    field: string;
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    facetId?: string;
    /**
     * Whether to exclude folded result parents when estimating the result count for each facet value.
     *
     * @defaultValue `true`
     */
    filterFacetCount?: boolean;
    /**
     * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
     *
     * Note: A high injectionDepth may negatively impact the facet request performance.
     *
     * Minimum: `0`
     *
     * @defaultValue `1000`
     */
    injectionDepth?: number;
}
export interface DateFilterInitialState {
    /**
     * The initial selected range.
     */
    range: DateFilterRange;
}
export interface DateFilterRange {
    /**
     * The start value of the range, formatted as `YYYY/MM/DD@HH:mm:ss`.
     */
    start: string;
    /**
     * The end value of the range, formatted as `YYYY/MM/DD@HH:mm:ss`.
     */
    end: string;
}
export interface DateFilterProps {
    /**
     * The options for the `DateFilter` controller.
     */
    options: DateFilterOptions;
    /**
     * The initial state.
     */
    initialState?: DateFilterInitialState;
}
export interface DateFilterState {
    /**
     * The facet ID.
     * */
    facetId: string;
    /**
     * The current selected range.
     */
    range?: DateFacetValue;
    /**
     * Returns `true` if a search is in progress, and `false` if not.
     */
    isLoading: boolean;
}
/**
 * The `DateFilter` controller makes it possible to create a date filter.
 */
export interface DateFilter extends Controller {
    /**
     * Clears the current filter.
     */
    clear(): void;
    /**
     * Updates the selected range.
     *
     * You can use the `buildDateRange` utility method in order to format the range values correctly.
     *
     * @param range - The date range.
     * @returns Whether the range is valid.
     */
    setRange(range: DateFilterRange): void;
    /**
     * The state of the `DateFacet` controller.
     */
    state: DateFilterState;
}
export declare function buildDateFilter(engine: SearchEngine, props: DateFilterProps): DateFilter;
