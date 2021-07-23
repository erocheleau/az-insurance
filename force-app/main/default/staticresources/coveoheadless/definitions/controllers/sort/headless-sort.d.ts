import { SortCriterion } from '../../features/sort-criteria/criteria';
import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
export interface SortProps {
    /**
     * The initial state that should be applied to this `Sort` controller.
     */
    initialState?: SortInitialState;
}
export interface SortInitialState {
    /**
     * The initial sort criterion to register in state.
     * */
    criterion?: SortCriterion | SortCriterion[];
}
/**
 * The `Sort` controller manages how the results are sorted.
 * */
export interface Sort extends Controller {
    /**
     * Updates the sort criterion and executes a new search.
     *
     * @param criterion - The new sort criterion.
     */
    sortBy(criterion: SortCriterion | SortCriterion[]): void;
    /**
     * Checks whether the specified sort criterion matches the value in state.
     *
     * @param criterion - The criterion to compare.
     * @returns `true` if the passed sort criterion matches the value in state, and `false` otherwise.
     */
    isSortedBy(criterion: SortCriterion | SortCriterion[]): boolean;
    /**
     * A scoped and simplified part of the headless state that is relevant to the `Sort` controller.
     * */
    state: SortState;
}
export interface SortState {
    /**
     * The current sort criteria.
     */
    sortCriteria: string;
}
/**
 * Creates a `Sort` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Sort` controller properties.
 * @returns A `Sort` controller instance.
 */
export declare function buildSort(engine: SearchEngine, props?: SortProps): Sort;
