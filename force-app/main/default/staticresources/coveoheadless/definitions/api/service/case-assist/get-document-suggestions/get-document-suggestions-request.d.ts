import { BaseParam, ContextParam, DebugParam, LocaleParam, NumberOfResultsParam, VisitorIDParam } from '../../../platform-service-params';
import { CaseAssistIdParam, FieldsParam } from '../case-assist-params';
export declare type GetDocumentSuggestionsRequest = BaseParam & CaseAssistIdParam & VisitorIDParam & LocaleParam & FieldsParam & ContextParam & NumberOfResultsParam & DebugParam;
export declare const buildGetDocumentSuggestionsRequest: (req: GetDocumentSuggestionsRequest) => {
    requestParams: {
        visitorId: string | undefined;
        locale: string | undefined;
        fields: Record<string, unknown>;
        context: Record<string, string | string[]> | undefined;
    };
    accessToken: string;
    method: import("../../../platform-client").HttpMethods;
    contentType: import("../../../platform-client").HTTPContentType;
    url: string;
};
