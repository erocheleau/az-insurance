import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    sku: string;
    maxNumberOfRecommendations: number;
    additionalFields: string[] | null | undefined;
}>;
export declare type FrequentlyBoughtTogetherListOptions = SchemaValues<typeof optionsSchema>;
export interface FrequentlyBoughtTogetherListProps {
    options?: FrequentlyBoughtTogetherListOptions;
}
export declare type FrequentlyBoughtTogetherList = ReturnType<typeof buildFrequentlyBoughtTogetherList>;
export declare type FrequentlyBoughtTogetherListState = FrequentlyBoughtTogetherList['state'];
export declare const buildFrequentlyBoughtTogetherList: (engine: ProductRecommendationEngine, props: FrequentlyBoughtTogetherListProps) => {
    setSku(sku: string): void;
    state: {
        sku: string;
        maxNumberOfRecommendations: number;
        recommendations: import("./headless-cart-recommendations").ProductRecommendation[];
        error: import("../../api/search/search-api-error-response").SearchAPIErrorWithStatusCode | null;
        isLoading: boolean;
    };
    refresh(): void;
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
export {};
