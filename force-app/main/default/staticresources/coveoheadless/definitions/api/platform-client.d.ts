export declare type HttpMethods = 'POST' | 'GET' | 'DELETE' | 'PUT';
export declare type HTTPContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'text/html';
import { Logger } from 'pino';
import { DisconnectedError, ExpiredTokenError } from '../utils/errors';
import { PreprocessRequest } from './preprocess-request';
export interface PlatformClientCallOptions {
    url: string;
    method: HttpMethods;
    contentType: HTTPContentType;
    headers?: Record<string, string>;
    requestParams: unknown;
    accessToken: string;
    preprocessRequest: PreprocessRequest;
    logger: Logger;
    signal?: AbortSignal;
}
export interface PlatformResponse<T> {
    body: T;
    response: Response;
}
export declare type PlatformClientCallError = ExpiredTokenError | DisconnectedError | Error;
export declare class PlatformClient {
    static call(options: PlatformClientCallOptions): Promise<Response | PlatformClientCallError>;
}
declare type PlatformCombination = {
    env: 'dev';
    region: 'us-east-1' | 'eu-west-1' | 'eu-west-3';
} | {
    env: 'qa';
    region: 'us-east-1' | 'eu-west-1' | 'ap-southeast-2';
} | {
    env: 'hipaa';
    region: 'us-east-1';
} | {
    env: 'prod';
    region: 'us-east-1' | 'us-west-2' | 'eu-west-1';
};
declare type PlatformEnvironment = PlatformCombination['env'];
export declare function platformUrl<E extends PlatformEnvironment = 'prod'>(options?: {
    environment?: E;
    region?: Extract<PlatformCombination, {
        env: E;
    }>['region'];
}): string;
export {};
