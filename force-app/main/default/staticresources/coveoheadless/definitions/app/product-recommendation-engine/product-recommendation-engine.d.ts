import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import { ProductRecommendationsAppState } from '../../state/product-recommendations-app-state';
import { CoreEngine, ExternalEngineOptions } from '../engine';
import { ProductRecommendationEngineConfiguration } from './product-recommendation-engine-configuration';
import { SearchThunkExtraArguments } from '../search-thunk-extra-arguments';
export { ProductRecommendationEngineConfiguration, getSampleProductRecommendationEngineConfiguration, } from './product-recommendation-engine-configuration';
declare const productRecommendationEngineReducers: {
    searchHub: import("redux").Reducer<string, import("redux").AnyAction>;
    productRecommendations: import("redux").Reducer<import("../../features/product-recommendations/product-recommendations-state").ProductRecommendationsState, import("redux").AnyAction>;
};
declare type ProductRecommendationEngineReducers = typeof productRecommendationEngineReducers;
declare type ProductRecommendationEngineState = StateFromReducersMapObject<ProductRecommendationEngineReducers> & Partial<ProductRecommendationsAppState>;
/**
 * The engine for powering production recommendation experiences.
 */
export interface ProductRecommendationEngine<State extends object = {}> extends CoreEngine<State & ProductRecommendationEngineState, SearchThunkExtraArguments> {
}
/**
 * The product recommendation engine options.
 */
export interface ProductRecommendationEngineOptions extends ExternalEngineOptions<ProductRecommendationEngineState> {
    /**
     * The product recommendation engine configuration options.
     */
    configuration: ProductRecommendationEngineConfiguration;
}
/**
 * Creates a product recommendation engine instance.
 *
 * @param options - The product recommendation engine options.
 * @returns A product recommendation engine instance.
 */
export declare function buildProductRecommendationEngine(options: ProductRecommendationEngineOptions): ProductRecommendationEngine;
