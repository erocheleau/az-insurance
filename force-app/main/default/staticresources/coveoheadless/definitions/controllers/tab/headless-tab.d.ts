import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export interface TabOptions {
    /**
     * A constant query expression or filter that the Tab should add to any outgoing query.
     *
     * **Example:**
     *
     * `@objecttype==Message`
     */
    expression: string;
    /**
     * A unique identifier for the tab. The value will be used as the originLevel2 when the tab is active.
     */
    id: string;
}
export interface TabInitialState {
    /**
     * Specifies if the tab is currently selected.
     * Note that there can be only one active tab for a given headless engine.
     */
    isActive: boolean;
}
export interface TabProps {
    /**
     * The options for the `Tab` controller.
     */
    options: TabOptions;
    /**
     * The initial state that should be applied to this `Tab` controller.
     */
    initialState?: TabInitialState;
}
/**
 * The `Tab` headless controller allows the end user to view a subset of results.
 * It is in charge of adding a constant expression to the outgoing query in order to refine the results.
 */
export interface Tab extends Controller {
    /**
     * Activates the tab.
     */
    select(): void;
    /**
     * The state of the `Tab` controller.
     */
    state: TabState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `Tab` controller.
 */
export interface TabState {
    /**
     * `true` if the current tab is selected and `false` otherwise.
     * */
    isActive: boolean;
}
/**
 * Creates a `Tab` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Tab` properties.
 * @returns A `Tab` controller instance.
 */
export declare function buildTab(engine: SearchEngine, props: TabProps): Tab;
