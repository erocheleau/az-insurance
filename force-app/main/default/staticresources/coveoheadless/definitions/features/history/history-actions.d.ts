import { HistoryState } from './history-state';
export declare const undo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"history/undo">;
export declare const redo: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"history/redo">;
/**
 * Creates a snapshot of the current request parameters and adds it to the interface history.
 * @param (SearchParametersState) The current state of the search parameters.
 */
export declare const snapshot: import("@reduxjs/toolkit").ActionCreatorWithPayload<HistoryState, string>;
/**
 * Moves backward in the interface history.
 */
export declare const back: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
/**
 * Moves forward in the interface history.
 */
export declare const forward: import("@reduxjs/toolkit").AsyncThunk<void, void, {}>;
/**
 * Updates the interface state as per the current step in the interface history.
 */
export declare const change: import("@reduxjs/toolkit").AsyncThunk<HistoryState | undefined, void, {}>;
