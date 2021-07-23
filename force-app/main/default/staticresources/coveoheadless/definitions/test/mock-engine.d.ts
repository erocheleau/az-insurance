import { AnyAction, ActionCreatorWithPreparedPayload } from '@reduxjs/toolkit';
import { SearchAppState } from '../state/search-app-state';
import { RecommendationAppState } from '../state/recommendation-app-state';
import { ProductRecommendationsAppState } from '../state/product-recommendations-app-state';
import { SearchEngine } from '../app/search-engine/search-engine';
import { RecommendationEngine } from '../app/recommendation-engine/recommendation-engine';
import { ProductRecommendationEngine } from '../app/product-recommendation-engine/product-recommendation-engine';
declare type AsyncActionCreator<ThunkArg> = ActionCreatorWithPreparedPayload<[
    string,
    ThunkArg
], undefined, string, never, {
    arg: ThunkArg;
    requestId: string;
}>;
interface MockEngine {
    actions: AnyAction[];
    findAsyncAction: <ThunkArg>(action: AsyncActionCreator<ThunkArg>) => ReturnType<AsyncActionCreator<ThunkArg>> | undefined;
}
export interface MockSearchEngine extends SearchEngine<SearchAppState>, MockEngine {
}
export declare function buildMockSearchAppEngine(config?: Partial<SearchEngine<SearchAppState>>): MockSearchEngine;
export interface MockRecommendationEngine extends RecommendationEngine, MockEngine {
}
export declare function buildMockRecommendationAppEngine(config?: Partial<RecommendationEngine<RecommendationAppState>>): MockRecommendationEngine;
export interface MockProductRecommendationEngine extends ProductRecommendationEngine, MockEngine {
}
export declare function buildMockProductRecommendationsAppEngine(config?: Partial<ProductRecommendationEngine<ProductRecommendationsAppState>>): MockProductRecommendationEngine;
export {};
