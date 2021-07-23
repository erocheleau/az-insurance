import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { ConfigurationSection, SearchHubSection, ProductRecommendationsSection, ContextSection } from '../../state/state-sections';
import { ProductRecommendationsRequest } from '../../api/search/product-recommendations/product-recommendations-request';
import { ProductRecommendation } from '../../api/search/search/product-recommendation';
import { SearchAction } from '../analytics/analytics-utils';
export declare type StateNeededByGetProductRecommendations = ConfigurationSection & ProductRecommendationsSection & Partial<ContextSection & SearchHubSection>;
export interface GetProductRecommendationsThunkReturn {
    recommendations: ProductRecommendation[];
    analyticsAction: SearchAction;
    searchUid: string;
    duration: number;
}
export interface SetProductRecommendationsRecommenderIdActionCreatorPayload {
    /**
     * The recommender id, used to determine the machine-learning model that should fulfill the request.
     */
    id: string;
}
export declare const setProductRecommendationsRecommenderId: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsRecommenderIdActionCreatorPayload], SetProductRecommendationsRecommenderIdActionCreatorPayload, "productrecommendations/setId", never, never>;
export interface SetProductRecommendationsSkusActionCreatorPayload {
    /**
     * The skus to retrieve recommendations for.
     */
    skus: string[];
}
export declare const setProductRecommendationsSkus: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsSkusActionCreatorPayload], SetProductRecommendationsSkusActionCreatorPayload, "productrecommendations/setSku", never, never>;
export interface SetProductRecommendationsBrandFilterActionCreatorPayload {
    /**
     * The brand to filter recommendations by.
     */
    brand: string;
}
export declare const setProductRecommendationsBrandFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsBrandFilterActionCreatorPayload], SetProductRecommendationsBrandFilterActionCreatorPayload, "productrecommendations/setBrand", never, never>;
export interface SetProductRecommendationsCategoryFilterActionCreatorPayload {
    /**
     * The category to filter recommendations by.
     */
    category: string;
}
export declare const setProductRecommendationsCategoryFilter: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsCategoryFilterActionCreatorPayload], SetProductRecommendationsCategoryFilterActionCreatorPayload, "productrecommendations/setCategory", never, never>;
export interface SetProductRecommendationsAdditionalFieldsActionCreatorPayload {
    /**
     * The additional result fields to request.
     */
    additionalFields: string[];
}
export declare const setProductRecommendationsAdditionalFields: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsAdditionalFieldsActionCreatorPayload], SetProductRecommendationsAdditionalFieldsActionCreatorPayload, "productrecommendations/setAdditionalFields", never, never>;
export interface SetProductRecommendationsMaxNumberOfRecommendationsActionCreatorPayload {
    /**
     * The maximum number of recommendations to return.
     */
    number: number;
}
export declare const setProductRecommendationsMaxNumberOfRecommendations: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: SetProductRecommendationsMaxNumberOfRecommendationsActionCreatorPayload], SetProductRecommendationsMaxNumberOfRecommendationsActionCreatorPayload, "productrecommendations/setMaxNumberOfRecommendations", never, never>;
export declare const getProductRecommendations: import("@reduxjs/toolkit").AsyncThunk<GetProductRecommendationsThunkReturn, void, AsyncThunkSearchOptions<StateNeededByGetProductRecommendations>>;
export declare const buildProductRecommendationsRequest: (s: StateNeededByGetProductRecommendations) => ProductRecommendationsRequest;
