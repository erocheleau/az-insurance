import { SearchEngine } from '../../app/search-engine/search-engine';
import { StateWithHistory } from '../../app/undoable';
import { HistoryState } from '../../features/history/history-state';
import { Controller } from '../controller/headless-controller';
/**
 * The `HistoryManager` controller is in charge of allowing navigating back and forward in the search interface history.
 */
export interface HistoryManager extends Controller {
    /**
     * Move backward in the interface history.
     *
     * @returns A promise that resolves when the previous state has been restored.
     */
    back(): Promise<void>;
    /**
     * Move forward in the interface history.
     *
     * @returns A promise that resolves when the next state has been restored.
     */
    forward(): Promise<void>;
    /**
     * The state relevant to the `HistoryManager` controller.
     * */
    state: HistoryManagerState;
}
export declare type HistoryManagerState = StateWithHistory<HistoryState>;
/**
 * Creates a `HistoryManager` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `HistoryManager` controller instance.
 */
export declare function buildHistoryManager(engine: SearchEngine): HistoryManager;
