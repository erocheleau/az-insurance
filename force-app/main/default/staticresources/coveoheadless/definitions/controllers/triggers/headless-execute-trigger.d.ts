import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { ExecuteTriggerParams } from '../../api/search/trigger';
/**
 * The `ExecuteTrigger` controller handles execute trigger actions.
 */
export interface ExecuteTrigger extends Controller {
    /**
     * The state of the `ExecuteTrigger` controller.
     */
    state: ExecuteTriggerState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `ExecuteTrigger` controller.
 */
export interface ExecuteTriggerState {
    /**
     * The name of the function to be executed.
     */
    functionName: string;
    /**
     * The parameters of the function to be executed.
     */
    params: ExecuteTriggerParams;
}
/**
 * Creates a `ExecuteTrigger` controller instance. An execute trigger is configured in the Administration console,
 * and used to execute a function in the browser when a certain condition is met.
 *
 *
 * @param engine - The headless engine.
 * @returns A `RedirectionTrigger` controller instance.
 * */
export declare function buildExecuteTrigger(engine: SearchEngine): ExecuteTrigger;
