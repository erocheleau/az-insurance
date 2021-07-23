import { Result } from '../../api/search/search/result';
export interface ResultWithFolding extends Result {
    parentResult: ResultWithFolding | null;
    childResults: ResultWithFolding[];
}
export declare const foldingReducer: import("redux").Reducer<import("./folding-state").FoldingState, import("redux").AnyAction>;
