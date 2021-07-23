import { Controller } from '../../controller/headless-controller';
import { CategoryFacetSortCriterion } from '../../../features/facets/category-facet-set/interfaces/request';
import { CategoryFacetOptions, CategoryFacetSearchOptions } from './headless-category-facet-options';
import { CategoryFacetValue } from '../../../features/facets/category-facet-set/interfaces/response';
import { SearchEngine } from '../../../app/search-engine/search-engine';
export { CategoryFacetValue, CategoryFacetOptions, CategoryFacetSearchOptions };
export interface CategoryFacetProps {
    /** The options for the `CategoryFacet` controller. */
    options: CategoryFacetOptions;
}
/**
 * The `CategoryFacet` headless controller offers a high-level interface for designing a facet UI controller that renders values hierarchically.
 */
export interface CategoryFacet extends Controller {
    /**
     * Provides methods to search the facet's values.
     */
    facetSearch: CategoryFacetSearch;
    /**
     * Toggles the specified facet value.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSelect(selection: CategoryFacetValue): void;
    /**
     * Deselects all facet values.
     * */
    deselectAll(): void;
    /**
     * Sorts the facet values according to the specified criterion.
     *
     * @param criterion - The criterion by which to sort values.
     */
    sortBy(criterion: CategoryFacetSortCriterion): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     *
     * @param criterion - The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: CategoryFacetSortCriterion): boolean;
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
    state: CategoryFacetState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `CategoryFacet` controller.
 */
export interface CategoryFacetState {
    /** The facet ID. */
    facetId: string;
    /** The facet's parent values. */
    parents: CategoryFacetValue[];
    /** The facet's values. */
    values: CategoryFacetValue[];
    /** The facet's active `sortCriterion`. */
    sortCriteria: CategoryFacetSortCriterion;
    /** Returns `true` if a search is in progress, and `false` if not. */
    isLoading: boolean;
    /** Returns `true` if there's at least one non-idle value, and `false` if not. */
    hasActiveValues: boolean;
    /** Returns `true` if there are more values to display and, `false` if not. */
    canShowMoreValues: boolean;
    /** Returns `true` if fewer values can be displayed, and `false` if not. */
    canShowLessValues: boolean;
    /** The state of the facet's searchbox. */
    facetSearch: CategoryFacetSearchState;
}
export interface CategoryFacetSearch {
    /**
     * Updates the facet search query.
     *
     * @param text - The facet search query.
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
    select(value: CategoryFacetSearchResult): void;
    /**
     * Resets the query and empties the values.
     * */
    clear(): void;
}
export interface CategoryFacetSearchState {
    /**
     * The facet search results.
     * */
    values: CategoryFacetSearchResult[];
    /**
     * Returns `true` if the facet search is in progress, and `false` if not.
     * */
    isLoading: boolean;
    /**
     * Whether more values are available.
     * */
    moreValuesAvailable: boolean;
    /**
     * The current query in the facet search box.
     */
    query: string;
}
export interface CategoryFacetSearchResult {
    /**
     * The custom facet value display name, as specified in the `captions` argument of the facet request.
     */
    displayValue: string;
    /**
     * The original facet value, as retrieved from the field in the index.
     */
    rawValue: string;
    /**
     * An estimate of the number of result items that match both the current query and
     * the filter expression which would be generated if the facet value were selected.
     */
    count: number;
    /**
     * The hierarchical path to the facet value.
     */
    path: string[];
}
/**
 * Creates a `CategoryFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `CategoryFacet` properties.
 * @returns A `CategoryFacet` controller instance.
 * */
export declare function buildCategoryFacet(engine: SearchEngine, props: CategoryFacetProps): CategoryFacet;
