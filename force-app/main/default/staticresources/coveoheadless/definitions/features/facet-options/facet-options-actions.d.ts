export interface UpdateFacetOptionsActionCreatorPayload {
    /**
     * Whether facets should be returned in the same order they were requested.
     */
    freezeFacetOrder?: boolean;
}
/**
 * Updates options that affect facet reordering. For more information, refer to [the documentation on query parameters](https://docs.coveo.com/en/1461/build-a-search-ui/query-parameters#definitions-RestFacetOptions).
 * @param {Partial<FacetOptions>} facetOptions The options to update.
 */
export declare const updateFacetOptions: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateFacetOptionsActionCreatorPayload], UpdateFacetOptionsActionCreatorPayload, "facetOptions/update", never, never>;
