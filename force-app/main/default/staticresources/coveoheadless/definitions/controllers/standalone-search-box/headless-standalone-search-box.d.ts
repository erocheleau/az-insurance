import { SearchEngine } from '../../app/search-engine/search-engine';
import { OmniboxSuggestionMetadata } from '../../features/query-suggest/query-suggest-analytics-actions';
import { SearchBox, SearchBoxState } from '../search-box/headless-search-box';
import { StandaloneSearchBoxOptions } from './headless-standalone-search-box-options';
export { StandaloneSearchBoxOptions };
export interface StandaloneSearchBoxProps {
    options: StandaloneSearchBoxOptions;
}
/**
 * The `StandaloneSearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 * Meant to be used for a search box that will redirect instead of executing a query.
 */
export interface StandaloneSearchBox extends SearchBox {
    /**
     * Triggers a redirection.
     */
    submit(): void;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `StandaloneSearchBox` controller.
     */
    state: StandaloneSearchBoxState;
}
export interface StandaloneSearchBoxState extends SearchBoxState {
    /**
     * The analytics data to send when performing the first query on the search page the user is redirected to.
     */
    analytics: StandaloneSearchBoxAnalyticsData;
    /**
     * The Url to redirect to.
     */
    redirectTo: string | null;
}
interface InitialData {
    cause: '';
    metadata: null;
}
interface SearchFromLinkData {
    cause: 'searchFromLink';
    metadata: null;
}
interface OmniboxFromLinkData {
    cause: 'omniboxFromLink';
    metadata: OmniboxSuggestionMetadata;
}
declare type StandaloneSearchBoxAnalyticsData = InitialData | SearchFromLinkData | OmniboxFromLinkData;
/**
 * Creates a `StandaloneSearchBox` instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `StandaloneSearchBox` properties.
 * @returns A `StandaloneSearchBox` instance.
 */
export declare function buildStandaloneSearchBox(engine: SearchEngine, props: StandaloneSearchBoxProps): StandaloneSearchBox;
