import { CoveoSearchPageClient, SearchPageClientProvider, history, AnalyticsClientSendEventHook } from 'coveo.analytics';
import { Logger } from 'pino';
import { ConfigurationSection, ContextSection, PipelineSection, QuerySection, RecommendationSection, SearchHubSection, SearchSection } from '../../state/state-sections';
import { PreprocessRequest } from '../preprocess-request';
import { SectionNeededForFacetMetadata } from '../../features/facets/facet-set/facet-set-analytics-actions-utils';
export declare type StateNeededByAnalyticsProvider = ConfigurationSection & Partial<SearchHubSection & SearchSection & PipelineSection & QuerySection & ContextSection & RecommendationSection & SectionNeededForFacetMetadata>;
export declare class AnalyticsProvider implements SearchPageClientProvider {
    private state;
    constructor(state: StateNeededByAnalyticsProvider);
    getLanguage(): string;
    getSearchEventRequestPayload(): {
        queryText: string;
        responseTime: number;
        results: {
            documentUri: string;
            documentUriHash: string;
        }[] | undefined;
        numberOfResults: number;
        getBaseMetadata: Record<string, string | string[]>;
    };
    getBaseMetadata(): Record<string, string | string[]>;
    getSearchUID(): string;
    getPipeline(): string;
    getOriginLevel1(): string;
    getOriginLevel2(): string;
    getOriginLevel3(): string;
    getFacetState(): import("coveo.analytics/dist/definitions/events").FacetStateRequest[];
    private mapResultsToAnalyticsDocument;
    private get queryText();
    private get responseTime();
    private get numberOfResults();
}
interface ConfigureAnalyticsOptions {
    state: StateNeededByAnalyticsProvider;
    logger: Logger;
    analyticsClientMiddleware?: AnalyticsClientSendEventHook;
    preprocessRequest?: PreprocessRequest;
    provider?: SearchPageClientProvider;
}
export declare const configureAnalytics: ({ logger, state, analyticsClientMiddleware, preprocessRequest, provider, }: ConfigureAnalyticsOptions) => CoveoSearchPageClient;
export declare const getVisitorID: () => string;
export declare const historyStore: history.HistoryStore;
export {};
