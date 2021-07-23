import { ArrayValue, NumberValue, Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
export declare const baseProductRecommendationsOptionsSchema: {
    additionalFields: ArrayValue<string>;
    skus: ArrayValue<string>;
    maxNumberOfRecommendations: NumberValue;
};
declare const optionsSchema: Schema<{
    additionalFields: string[] | null | undefined;
    skus: string[] | null | undefined;
    maxNumberOfRecommendations: number;
    id: string;
}>;
export declare type ProductRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface ProductRecommendationsListProps {
    options?: ProductRecommendationsListOptions;
}
export declare type ProductRecommendationsList = ReturnType<typeof buildBaseProductRecommendationsList>;
export declare type ProductRecommendationsListState = ProductRecommendationsList['state'];
export declare const buildBaseProductRecommendationsList: (engine: ProductRecommendationEngine, props?: ProductRecommendationsListProps) => {
    setSkus(skus: string[]): void;
    refresh(): void;
    state: {
        skus: string[];
        maxNumberOfRecommendations: number;
        recommendations: import("./headless-cart-recommendations").ProductRecommendation[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
