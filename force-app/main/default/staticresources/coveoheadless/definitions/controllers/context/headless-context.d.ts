import { Controller } from '../controller/headless-controller';
import { ContextPayload, ContextValue } from '../../features/context/context-state';
import { CoreEngine } from '../../app/engine';
export { ContextPayload, ContextValue };
/**
 * The `Context` controller injects [custom contextual information](https://docs.coveo.com/en/399/) into the search requests and usage analytics search events sent from a search interface.
 */
export interface Context extends Controller {
    /**
     * Sets the context for the query. This replaces any existing context with the new one.
     *
     *  @param ctx - The context to set for the query.
     */
    set(ctx: ContextPayload): void;
    /**
     * Adds (or, if one is already present, replaces) a new context key-value pair.
     *
     * @param contextKey - The context key to add.
     * @param contextValue - The context value to add.
     */
    add(contextKey: string, contextValue: ContextValue): void;
    /**
     * Removes a context key from the query.
     * @param key - The context key to remove.
     */
    remove(key: string): void;
    /**
     * The state of the `Context` controller.
     */
    state: ContextState;
}
export interface ContextState {
    /**
     * An object holding the context keys and their values.
     */
    values: Record<string, ContextValue>;
}
/**
 * Creates a `Context` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `Context` controller instance.
 */
export declare function buildContext(engine: CoreEngine): Context;
