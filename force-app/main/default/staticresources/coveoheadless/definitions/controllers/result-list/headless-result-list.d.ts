import { Controller } from '../controller/headless-controller';
import { SearchStatusState } from '../search-status/headless-search-status';
import { Result } from '../../api/search/search/result';
import { SearchEngine } from '../../app/search-engine/search-engine';
export interface ResultListOptions {
    /**
     * A list of indexed fields to include in the objects returned by the result list.
     * These results are included in addition to the default fields.
     * If this is left empty only the default fields are included.
     */
    fieldsToInclude?: string[];
}
export interface ResultListProps {
    /**
     * The options for the `ResultList` controller.
     * */
    options?: ResultListOptions;
}
/**
 * The `ResultList` headless controller offers a high-level interface for designing a common result list UI controller.
 */
export interface ResultList extends Controller {
    /**
     * Using the same parameters as the last successful query, fetch another batch of results, if available.
     * Particularly useful for infinite scrolling, for example.
     *
     * This method is not compatible with the `Pager` controller.
     */
    fetchMoreResults(): void;
    /**
     * The state of the `ResultList` controller.
     */
    state: ResultListState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `ResultList` controller.
 * */
export interface ResultListState extends SearchStatusState {
    /**
     * The results of the last executed search.
     * */
    results: Result[];
    /**
     * The unique identifier of the last executed search.
     */
    searchUid: string;
    /**
     * Whether more results are available, using the same parameters as the last successful query.
     *
     * This property is not compatible with the `Pager` controller.
     */
    moreResultsAvailable: boolean;
}
/**
 * Creates a `ResultList` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `ResultList` properties.
 * @returns A `ResultList` controller instance.
 */
export declare function buildResultList(engine: SearchEngine, props?: ResultListProps): ResultList;
