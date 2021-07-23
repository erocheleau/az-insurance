import { BaseParam, DebugParam, LocaleParam, VisitorIDParam } from '../../../platform-service-params';
import { CaseAssistIdParam, FieldsParam } from '../case-assist-params';
export declare type GetCaseClassificationsRequest = BaseParam & CaseAssistIdParam & VisitorIDParam & LocaleParam & FieldsParam & DebugParam;
export declare const buildGetCaseClassificationsRequest: (req: GetCaseClassificationsRequest) => {
    requestParams: {
        visitorId: string | undefined;
        locale: string | undefined;
        fields: Record<string, unknown>;
    };
    accessToken: string;
    method: import("../../../platform-client").HttpMethods;
    contentType: import("../../../platform-client").HTTPContentType;
    url: string;
};
