import { AnalyticsType } from '../../../analytics/analytics-utils';
import { NumericFacetValue } from './interfaces/response';
export interface LogNumericFacetBreadcrumbActionCreatorPayload {
    /**
     * The facet id of the numeric facet corresponding to the breadcrumb.
     */
    facetId: string;
    /**
     * The numeric facet value deselected using the breadcrumb.
     */
    selection: NumericFacetValue;
}
/**
 * Logs a numeric facet breadcrumb event.
 */
export declare const logNumericFacetBreadcrumb: (payload: LogNumericFacetBreadcrumbActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
