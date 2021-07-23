import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
    additionalFields: string[] | null | undefined;
}>;
export declare type PopularViewedRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface PopularViewedRecommendationsListProps {
    options?: PopularViewedRecommendationsListOptions;
}
export declare type PopularViewedRecommendationsList = ReturnType<typeof buildPopularViewedRecommendationsList>;
export declare type PopularViewedRecommendationsListState = PopularViewedRecommendationsList['state'];
export declare function buildPopularViewedRecommendationsList(engine: ProductRecommendationEngine, props?: PopularViewedRecommendationsListProps): {
    state: {
        maxNumberOfRecommendations: number;
        recommendations: import("./headless-cart-recommendations").ProductRecommendation[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    refresh(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
