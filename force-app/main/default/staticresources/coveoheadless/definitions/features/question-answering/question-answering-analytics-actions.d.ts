import { AnalyticsType } from '../analytics/analytics-utils';
import { QuestionAnsweringDocumentIdActionCreatorPayload } from './question-answering-document-id';
export declare const logExpandSmartSnippet: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logCollapseSmartSnippet: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logLikeSmartSnippet: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logDislikeSmartSnippet: import("@reduxjs/toolkit").AsyncThunk<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logExpandSmartSnippetSuggestion: (payload: QuestionAnsweringDocumentIdActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
export declare const logCollapseSmartSnippetSuggestion: (payload: QuestionAnsweringDocumentIdActionCreatorPayload) => import("@reduxjs/toolkit").AsyncThunkAction<{
    analyticsType: AnalyticsType.Custom;
}, void, import("../analytics/analytics-utils").AsyncThunkAnalyticsOptions<import("../../api/analytics/analytics").StateNeededByAnalyticsProvider>>;
