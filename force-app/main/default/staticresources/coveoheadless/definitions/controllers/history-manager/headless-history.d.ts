import { Engine } from '../../app/headless-engine';
/**
 * The `History` controller is in charge of allowing navigating back and forward in the search interface history.
 *
 * @deprecated The `History` type alias will be removed in a future release. Please use `HistoryManager` instead.
 */
export declare type History = ReturnType<typeof buildHistory>;
/**
 * The state relevant to the `History` controller.
 *
 * @deprecated The `HistoryState` type alias will be removed in a future release. Please use `HistoryManagerState` instead.
 * */
export declare type HistoryState = History['state'];
/**
 * Creates a `History` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `History` controller instance.
 *
 * @deprecated The `buildHistory` controller will be removed in a future release. Please use `buildHistoryManager` instead.
 */
export declare const buildHistory: (engine: Engine) => import("./headless-history-manager").HistoryManager;
