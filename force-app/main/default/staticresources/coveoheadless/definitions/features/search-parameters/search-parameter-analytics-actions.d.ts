import { SearchParameters } from '../../features/search-parameters/search-parameter-actions';
export declare function logParametersChange(previousParameters: SearchParameters, newParameters: SearchParameters): import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: import("../analytics/analytics-utils").AnalyticsType.Search;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
