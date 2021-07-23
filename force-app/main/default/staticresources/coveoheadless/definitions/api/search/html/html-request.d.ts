import { BaseParam } from '../../platform-service-params';
export interface HtmlRequestOptions {
    uniqueId: string;
    requestedOutputSize?: number;
}
export declare type HtmlRequest = BaseParam & HtmlRequestOptions & {
    enableNavigation: boolean;
    requestedOutputSize: number;
    q: string;
};
