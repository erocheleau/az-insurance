import { Schema, SchemaValues } from '@coveo/bueno';
import { ProductRecommendationEngine } from '../../app/product-recommendation-engine/product-recommendation-engine';
declare const optionsSchema: Schema<{
    maxNumberOfRecommendations: number;
    additionalFields: string[] | null | undefined;
}>;
export declare type UserInterestRecommendationsListOptions = SchemaValues<typeof optionsSchema>;
export interface UserInterestRecommendationsListProps {
    options?: UserInterestRecommendationsListOptions;
}
export declare type UserInterestRecommendationsList = ReturnType<typeof buildUserInterestRecommendationsList>;
export declare type UserInterestRecommendationsListState = UserInterestRecommendationsList['state'];
export declare function buildUserInterestRecommendationsList(engine: ProductRecommendationEngine, props: UserInterestRecommendationsListProps): {
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
