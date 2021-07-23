import { Schema } from '@coveo/bueno';
import { EngineConfiguration } from '../engine-configuration';
/**
 * The product recommendation engine configuration.
 */
export interface ProductRecommendationEngineConfiguration extends EngineConfiguration {
    /**
     * The first level of origin of the request, typically the identifier of the graphical search interface from which the request originates.
     * Coveo Machine Learning models use this information to provide contextually relevant output.
     * Notes:
     *    This parameter will be overridden if the search request is authenticated by a search token that enforces a specific searchHub.
     *    When logging a Search usage analytics event for a query, the originLevel1 field of that event should be set to the value of the searchHub search request parameter.
     */
    searchHub?: string;
}
export declare const productRecommendationEngineConfigurationSchema: Schema<ProductRecommendationEngineConfiguration>;
/**
 * Creates a sample product recommendation engine configuration.
 *
 * @returns The sample product recommendation engine configuration.
 */
export declare function getSampleProductRecommendationEngineConfiguration(): ProductRecommendationEngineConfiguration;