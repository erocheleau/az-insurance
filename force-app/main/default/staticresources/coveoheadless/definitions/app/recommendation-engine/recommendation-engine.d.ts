import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { CoreEngine, ExternalEngineOptions } from '../engine';
import { SearchThunkExtraArguments } from '../search-thunk-extra-arguments';
import { RecommendationAppState } from '../../state/recommendation-app-state';
import { RecommendationEngineConfiguration, getSampleRecommendationEngineConfiguration } from './recommendation-engine-configuration';
export { RecommendationEngineConfiguration, getSampleRecommendationEngineConfiguration, };
declare const recommendationEngineReducers: {
    debug: import("redux").Reducer<boolean, import("redux").AnyAction>;
    pipeline: import("redux").Reducer<string, import("redux").AnyAction>;
    searchHub: import("redux").Reducer<string, import("redux").AnyAction>;
    recommendation: import("redux").Reducer<import("../../features/recommendation/recommendation-state").RecommendationState, import("redux").AnyAction>;
};
declare type RecommendationEngineReducers = typeof recommendationEngineReducers;
declare type RecommendationEngineState = StateFromReducersMapObject<RecommendationEngineReducers> & Partial<RecommendationAppState>;
/**
 * The engine for powering recommendation experiences.
 */
export interface RecommendationEngine<State extends object = {}> extends CoreEngine<State & RecommendationEngineState, SearchThunkExtraArguments> {
}
/**
 * The recommendation engine options.
 */
export interface RecommendationEngineOptions extends ExternalEngineOptions<RecommendationEngineState> {
    /**
     * The recommendation engine configuration options.
     */
    configuration: RecommendationEngineConfiguration;
}
/**
 * Creates a recommendation engine instance.
 *
 * @param options - The recommendation engine options.
 * @returns A recommendation engine instance.
 */
export declare function buildRecommendationEngine(options: RecommendationEngineOptions): RecommendationEngine;
