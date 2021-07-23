import { FacetSortCriterion } from './interfaces/request';
import { RangeFacetSortCriterion } from '../range-facets/generic/interfaces/request';
import { AnalyticsType } from '../../analytics/analytics-utils';
/**
 * Logs a facet show more event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetShowMore: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet show less event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetShowLess: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet search event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetSearch: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetUpdateSortActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The updated sort criterion.
     */
    criterion: FacetSortCriterion | RangeFacetSortCriterion;
}
/**
 * Logs a facet sort event.
 * @param payload (LogFacetUpdateSortActionCreatorPayload) Object specifying the facet and sort criterion.
 */
export declare const logFacetUpdateSort: (payload: LogFacetUpdateSortActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
/**
 * Logs a facet clear all event.
 * @param facetId (string) The unique identifier of the facet (e.g., `"1"`).
 */
export declare const logFacetClearAll: (facetId: string) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetSelectActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The facet value that was selected.
     */
    facetValue: string;
}
/**
 * Logs a facet value selection event.
 * @param payload (LogFacetSelectActionCreatorPayload) Object specifying the target facet and value.
 */
export declare const logFacetSelect: (payload: LogFacetSelectActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetDeselectActionCreatorPayload {
    /**
     * The facet id.
     */
    facetId: string;
    /**
     * The facet value that was deselected.
     */
    facetValue: string;
}
/**
 * Logs a facet deselect event.
 * @param payload (LogFacetDeselectActionCreatorPayload) Object specifying the target facet and value.
 */
export declare const logFacetDeselect: (payload: LogFacetDeselectActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export interface LogFacetBreadcrumbActionCreatorPayload {
    /**
     * The facet id associated with the breadcrumb.
     */
    facetId: string;
    /**
     * The facet value displayed in the breadcrumb.
     */
    facetValue: string;
}
/**
 * Logs a facet breadcrumb event.
 * @param payload (LogFacetBreadcrumbActionCreatorPayload) Object specifying the target facet and value.
 */
export declare const logFacetBreadcrumb: (payload: LogFacetBreadcrumbActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Search;
}, void, import("../../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
