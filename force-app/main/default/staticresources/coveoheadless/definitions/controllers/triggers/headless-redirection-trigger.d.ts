import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
/**
 * The `RedirectionTrigger` controller handles redirection actions.
 */
export interface RedirectionTrigger extends Controller {
    /**
     * the state of the `RedirectionTrigger` controller.
     */
    state: RedirectionTriggerState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `RedirectionTrigger` controller.
 */
export interface RedirectionTriggerState {
    /**
     * The url used for the redirection.
     */
    redirectTo: string;
}
/**
 * Creates a `RedirectionTrigger` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `RedirectionTrigger` controller instance.
 * */
export declare function buildRedirectionTrigger(engine: SearchEngine): RedirectionTrigger;
