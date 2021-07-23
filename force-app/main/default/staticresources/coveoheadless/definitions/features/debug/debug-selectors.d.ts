import { SearchSection } from '../../state/state-sections';
export declare function rankingInformationSelector(state: SearchSection): {
    result: import("../..").Result;
    ranking: {
        documentWeights: import("./ranking-info-parser").DocumentWeights | null;
        termsWeight: Record<string, import("./ranking-info-parser").StemmedTermInformation> | null;
        totalWeight: number | null;
        qreWeights: import("./ranking-info-parser").QueryRankingExpressionWeights[];
    } | null;
}[];
