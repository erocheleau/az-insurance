import { SearchParameters } from '../../features/search-parameters/search-parameter-actions';
import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export { SearchParameters };
export interface SearchParameterManagerProps {
    /**
     * The initial state that should be applied to the `SearchParameterManager` controller.
     */
    initialState: SearchParameterManagerInitialState;
}
export interface SearchParameterManagerInitialState {
    /**
     * The parameters affecting the search response.
     */
    parameters: SearchParameters;
}
/**
 * The `SearchParameterManager` controller allows restoring parameters that affect the results from e.g. a url.
 * */
export interface SearchParameterManager extends Controller {
    /**
     * The state relevant to the `SearchParameterManager` controller.
     * */
    state: SearchParameterManagerState;
}
export interface SearchParameterManagerState {
    /**
     * The parameters affecting the search response.
     */
    parameters: SearchParameters;
}
/**
 * Creates a `SearchParameterManager` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `SearchParameterManager` properties.
 * @returns A `SearchParameterManager` controller instance.
 */
export declare function buildSearchParameterManager(engine: SearchEngine, props: SearchParameterManagerProps): SearchParameterManager;
