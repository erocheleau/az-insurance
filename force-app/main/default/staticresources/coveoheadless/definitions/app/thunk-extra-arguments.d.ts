import { AnalyticsClientSendEventHook } from 'coveo.analytics';
import { Logger } from 'pino';
import { PreprocessRequest } from '../api/preprocess-request';
import { validatePayloadAndThrow } from '../utils/validate-payload';
import { EngineConfiguration } from './engine-configuration';
export interface ThunkExtraArguments {
    preprocessRequest?: PreprocessRequest;
    analyticsClientMiddleware: AnalyticsClientSendEventHook;
    logger: Logger;
    validatePayload: typeof validatePayloadAndThrow;
}
export declare function buildThunkExtraArguments(configuration: EngineConfiguration, logger: Logger): ThunkExtraArguments;
