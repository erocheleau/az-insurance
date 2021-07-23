import { SearchEngine } from '../../app/search-engine/search-engine';
import { Controller } from '../controller/headless-controller';
import { SearchStatusState } from '../search-status/headless-search-status';
/**
 * The `QuerySummary` controller provides information about the current query and results (e.g., "Results
 * 1-10 of 123").
 * */
export interface QuerySummary extends Controller {
    /** The state relevant to the `QuerySummary` controller.*/
    state: QuerySummaryState;
}
export interface QuerySummaryState extends SearchStatusState {
    /**
     * The duration, in milliseconds, that the last query took to execute.
     */
    durationInMilliseconds: number;
    /**
     * The duration, in seconds, that the last query took to execute.
     */
    durationInSeconds: number;
    /**
     * The 1-based index of the first search result returned for the current page.
     */
    firstResult: number;
    /**
     * Determines if a query execution time is available.
     */
    hasDuration: boolean;
    /**
     * Determines if an empty query was executed.
     */
    hasQuery: boolean;
    /**
     * The 1-based index of the last search result returned for the current page.
     */
    lastResult: number;
    /**
     * The query that was last executed (the content of the searchbox).
     */
    query: string;
    /**
     * The total count of results available.
     */
    total: number;
}
/**
 * Creates a `QuerySummary` controller instance.
 *
 * @param engine - The headless engine instance.
 */
export declare function buildQuerySummary(engine: SearchEngine): QuerySummary;
