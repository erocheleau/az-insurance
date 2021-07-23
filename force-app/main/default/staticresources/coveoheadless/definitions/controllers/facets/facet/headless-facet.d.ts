import { Controller } from '../../controller/headless-controller';
import { FacetSortCriterion } from '../../../features/facets/facet-set/interfaces/request';
import { FacetOptions, FacetSearchOptions } from './headless-facet-options';
import { FacetValueState } from '../../../features/facets/facet-api/value';
import { SearchEngine } from '../../../app/search-engine/search-engine';
export { FacetOptions, FacetSearchOptions, FacetValueState };
export interface FacetProps {
    /**
     * The options for the `Facet` controller.
     * */
    options: FacetOptions;
}
/**
 * The `Facet` headless controller offers a high-level interface for designing a common facet UI controller.
 */
export interface Facet extends Controller {
    /**
     * Provides methods to search the facet's values.
     */
    facetSearch: FacetSearch;
    /**
     * Toggles the specified facet value.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSelect(selection: FacetValue): void;
    /**
     * Toggles the specified facet value, deselecting others.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSingleSelect(selection: FacetValue): void;
    /**
     * Checks whether the specified facet value is selected.
     *
     * @param value - The facet value to check.
     * @returns Whether the specified facet value is selected.
     */
    isValueSelected(value: FacetValue): boolean;
    /**
     * Deselects all facet values.
     * */
    deselectAll(): void;
    /**
     * Sorts the facet values according to the specified criterion.
     *
     * @param criterion - The criterion to use for sorting values.
     */
    sortBy(criterion: FacetSortCriterion): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     *
     * @param criterion - The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: FacetSortCriterion): boolean;
    /**
     * Increases the number of values displayed in the facet to the next multiple of the originally configured value.
     */
    showMoreValues(): void;
    /**
     * Sets the number of values displayed in the facet to the originally configured value.
     * */
    showLessValues(): void;
    /**
     * The state of the `Facet` controller.
     * */
    state: FacetState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `Facet` controller.
 */
export interface FacetState {
    /** The facet ID. */
    facetId: string;
    /** The values of the facet. */
    values: FacetValue[];
    /** The active sortCriterion of the facet. */
    sortCriterion: FacetSortCriterion;
    /** `true` if a search is in progress and `false` otherwise. */
    isLoading: boolean;
    /** `true` if there is at least one non-idle value and `false` otherwise. */
    hasActiveValues: boolean;
    /** `true` if there are more values to display and `false` otherwise. */
    canShowMoreValues: boolean;
    /** `true` if fewer values can be displayed and `false` otherwise. */
    canShowLessValues: boolean;
    /** The state of the facet's searchbox. */
    facetSearch: FacetSearchState;
}
export interface FacetSearch {
    /**
     * Updates the facet search query.
     *
     * @param text - The query to search.
     * */
    updateText(text: string): void;
    /**
     * Shows more facet search results.
     * */
    showMoreResults(): void;
    /**
     * Performs a facet search.
     * */
    search(): void;
    /**
     * Selects a facet search result.
     *
     * @param value - The search result to select.
     * */
    select(value: SpecificFacetSearchResult): void;
    /**
     * Selects a search result while deselecting facet values.
     *
     * @param value - The search result to select.
     * */
    singleSelect(value: SpecificFacetSearchResult): void;
    /**
     * Resets the query and empties the values.
     * */
    clear(): void;
}
export interface FacetSearchState {
    /**
     * The facet search results.
     * */
    values: SpecificFacetSearchResult[];
    /**
     * `true` if the facet search is in progress and `false` otherwise.
     * */
    isLoading: boolean;
    /**
     * Whether more values are available.
     * */
    moreValuesAvailable: boolean;
    /** The current query in the facet search box. */
    query: string;
}
export interface SpecificFacetSearchResult {
    /**
     * The custom facet value display name, as specified in the `captions` argument of the facet request.
     */
    displayValue: string;
    /**
     * The original facet value, as retrieved from the field in the index.
     */
    rawValue: string;
    /**
     * An estimate of the number of result items matching both the current query and
     * the filter expression that would get generated if the facet value were selected.
     */
    count: number;
}
export interface FacetValue {
    /**
     * Whether a facet value is filtering results (`selected`) or not (`idle`).
     * */
    state: FacetValueState;
    /**
     * The number of results that have the facet value.
     * */
    numberOfResults: number;
    /**
     * The facet value.
     * */
    value: string;
}
/**
 * Creates a `Facet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Facet` properties.
 * @returns A `Facet` controller instance.
 * */
export declare function buildFacet(engine: SearchEngine, props: FacetProps): Facet;
