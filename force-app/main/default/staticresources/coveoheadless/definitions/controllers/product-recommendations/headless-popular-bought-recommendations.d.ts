import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
    additionalFields: string[] | null | undefined;
}>;
export declare type PopularBoughtRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface PopularBoughtRecommendationsListProps {
    options?: PopularBoughtRecommendationsListOptions;
}
export declare type PopularBoughtRecommendationsList = ReturnType<typeof buildPopularBoughtRecommendationsList>;
export declare type PopularBoughtRecommendationsListState = PopularBoughtRecommendationsList['state'];
export declare const buildPopularBoughtRecommendationsList: (engine: ProductRecommendationEngine, props?: PopularBoughtRecommendationsListProps) => {
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
