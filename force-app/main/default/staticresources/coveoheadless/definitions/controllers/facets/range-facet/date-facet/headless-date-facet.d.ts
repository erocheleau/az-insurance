import { DateRangeRequest } from '../../../../features/facets/range-facets/date-facet-set/interfaces/request';
import { DateFacetValue } from '../../../../features/facets/range-facets/date-facet-set/interfaces/response';
import { DateFacetOptions } from './headless-date-facet-options';
import { DateRangeOptions, DateRangeInput, buildDateRange } from './date-range';
import { Controller } from '../../../controller/headless-controller';
import { RangeFacetSortCriterion } from '../../../../features/facets/range-facets/generic/interfaces/request';
import { SearchEngine } from '../../../../app/search-engine/search-engine';
export { DateFacetOptions, DateRangeInput, DateRangeOptions, DateRangeRequest, buildDateRange, };
export interface DateFacetProps {
    /**
     * The options for the `DateFacet` controller.
     * */
    options: DateFacetOptions;
}
/**
 * The `DateFacet` controller makes it possible to create a facet with date ranges.
 * */
export interface DateFacet extends Controller {
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
    isValueSelected(selection: DateFacetValue): boolean;
    /** Sorts the facet values according to the specified criterion.
     *
     * @param criterion - The criterion by which to sort values.
     */
    sortBy(criterion: RangeFacetSortCriterion): void;
    /**
     * Toggles the specified facet value.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSelect(selection: DateFacetValue): void;
    /**
     * Toggles the specified facet value, deselecting others.
     *
     * @param selection - The facet value to toggle.
     */
    toggleSingleSelect(selection: DateFacetValue): void;
    /**
     * The state of the `DateFacet` controller.
     */
    state: DateFacetState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `DateFacet` controller.
 */
export interface DateFacetState {
    /**
     * The facet ID.
     * */
    facetId: string;
    /**
     * The values of the facet.
     */
    values: DateFacetValue[];
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
 * Creates a `DateFacet` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `DateFacet` controller properties.
 * @returns A `DateFacet` controller instance.
 */
export declare function buildDateFacet(engine: SearchEngine, props: DateFacetProps): DateFacet;
