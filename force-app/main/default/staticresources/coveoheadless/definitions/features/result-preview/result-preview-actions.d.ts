import { HtmlRequestOptions } from '../../api/search/html/html-request';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { StateNeededByHtmlEndpoint } from './result-preview-request-builder';
interface FetchResultContentResponse {
    content: string;
    uniqueId: string;
}
export declare const fetchResultContent: import("@reduxjs/toolkit").AsyncThunk<FetchResultContentResponse, HtmlRequestOptions, AsyncThunkSearchOptions<StateNeededByHtmlEndpoint>>;
export {};
