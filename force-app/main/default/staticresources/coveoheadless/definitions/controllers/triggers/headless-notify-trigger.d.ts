import { SearchEngine } from '../../app/search-engine/search-engine';
import { Controller } from '../controller/headless-controller';
/**
 * The `NotifyTrigger` controller handles Notify triggers.
 */
export interface NotifyTrigger extends Controller {
    /**
     * the state of the `NotifyTrigger` controller.
     */
    state: NotifyTriggerState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `NotifyTrigger` controller.
 */
export interface NotifyTriggerState {
    /**
     * The notification to display to the user after receiving a notification trigger.
     */
    notification: string;
}
/**
 * Creates a `NotifyTrigger` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `NotifyTrigger` controller instance.
 * */
export declare function buildNotifyTrigger(engine: SearchEngine): NotifyTrigger;
