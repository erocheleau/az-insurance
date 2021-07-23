import { OmniboxSuggestionsMetadata } from 'coveo.analytics/src/searchPage/searchPageEvents';
import { SearchAppState } from '../../state/search-app-state';
import { AnalyticsType } from '../analytics/analytics-utils';
export interface LogQuerySuggestionClickActionCreatorPayload {
    /**
     * The search box id.
     */
    id: string;
    /**
     * The selected query suggestion.
     */
    suggestion: string;
}
export declare const logQuerySuggestionClick: (payload: LogQuerySuggestionClickActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare type OmniboxSuggestionMetadata = OmniboxSuggestionsMetadata;
export declare function buildOmniboxSuggestionMetadata(state: Partial<SearchAppState>, payload: LogQuerySuggestionClickActionCreatorPayload): OmniboxSuggestionMetadata;
