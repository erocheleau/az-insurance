import { SearchEngine } from '../../../../app/search-engine/search-engine';
import { Controller } from '../../../controller/headless-controller';
import { NumericFacetValue } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
/**
 * The options defining a `NumericFilter`.
 */
export interface NumericFilterOptions {
    /**
     * The field whose values you want to display in the filter.
     */
    field: string;
    /**
     * A unique identifier for the controller.
     * By default, a unique random ID is generated.
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
export interface NumericFilterInitialState {
    /**
     * The initial selected range.
     */
    range: NumericFilterRange;
}
export interface NumericFilterRange {
    /**
     * The starting value for the numeric range.
     */
    start: number;
    /**
     * The ending value for the numeric range.
     */
    end: number;
}
export interface NumericFilterProps {
    /**
     * The options for the `NumericFilter` controller.
     */
    options: NumericFilterOptions;
    /**
     * The initial state.
     */
    initialState?: NumericFilterInitialState;
}
export interface NumericFilterState {
    /**
     * The facet ID.
     * */
    facetId: string;
    /**
     * The current selected range.
     */
    range?: NumericFacetValue;
    /**
     * Returns `true` if a search is in progress, and `false` if not.
     */
    isLoading: boolean;
}
/**
 * The `NumericFilter` controller makes it possible to create a numeric filter.
 */
export interface NumericFilter extends Controller {
    /**
     * Clears the current filter.
     */
    clear(): void;
    /**
     * Updates the selected range.
     *
     * @param range - The numeric range.
     * @returns Whether the range is valid.
     */
    setRange(range: NumericFilterRange): void;
    /**
     * The state of the `NumericFacet` controller.
     */
    state: NumericFilterState;
}
export declare function buildNumericFilter(engine: SearchEngine, props: NumericFilterProps): NumericFilter;
