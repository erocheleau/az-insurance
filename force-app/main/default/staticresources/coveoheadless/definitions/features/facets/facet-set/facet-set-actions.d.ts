import { FacetSortCriterion } from './interfaces/request';
import { FacetValue } from './interfaces/response';
export interface RegisterFacetActionCreatorPayload {
    /**
     * A unique identifier for the facet.
     * */
    facetId: string;
    /**
     * The field whose values you want to display in the facet.
     * */
    field: string;
    /**
     * The character that separates values of a multi-value field.
     *
     * @defaultValue `>`
     */
    delimitingCharacter?: string;
    /**
     * Whether to exclude the parents of folded results when estimating the result count for each facet value.
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
     * */
    injectionDepth?: number;
    /**
     * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
     *
     * Minimum: `1`
     *
     * @defaultValue `8`
     */
    numberOfValues?: number;
    /**
     * The criterion to use for sorting returned facet values.
     *
     * @defaultValue `automatic`
     */
    sortCriteria?: FacetSortCriterion;
}
/**
 * Registers a facet in the facet set.
 * @param (RegisterFacetActionCreatorPayload) The options to register the facet with.
 */
export declare const registerFacet: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterFacetActionCreatorPayload], RegisterFacetActionCreatorPayload, "facet/register", never, never>;
export interface ToggleSelectFacetValueActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The target facet value.
     */
    selection: FacetValue;
}
/**
 * Toggles a facet value.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param selection (FacetValue) The target facet value.
 */
export declare const toggleSelectFacetValue: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: ToggleSelectFacetValueActionCreatorPayload], ToggleSelectFacetValueActionCreatorPayload, "facet/toggleSelectValue", never, never>;
/**
 * Deselects all values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const deselectAllFacetValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: string], string, "facet/deselectAll", never, never>;
export interface UpdateFacetSortCriterionActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The criterion by which to sort the facet.
     */
    criterion: FacetSortCriterion;
}
/**
 * Updates the sort criterion of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param criterion (FacetSortCriterion) The criterion by which to sort the facet.
 */
export declare const updateFacetSortCriterion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetSortCriterionActionCreatorPayload], UpdateFacetSortCriterionActionCreatorPayload, "facet/updateSortCriterion", never, never>;
export interface UpdateFacetNumberOfValuesActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * The new number of facet values (e.g., `10`).
     */
    numberOfValues: number;
}
/**
 * Updates the number of values of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param numberOfValues (number) The new number of facet values (e.g., `10`).
 */
export declare const updateFacetNumberOfValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetNumberOfValuesActionCreatorPayload], UpdateFacetNumberOfValuesActionCreatorPayload, "facet/updateNumberOfValues", never, never>;
export interface UpdateFacetIsFieldExpandedActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * Whether to expand or shrink down the facet.
     */
    isFieldExpanded: boolean;
}
/**
 * Whether to expand (show more values than initially configured) or shrink down the facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param isFieldExpanded (boolean) Whether to expand or shrink down the facet.
 */
export declare const updateFacetIsFieldExpanded: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetIsFieldExpandedActionCreatorPayload], UpdateFacetIsFieldExpandedActionCreatorPayload, "facet/updateIsFieldExpanded", never, never>;
export interface UpdateFreezeCurrentValuesActionCreatorPayload {
    /**
     * The unique identifier of the facet (e.g., `"1"`).
     */
    facetId: string;
    /**
     * Whether the values should be frozen in the next request.
     */
    freezeCurrentValues: boolean;
}
/**
 * Updates the updateFreezeCurrentValues flag of a facet.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 * @param freezeCurrentValues (boolean) Whether the values should be frozen in the next request.
 */
export declare const updateFreezeCurrentValues: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFreezeCurrentValuesActionCreatorPayload], UpdateFreezeCurrentValuesActionCreatorPayload, "facet/updateFreezeCurrentValues", never, never>;
