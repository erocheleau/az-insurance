import { FacetSearchOptions } from './facet-search-request-options';
import { FacetSearchResponse } from '../../../api/search/facet-search/facet-search-response';
import { FacetSearchRequestOptions } from '../../../api/search/facet-search/base/base-facet-search-request';
export declare type FacetSearchState<T extends FacetSearchResponse> = {
    /**
     * The options used to perform a facet search request.
     */
    options: FacetSearchRequestOptions;
    /**
     * `true` if the facet search request is currently being executed against the Coveo platform, `false` otherwise.
     */
    isLoading: boolean;
    /**
     * The facet search response.
     */
    response: T;
    /** The initial maximum number of values to fetch.
     */
    initialNumberOfValues: number;
    /**
     * The unique identifier of the current request.
     */
    requestId: string;
};
export declare type FacetSearchSetState<T extends FacetSearchResponse> = Record<string, FacetSearchState<T>>;
export declare function handleFacetSearchRegistration<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: FacetSearchOptions, buildEmptyResponse: () => T): void;
export declare function handleFacetSearchUpdate<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: FacetSearchOptions): void;
export declare function handleFacetSearchPending<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, facetId: string, requestId: string): void;
export declare function handleFacetSearchRejected<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, facetId: string): void;
export declare function handleFacetSearchFulfilled<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: {
    facetId: string;
    response: T;
}, requestId: string): void;
export declare function handleFacetSearchClear<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, payload: FacetSearchOptions, buildEmptyResponse: () => T): void;
export declare function handleFacetSearchSetClear<T extends FacetSearchResponse>(state: FacetSearchSetState<T>, buildEmptyResponse: () => T): void;
export declare const defaultFacetSearchOptions: FacetSearchRequestOptions;
