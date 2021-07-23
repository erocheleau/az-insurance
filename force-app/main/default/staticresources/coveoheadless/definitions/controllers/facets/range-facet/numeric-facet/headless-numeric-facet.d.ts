import { NumericRangeRequest } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/request';
import { NumericFacetValue } from '../../../../features/facets/range-facets/numeric-facet-set/interfaces/response';
import { NumericFacetOptions } from './headless-numeric-facet-options';
import { buildNumericRange, NumericRangeOptions } from './numeric-range';
import { Controller } from '../../../controller/headless-controller';
import { RangeFacetSortCriterion } from '../../../../features/facets/range-facets/generic/interfaces/request';
import { SearchEngine } from '../../../../app/search-engine/search-engine';
export { buildNumericRange, NumericRangeOptions, NumericRangeRequest, NumericFacetValue, NumericFacetOptions, };
export interface NumericFacetProps {
    /**
     * The options for the `NumericFacet` controller.
     */
    options: NumericFacetOptions;
}
/**
 * The `NumericFacet` controller makes it possible to create a facet with numeric ranges.
 */
export interface NumericFacet extends Controller {
    /**
     * Deselects all facet values.
     */
    deselectAll(): void;
    /**
     * Checks whether the facet values are sorted according to the specified criterion.
     *
     * @param criterion - The criterion to compare.
     * @returns Whether the facet values are sorted according to the specified criterion.
     */
    isSortedBy(criterion: RangeFacetSortCriterion): boolean;
    /**
     * Checks whether the specified facet value is selected.
     *
     * @param selection - The facet value to check.
     * @returns Whether the specified facet value is selected.
     */
    isValueSelected(selection: NumericFacetValue): boolean;
    /** Sorts the facet values according to the specified criterion.
     *
     * @param criterion - The criterion to sort values by.
     */
    sortBy(criterion: RangeFacetSortCriterion): void;
    /**
     * Toggles the specified facet value.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSelect(selection: NumericFacetValue): void;
    /**
     * Toggles the specified facet value, deselecting others.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSingleSelect(selection: NumericFacetValue): void;
    /**
     * The state of the `NumericFacet` controller.
     */
    state: NumericFacetState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `NumericFacet` controller.
 */
export interface NumericFacetState {
    /**
     * The facet ID.
     * */
    facetId: string;
    /**
     * The values of the facet.
     */
    values: NumericFacetValue[];
    /**
     * The active sortCriterion of the facet.
     */
    sortCriterion: RangeFacetSortCriterion;
    /**
     * `true` if a search is in progress and `false` otherwise.
     */
    isLoading: boolean;
    /**
     * `true` if there is at least one non-idle value and `false` otherwise.
     */
    hasActiveValues: boolean;
}
/**
 * Creates a `NumericFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `NumericFacet` properties.
 * @returns A `NumericFacet` controller instance.
 */
export declare function buildNumericFacet(engine: SearchEngine, props: NumericFacetProps): NumericFacet;
