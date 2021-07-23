import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export interface UrlManagerProps {
    /**
     * The initial state that should be applied to the `UrlManager` controller.
     */
    initialState: UrlManagerInitialState;
}
export interface UrlManagerInitialState {
    /**
     * The part of the url that contains search parameters.
     * E.g., `q=windmill&f[author]=Cervantes`
     */
    fragment: string;
}
/**
 * The `UrlManager` controller can parse an url fragment to extract search parameters which affect the search response.
 * */
export interface UrlManager extends Controller {
    /**
     * The state relevant to the `UrlManager` controller.
     * */
    state: UrlManagerState;
    /**
     * Updates the search parameters in state with those from the url & launches a search.
     * @param fragment The part of the url that contains search parameters.  E.g., `q=windmill&f[author]=Cervantes`
     */
    synchronize(fragment: string): void;
}
export interface UrlManagerState {
    /**
     * The part of the url that contains search parameters.
     * E.g., `q=windmill&f[author]=Cervantes`
     */
    fragment: string;
}
/**
 * Creates a `UrlManager` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `UrlManager` properties.
 * @returns A `UrlManager` controller instance.
 */
export declare function buildUrlManager(engine: SearchEngine, props: UrlManagerProps): UrlManager;
