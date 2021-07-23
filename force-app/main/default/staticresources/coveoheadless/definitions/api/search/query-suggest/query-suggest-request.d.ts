import { BaseParam, ContextParam, LocaleParam } from '../../platform-service-params';
import { ActionsHistoryParam, PipelineParam, QueryParam, SearchHubParam } from '../search-api-params';
export declare type QuerySuggestRequest = BaseParam & QueryParam & ContextParam & PipelineParam & SearchHubParam & LocaleParam & ActionsHistoryParam & {
    count: number;
};
