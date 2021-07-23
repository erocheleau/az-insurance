import { ExecutionReport, ExecutionStep } from '../../api/search/search/execution-report';
import { QueryRankingExpression } from '../../api/search/search/query-ranking-expression';
import { Result } from '../../api/search/search/result';
import { SecurityIdentity } from '../../api/search/search/security-identity';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { QueryRankingExpressionWeights, DocumentWeights, RankingInformation, TermWeightReport } from '../../features/debug/ranking-info-parser';
import { Controller } from '../controller/headless-controller';
export { RankingInformation, DocumentWeights, TermWeightReport, QueryRankingExpressionWeights, ExecutionReport, ExecutionStep, SecurityIdentity, QueryRankingExpression, };
export interface RelevanceInspectorProps {
    /**
     * The initial state that should be applied to the `RelevanceInspector` controller.
     */
    initialState?: RelevanceInspectorInitialState;
}
export interface RelevanceInspectorInitialState {
    /**
     * Whether debug mode should be enabled.
     * */
    enabled?: boolean;
}
/**
 * The `RelevanceInspector` controller is in charge of allowing displaying various debug information.
 */
export interface RelevanceInspector extends Controller {
    /**
     * Enables debug mode.
     */
    enable(): void;
    /**
     * Disables debug mode.
     */
    disable(): void;
    /**
     * The state of the `RelevanceInspector` controller.
     * */
    state: RelevanceInspectorState;
}
export interface RelevanceInspectorState {
    /**
     * Whether debug mode is enabled.
     * */
    isEnabled: boolean;
    /**
     * The ranking information for every result.
     */
    rankingInformation?: ResultRankingInformation[];
    /**
     * The query execution report.
     */
    executionReport?: ExecutionReport;
    /**
     * The query expressions sent in the request.
     */
    expressions?: QueryExpressions;
    /**
     * The security identities.
     */
    userIdentities?: SecurityIdentity[];
    /**
     * The ranking expressions.
     */
    rankingExpressions?: QueryRankingExpression[];
}
export interface ResultRankingInformation {
    /**
     * The result.
     */
    result: Result;
    /**
     * The ranking information for the associated result.
     */
    ranking: RankingInformation | null;
}
export interface QueryExpressions {
    /**
     * The search query.
     */
    basicExpression: string;
    /**
     * The dynamic filter expression, sent as the `aq` parameter in the request.
     */
    advancedExpression: string;
    /**
     * The static filter expression, typically set by a `Tab`.
     */
    constantExpression: string;
}
/**
 * Creates a `RelevanceInspector` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `RelevanceInspector` properties.
 * @returns A `RelevanceInspector` controller instance.
 */
export declare function buildRelevanceInspector(engine: SearchEngine, props?: RelevanceInspectorProps): RelevanceInspector;
