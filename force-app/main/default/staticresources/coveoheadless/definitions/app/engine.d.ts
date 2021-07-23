import { AnyAction, Dispatch, ThunkDispatch, Unsubscribe, ReducersMapObject, StateFromReducersMapObject, Middleware } from '@reduxjs/toolkit';
import { EngineConfiguration } from './engine-configuration';
import { Store } from './store';
import { LoggerOptions } from './logger';
import { Logger } from 'pino';
import { ThunkExtraArguments } from './thunk-extra-arguments';
declare const coreReducers: {
    configuration: import("redux").Reducer<import("../features/configuration/configuration-state").ConfigurationState, AnyAction>;
    version: import("redux").Reducer<string, AnyAction>;
};
declare type CoreState = StateFromReducersMapObject<typeof coreReducers>;
declare type EngineDispatch<State, ExtraArguments extends ThunkExtraArguments> = ThunkDispatch<State, ExtraArguments, AnyAction> & Dispatch<AnyAction>;
export interface CoreEngine<State extends object = {}, ExtraArguments extends ThunkExtraArguments = ThunkExtraArguments> {
    /**
     * Dispatches an action directly. This is the only way to trigger a state change.
     * Each headless controller dispatches its own actions.
     *
     * @param action An action supported by the headless engine.
     *
     * @returns For convenience, the action object that was just dispatched.
     */
    dispatch: EngineDispatch<State & CoreState, ExtraArguments>;
    /**
     * Adds a change listener. It will be called any time an action is
     * dispatched, and some part of the state tree may potentially have changed.
     * You may then access the new `state`.
     *
     * @param listener A callback to be invoked on every dispatch.
     * @returns A function to remove this change listener.
     */
    subscribe(listener: () => void): Unsubscribe;
    /**
     * The complete headless state tree.
     */
    state: State & CoreState;
    /**
     * The redux store.
     */
    store: Store;
    /**
     * The logger instance used by headless.
     * */
    logger: Logger;
    /**
     * Adds the specified reducers to the store.
     *
     * @param reducers - An object containing the reducers to attach to the engine.
     */
    addReducers(reducers: ReducersMapObject): void;
    /**
     * Enable analytics tracking
     */
    enableAnalytics(): void;
    /**
     * Disable analytics tracking
     */
    disableAnalytics(): void;
}
export interface EngineOptions<Reducers extends ReducersMapObject> extends ExternalEngineOptions<StateFromReducersMapObject<Reducers>> {
    /**
     * Map object of reducers.
     * A reducer is a pure function that takes the previous state and an action, and returns the next state.
     * ```
     * (previousState, action) => nextState
     * ```
     * [Redux documentation on reducers.](https://redux.js.org/glossary#reducer)
     */
    reducers: Reducers;
}
export interface ExternalEngineOptions<State extends object> {
    /**
     * The global headless engine configuration options.
     */
    configuration: EngineConfiguration;
    /**
     * The initial headless state.
     * You may optionally specify it to hydrate the state
     * from the server in universal apps, or to restore a previously serialized
     * user session.
     */
    preloadedState?: State;
    /**
     * List of additional middlewares.
     * A middleware is a higher-order function that composes a dispatch function to return a new dispatch function.
     * It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions.
     *
     * @example
     * ```
     * type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }
     * type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch
     * ```
     * [Redux documentation on middlewares.](https://redux.js.org/glossary#middleware)
     */
    middlewares?: Middleware<{}, State>[];
    /**
     * The logger options.
     */
    loggerOptions?: LoggerOptions;
}
export declare function buildEngine<Reducers extends ReducersMapObject, ExtraArguments extends ThunkExtraArguments>(options: EngineOptions<Reducers>, thunkExtraArguments: ExtraArguments): CoreEngine<StateFromReducersMapObject<Reducers>, ExtraArguments>;
export {};
