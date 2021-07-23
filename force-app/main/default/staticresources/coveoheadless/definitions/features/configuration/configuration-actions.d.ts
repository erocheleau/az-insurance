import { StringValue } from '@coveo/bueno';
import { IRuntimeEnvironment } from 'coveo.analytics';
export declare const localeValidation: StringValue<string>;
export interface UpdateBasicConfigurationActionCreatorPayload {
    /**
     * The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
     */
    accessToken?: string;
    /**
     * The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
     */
    organizationId?: string;
    /**
     * The Plaform URL to use (e.g., `https://platform.cloud.coveo.com`).
     */
    platformUrl?: string;
}
/**
 * Updates the global headless engine configuration.
 * @param accessToken (string) The access token to use to authenticate requests against the Coveo Cloud endpoints. Typically, this will be an API key or search token that grants the privileges to execute queries and push usage analytics data in the target Coveo Cloud organization.
 * @param organizationId (string) The unique identifier of the target Coveo Cloud organization (e.g., `mycoveocloudorganizationg8tp8wu3`)
 * @param platformUrl (string) The Plaform URL to use (e.g., `https://platform.cloud.coveo.com`).
 */
export declare const updateBasicConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateBasicConfigurationActionCreatorPayload], UpdateBasicConfigurationActionCreatorPayload, "configuration/updateBasicConfiguration", never, never>;
export interface UpdateSearchConfigurationActionCreatorPayload {
    /**
     * The Search API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/search/v2`).
     */
    apiBaseUrl?: string;
    /**
     * The name of the query pipeline to use for the query (e.g., `External Search`).
     */
    pipeline?: string;
    /**
     * The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates (e.g., `ExternalSearch`).
     */
    searchHub?: string;
    /**
     * The locale of the current user. Must comply with IETF’s BCP 47 definition: https://www.rfc-editor.org/rfc/bcp/bcp47.txt.
     */
    locale?: string;
}
/**
 * Updates the search configuration.
 * @param apiBaseUrl (string) The Search API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/search/v2`).
 * @param pipeline (string) The name of the query pipeline to use for the query (e.g., `External Search`).
 * @param searchHub (string) The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates (e.g., `ExternalSearch`).
 * @param locale (string) The locale of the current user. Must comply with IETF’s BCP 47 definition: https://www.rfc-editor.org/rfc/bcp/bcp47.txt.
 */
export declare const updateSearchConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateSearchConfigurationActionCreatorPayload], UpdateSearchConfigurationActionCreatorPayload, "configuration/updateSearchConfiguration", never, never>;
export interface UpdateAnalyticsConfigurationActionCreatorPayload {
    /**
     * Whether to enable usage analytics tracking.
     */
    enabled?: boolean;
    /**
     * The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab from which the usage analytics event originates (e.g., `All`).
     */
    originLevel2?: string;
    /**
     * The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface that’s making the request (e.g., `https://connect.coveo.com/s/`).
     */
    originLevel3?: string;
    /**
     * The Usage Analytics API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/ua`).
     */
    apiBaseUrl?: string;
    /**
     * The Coveo analytics runtime to use, see https://github.com/coveo/coveo.analytics.js for more info.
     */
    runtimeEnvironment?: AnalyticsRuntimeEnvironment;
}
export declare type AnalyticsRuntimeEnvironment = IRuntimeEnvironment;
/**
 * Updates the analytics configuration.
 * @param enabled (boolean) Whether to enable usage analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab from which the usage analytics event originates (e.g., `All`).
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface that’s making the request (e.g., `https://connect.coveo.com/s/`).
 * @param apiBaseUrl (string) The Usage Analytics API base URL to use (e.g., `https://platform.cloud.coveo.com/rest/ua`).
 * @param runtimeEnvironment (IRuntimeEnvironment) The Coveo analytics runtime to use, see https://github.com/coveo/coveo.analytics.js for more info.
 */
export declare const updateAnalyticsConfiguration: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: UpdateAnalyticsConfigurationActionCreatorPayload], UpdateAnalyticsConfigurationActionCreatorPayload, "configuration/updateAnalyticsConfiguration", never, never>;
/**
 * Disables analytics tracking.
 */
export declare const disableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/disable">;
/**
 * Enables analytics tracking.
 */
export declare const enableAnalytics: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"configuration/analytics/enable">;
export interface SetOriginLevel2ActionCreatorPayload {
    /**
     * The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab (e.g., `All`).
     */
    originLevel2: string;
}
/**
 * Sets originLevel2 for analytics tracking.
 * @param originLevel2 (string) The origin level 2 usage analytics event metadata whose value should typically be the identifier of the tab (e.g., `All`).
 */
export declare const setOriginLevel2: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetOriginLevel2ActionCreatorPayload], SetOriginLevel2ActionCreatorPayload, "configuration/analytics/originlevel2", never, never>;
export interface SetOriginLevel3ActionCreatorPayload {
    /**
     * The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface (e.g., `https://connect.coveo.com/s/`).
     */
    originLevel3: string;
}
/**
 * Sets originLevel3 for analytics tracking.
 * @param originLevel3 (string) The origin level 3 usage analytics event metadata whose value should typically be the URL of the page that linked to the search interface (e.g., `https://connect.coveo.com/s/`).
 */
export declare const setOriginLevel3: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetOriginLevel3ActionCreatorPayload], SetOriginLevel3ActionCreatorPayload, "configuration/analytics/originlevel3", never, never>;
