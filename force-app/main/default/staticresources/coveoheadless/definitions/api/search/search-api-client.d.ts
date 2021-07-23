import { PlanResponseSuccess, Plan } from './plan/plan-response';
import { QuerySuggestSuccessResponse, QuerySuggest } from './query-suggest/query-suggest-response';
import { SearchRequest } from './search/search-request';
import { Search, SearchResponseSuccess } from './search/search-response';
import { SearchAPIErrorWithStatusCode } from './search-api-error-response';
import { PlanRequest } from './plan/plan-request';
import { QuerySuggestRequest } from './query-suggest/query-suggest-request';
import { FacetSearchRequest } from './facet-search/facet-search-request';
import { SearchAppState } from '../../state/search-app-state';
import { RecommendationRequest } from './recommendation/recommendation-request';
import { ProductRecommendationsRequest } from './product-recommendations/product-recommendations-request';
import { Logger } from 'pino';
import { PostprocessFacetSearchResponseMiddleware, PostprocessQuerySuggestResponseMiddleware, PostprocessSearchResponseMiddleware } from './search-api-client-middleware';
import { PreprocessRequest } from '../preprocess-request';
import { HtmlRequest } from './html/html-request';
import { SearchThunkExtraArguments } from '../../app/search-thunk-extra-arguments';
export declare type AllSearchAPIResponse = Plan | Search | QuerySuggest;
export interface AsyncThunkSearchOptions<T extends Partial<SearchAppState>> {
    state: T;
    rejectValue: SearchAPIErrorWithStatusCode;
    extra: SearchThunkExtraArguments;
}
export interface SearchAPIClientOptions {
    logger: Logger;
    preprocessRequest: PreprocessRequest;
    postprocessSearchResponseMiddleware: PostprocessSearchResponseMiddleware;
    postprocessQuerySuggestResponseMiddleware: PostprocessQuerySuggestResponseMiddleware;
    postprocessFacetSearchResponseMiddleware: PostprocessFacetSearchResponseMiddleware;
}
export declare type SearchAPIClientResponse<T> = {
    success: T;
} | {
    error: SearchAPIErrorWithStatusCode;
};
export declare class SearchAPIClient {
    private options;
    constructor(options: SearchAPIClientOptions);
    plan(req: PlanRequest): Promise<SearchAPIClientResponse<PlanResponseSuccess>>;
    querySuggest(req: QuerySuggestRequest): Promise<SearchAPIClientResponse<QuerySuggestSuccessResponse>>;
    private searchAbortController;
    search(req: SearchRequest): Promise<SearchAPIClientResponse<SearchResponseSuccess>>;
    facetSearch(req: FacetSearchRequest): Promise<import("./facet-search/facet-search-response").FacetSearchResponse>;
    recommendations(req: RecommendationRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    html(req: HtmlRequest): Promise<{
        success: string;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    productRecommendations(req: ProductRecommendationsRequest): Promise<{
        success: SearchResponseSuccess;
        error?: undefined;
    } | {
        error: SearchAPIErrorWithStatusCode;
        success?: undefined;
    }>;
    private getAbortControllerInstanceIfAvailable;
}
export declare const isSuccessResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    success: T;
};
export declare const isErrorResponse: <T>(r: SearchAPIClientResponse<T>) => r is {
    error: SearchAPIErrorWithStatusCode;
};
