export interface AdvancedSearchQueryActionCreatorPayload {
    /**
     * The advanced query.
     */
    aq?: string;
    /**
     * The constant query.
     */
    cq?: string;
}
/**
 * Update the values of the advanced search queries.
 * @param (advancedSearchQueries)  The current state of the advanced search queries.
 */
export declare const updateAdvancedSearchQueries: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: AdvancedSearchQueryActionCreatorPayload], AdvancedSearchQueryActionCreatorPayload, "advancedSearchQueries/update", never, never>;
/**
 * Registers the initial state of the advanced search queries.
 * @param (advancedSearchQueries)  The initial state of the advanced search queries.
 */
export declare const registerAdvancedSearchQueries: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: AdvancedSearchQueryActionCreatorPayload], AdvancedSearchQueryActionCreatorPayload, "advancedSearchQueries/register", never, never>;
