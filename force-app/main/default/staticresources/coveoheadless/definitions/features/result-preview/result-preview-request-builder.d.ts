import { HtmlRequest, HtmlRequestOptions } from '../../api/search/html/html-request';
import { ConfigurationSection, QuerySection, ResultPreviewSection } from '../../state/state-sections';
export declare type StateNeededByHtmlEndpoint = ConfigurationSection & ResultPreviewSection & Partial<QuerySection>;
export declare function buildResultPreviewRequest(state: StateNeededByHtmlEndpoint, options: HtmlRequestOptions): HtmlRequest;
