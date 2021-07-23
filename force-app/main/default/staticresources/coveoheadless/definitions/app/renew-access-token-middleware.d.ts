import { Middleware } from '@reduxjs/toolkit';
import { Logger } from 'pino';
export declare function createRenewAccessTokenMiddleware(logger: Logger, renewToken?: () => Promise<string>): Middleware;
