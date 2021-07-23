import { SearchEngine } from '../../app/search-engine/search-engine';
import { Controller } from '../controller/headless-controller';
export interface ResultsPerPageProps {
    /**
     * The initial state that should be applied to this `ResultsPerPage` controller.
     */
    initialState?: ResultsPerPageInitialState;
}
export interface ResultsPerPageInitialState {
    /**
     * The initial number of results to register in state.
     */
    numberOfResults?: number;
}
/**
 * The `ResultsPerPage` controller allows the end user to choose how many results to display per page.
 */
export interface ResultsPerPage extends Controller {
    /**
     * Updates the number of results to request per page.
     *
     * @param num - The number of results.
     */
    set(num: number): void;
    /** Checks whether the number of results per page is equal to the specified number.
     *
     * @param num - The number of results.
     * @returns `true` if the number of results is equal to the passed value, and `false` otherwise.
     */
    isSetTo(num: number): boolean;
    /**
     * The state of the `ResultsPerPage` controller.
     */
    state: ResultsPerPageState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `ResultsPerPage` controller.
 * */
export interface ResultsPerPageState {
    /**
     * The number of results per page.
     * */
    numberOfResults: number;
}
/**
 * Creates a `ResultsPerPage` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `ResultsPerPage` properties.
 * @returns A `ResultsPerPage` controller instance.
 */
export declare function buildResultsPerPage(engine: SearchEngine, props?: ResultsPerPageProps): ResultsPerPage;
