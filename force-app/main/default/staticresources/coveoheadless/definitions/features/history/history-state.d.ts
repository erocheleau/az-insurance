import { SearchParametersState } from '../../state/search-app-state';
export interface HistoryState extends SearchParametersState {
    facetOrder: string[];
}
export declare function getHistoryInitialState(): HistoryState;
export declare function extractHistory(state: Partial<HistoryState>): HistoryState;
