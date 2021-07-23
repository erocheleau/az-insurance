export interface RegisterQuerySetQueryActionCreatorPayload {
    /**
     * The unique identifier of the target query.
     */
    id: string;
    /**
     * The initial basic query expression.
     */
    query: string;
}
/**
 * Registers a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The initial basic query expression.
 */
export declare const registerQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterQuerySetQueryActionCreatorPayload], RegisterQuerySetQueryActionCreatorPayload, "querySet/register", never, never>;
export interface UpdateQuerySetQueryActionCreatorPayload {
    /**
     * The unique identifier of the target query.
     */
    id: string;
    /**
     * The new basic query expression.
     */
    query: string;
}
/**
 * Updates a query in the query set.
 * @param id (string) The unique identifier of the target query.
 * @param query (string) The new basic query expression.
 */
export declare const updateQuerySetQuery: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateQuerySetQueryActionCreatorPayload], UpdateQuerySetQueryActionCreatorPayload, "querySet/update", never, never>;
