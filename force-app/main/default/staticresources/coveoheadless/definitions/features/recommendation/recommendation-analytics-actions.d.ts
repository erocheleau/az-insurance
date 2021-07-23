import { Result } from '../../api/search/search/result';
import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Logs a search event with an `actionCause` value of `recommendationInterfaceLoad`.
 */
export declare const logRecommendationUpdate: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logRecommendationOpen: (result: Result) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Click;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
