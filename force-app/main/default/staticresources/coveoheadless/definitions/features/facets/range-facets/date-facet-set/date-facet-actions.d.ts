import { DateFacetValue } from './interfaces/response';
import { RangeFacetSortCriterion, RangeFacetRangeAlgorithm } from '../generic/interfaces/request';
import { DateRangeRequest } from './interfaces/request';
export interface RegisterDateFacetActionCreatorPayload {
    /**
     * A unique identifier for the facet.
     */
    facetId: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * Whether the index should automatically create range values.
     *
     * Tip: If you set this parameter to true, you should ensure that the ['Use cache for numeric queries' option](https://docs.coveo.com/en/1982/#use-cache-for-numeric-queries) is enabled for this facet's field in your index in order to speed up automatic range evaluation.
     */
    generateAutomaticRanges: boolean;
    /**
     * The values displayed by the facet in the search interface at the moment of the request.
     *
     * If `generateAutomaticRanges` is false, values must be specified.
     * If `generateAutomaticRanges` is true, automatic ranges are going to be appended after the specified values.
     *
     * @defaultValue `[]`
     */
    currentValues?: DateRangeRequest[];
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
    /**
     * The number of values to request for this facet.
     * Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
     *
     * Minimum: `1`
     *
     * @defaultValue `8`
     */
    numberOfValues?: number;
    /**
     * The sort criterion to apply to the returned facet values.
     *
     * @defaultValue `ascending`
     */
    sortCriteria?: RangeFacetSortCriterion;
    /**
     * The range algorithm to apply to automatically generated ranges for the range facet.
     *
     * @defaultValue `even`
     */
    rangeAlgorithm?: RangeFacetRangeAlgorithm;
}
export declare function validateManualDateRanges(options: Pick<RegisterDateFacetActionCreatorPayload, 'currentValues'>): void;
/**
 * Registers a date facet.
 * @param (RegisterDateFacetActionCreatorPayload) The options to register the facet with.
 */
export declare const registerDateFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterDateFacetActionCreatorPayload], RegisterDateFacetActionCreatorPayload, "dateFacet/register", import("@reduxjs/toolkit").SerializedError | null, never>;
export interface ToggleSelectDateFacetValueActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The target date facet value.
     */
    selection: DateFacetValue;
}
/**
 * Toggles a date facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (DateFacetValue) The target date facet value.
 */
export declare const toggleSelectDateFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ToggleSelectDateFacetValueActionCreatorPayload], ToggleSelectDateFacetValueActionCreatorPayload, "dateFacet/toggleSelectValue", never, never>;
export interface UpdateDateFacetValuesActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The date facet values.
     */
    values: DateFacetValue[];
}
/**
 * Updates date facet values.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param values (DateFacetValue[]) The date facet values.
 */
export declare const updateDateFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateDateFacetValuesActionCreatorPayload], UpdateDateFacetValuesActionCreatorPayload, "dateFacet/updateFacetValues", import("@reduxjs/toolkit").SerializedError | null, never>;
export interface UpdateDateFacetSortCriterionActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The target criterion.
     */
    criterion: RangeFacetSortCriterion;
}
/** Updates the sort criterion of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (RangeFacetSortCriterion) The target criterion.
 */
export declare const updateDateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}], {
    facetId: string;
    criterion: RangeFacetSortCriterion;
}, "rangeFacet/updateSortCriterion", never, never>;
/** Deselects all values of a date facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllDateFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
