import { AnalyticsType } from '../analytics/analytics-utils';
/**
 * Log redirection
 */
export declare const logRedirection: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
