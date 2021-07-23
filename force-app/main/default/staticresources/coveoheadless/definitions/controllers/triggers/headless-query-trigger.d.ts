import { SearchEngine } from '../../app/search-engine/search-engine';
import { Controller } from '../controller/headless-controller';
/**
 * The `QueryTrigger` controller handles query triggers.
 */
export interface QueryTrigger extends Controller {
    /**
     * the state of the `QueryTrigger` controller.
     */
    state: QueryTriggerState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `QueryTrigger` controller.
 */
export interface QueryTriggerState {
    /**
     * The new query to perform a search with after receiving a query trigger.
     */
    newQuery: string;
    /**
     * The query used to perform the search that received a query trigger in its response.
     */
    originalQuery: string;
    /**
     * A boolean to specify if the controller was triggered resulting in a modification to the query.
     */
    wasQueryModified: boolean;
}
/**
 * Creates a `QueryTrigger` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `QueryTrigger` controller instance.
 * */
export declare function buildQueryTrigger(engine: SearchEngine): QueryTrigger;
