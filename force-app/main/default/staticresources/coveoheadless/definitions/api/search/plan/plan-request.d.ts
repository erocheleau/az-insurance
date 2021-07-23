import { BaseParam, ContextParam, LocaleParam } from '../../platform-service-params';
import { PipelineParam, QueryParam, SearchHubParam } from '../search-api-params';
export declare type PlanRequest = BaseParam & SearchHubParam & ContextParam & QueryParam & PipelineParam & LocaleParam;