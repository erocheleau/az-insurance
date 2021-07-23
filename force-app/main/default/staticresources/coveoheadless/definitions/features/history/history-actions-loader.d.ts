import { AsyncThunkAction } from '@reduxjs/toolkit';
import { SearchEngine } from '../../app/search-engine/search-engine';
/**
 * The history action creators.
 */
export interface HistoryActionCreators {
    /**
     * Moves backward in the interface history.
     *
     * @returns A dispatchable action.
     */
    back(): AsyncThunkAction<void, void, {}>;
    /**
     * Moves forward in the interface history.
     *
     * @returns A dispatchable action.
     */
    forward(): AsyncThunkAction<void, void, {}>;
}
/**
 * Loads the `history` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadHistoryActions(engine: SearchEngine): HistoryActionCreators;
