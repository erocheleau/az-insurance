import { ReducersMapObject, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { SearchAPIClient } from '../api/search/search-api-client';
import { Logger } from 'pino';
import { PreprocessRequestMiddleware } from '../api/platform-client';
import { PostprocessFacetSearchResponseMiddleware, PostprocessQuerySuggestResponseMiddleware, PostprocessSearchResponseMiddleware } from '../api/search/search-api-client-middleware';
import { CoreEngine, EngineOptions } from './engine';
import { EngineConfigurationOptions } from './engine-configuration-options';
import { ThunkExtraArguments } from './thunk-extra-arguments';
import { SearchAppState } from '../state/search-app-state';
declare const headlessReducers: {
    pipeline: import("redux").Reducer<string, import("redux").AnyAction>;
    searchHub: import("redux").Reducer<string, import("redux").AnyAction>;
};
declare type HeadlessReducers = typeof headlessReducers;
declare type HeadlessState = StateFromReducersMapObject<HeadlessReducers>;
/**
 * The global headless engine options.
 */
export interface HeadlessOptions<Reducers extends ReducersMapObject> extends EngineOptions<Reducers> {
    /**
     * The global headless engine configuration options.
     */
    configuration: HeadlessConfigurationOptions;
}
/**
 * The global headless engine configuration options.
 */
export interface HeadlessConfigurationOptions extends EngineConfigurationOptions {
    /**
     * The global headless engine configuration options specific to the SearchAPI.
     */
    search?: {
        /**
         * Specifies the name of the query pipeline to use for the query. If not specified, the default query pipeline will be used.
         */
        pipeline?: string;
        /**
         * The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates.
         * Coveo Machine Learning models use this information to provide contextually relevant output.
         * Notes:
         *    This parameter will be overridden if the search request is authenticated by a search token that enforces a specific searchHub.
         *    When logging a Search usage analytics event for a query, the originLevel1 field of that event should be set to the value of the searchHub search request parameter.
         */
        searchHub?: string;
        /**
         * The locale of the current user. Must comply with IETF’s BCP 47 definition: https://www.rfc-editor.org/rfc/bcp/bcp47.txt.
         *
         * Notes:
         *  Coveo Machine Learning models use this information to provide contextually relevant output.
         *  Moreover, this information can be referred to in query expressions and QPL statements by using the $locale object.
         */
        locale?: string;
        /**
         * Allows for augmenting a request (search, facet-search, query-suggest, etc.) before it is sent.
         * @deprecated Use `preprocessRequest` instead.
         */
        preprocessRequestMiddleware?: PreprocessRequestMiddleware;
        /**
         * Allows for augmenting a search response before the state is updated.
         */
        preprocessSearchResponseMiddleware?: PostprocessSearchResponseMiddleware;
        /**
         * Allows for augmenting a facet-search response before the state is updated.
         */
        preprocessFacetSearchResponseMiddleware?: PostprocessFacetSearchResponseMiddleware;
        /**
         * Allows for augmenting a query-suggest response before the state is updated.
         */
        preprocessQuerySuggestResponseMiddleware?: PostprocessQuerySuggestResponseMiddleware;
    };
}
/**
 * The engine for powering search experiences.
 */
export interface Engine<State = SearchAppState> extends CoreEngine<State & HeadlessState, SearchThunkExtraArguments> {
}
export interface SearchThunkExtraArguments extends ThunkExtraArguments {
    searchAPIClient: SearchAPIClient;
}
/**
 * The global headless engine.
 * You should instantiate one `HeadlessEngine` class per application and share it.
 * Every headless controller requires an instance of `Engine` as a parameter.
 */
export declare class HeadlessEngine<Reducers extends ReducersMapObject> implements Engine<StateFromReducersMapObject<Reducers>> {
    private options;
    logger: Logger;
    private engine;
    constructor(options: HeadlessOptions<Reducers>);
    addReducers(reducers: ReducersMapObject): void;
    private validateConfiguration;
    private createSearchAPIClient;
    /**
     * @returns A configuration with sample data for testing purposes.
     */
    static getSampleConfiguration(): HeadlessConfigurationOptions;
    /**
     * Enable analytics tracking
     */
    enableAnalytics(): void;
    /**
     * Disable analytics tracking
     */
    disableAnalytics(): void;
    get store(): import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
    get dispatch(): import("redux-thunk").ThunkDispatch<StateFromReducersMapObject<Reducers> & {
        pipeline: string;
        searchHub: string;
    } & {
        configuration: import("../features/configuration/configuration-state").ConfigurationState;
        version: string;
    }, SearchThunkExtraArguments, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
    get subscribe(): (listener: () => void) => import("redux").Unsubscribe;
    get state(): StateFromReducersMapObject<Reducers> & {
        pipeline: string;
        searchHub: string;
    } & {
        configuration: import("../features/configuration/configuration-state").ConfigurationState;
        version: string;
    };
    renewAccessToken(): Promise<string>;
}
export {};
