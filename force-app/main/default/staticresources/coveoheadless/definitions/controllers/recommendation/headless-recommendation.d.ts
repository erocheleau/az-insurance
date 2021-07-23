import { Controller } from '../controller/headless-controller';
import { Result } from '../../api/search/search/result';
import { ErrorPayload } from '../controller/error-payload';
import { RecommendationEngine } from '../../app/recommendation-engine/recommendation-engine';
export interface RecommendationListOptions {
    /**
     * The Recommendation identifier used by the Coveo platform to retrieve recommended documents.
     *
     * @defaultValue `Recommendation`
     */
    id?: string;
}
export interface RecommendationListProps {
    options?: RecommendationListOptions;
}
/**
 * The `RecommendationList` controller retrieves information about the current recommendations by the search API, if there are any.
 */
export interface RecommendationList extends Controller {
    /**
     * Gets new recommendations.
     */
    refresh(): void;
    /**
     * The state relevant to the `RecommendationList` controller.
     * */
    state: RecommendationListState;
}
export interface RecommendationListState {
    /**
     * The current error for the last executed query, or `null` if none is present.
     * */
    error: ErrorPayload | null;
    /**
     * `true` if a search is in progress and `false` otherwise.
     * */
    isLoading: boolean;
    /**
     * The recommendations based on the last executed query.
     * */
    recommendations: Result[];
}
/**
 * Creates a `RecommendationList` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `RecommendationList` properties.
 * @returns A `RecommendationList` controller instance.
 */
export declare function buildRecommendationList(engine: RecommendationEngine, props?: RecommendationListProps): RecommendationList;
