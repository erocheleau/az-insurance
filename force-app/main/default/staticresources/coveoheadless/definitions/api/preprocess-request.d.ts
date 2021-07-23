import { AnalyticsClientOrigin } from 'coveo.analytics/dist/definitions/client/analyticsRequestClient';
export interface PlatformRequestOptions extends RequestInit {
    url: string;
}
export declare type PlatformClientOrigin = AnalyticsClientOrigin | 'searchApiFetch';
export declare type PreprocessRequest = (request: PlatformRequestOptions, clientOrigin: PlatformClientOrigin) => PlatformRequestOptions | Promise<PlatformRequestOptions>;
export declare const NoopPreprocessRequest: PreprocessRequest;
