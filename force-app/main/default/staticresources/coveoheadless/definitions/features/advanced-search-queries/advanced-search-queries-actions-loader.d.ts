import { PayloadAction } from '@reduxjs/toolkit';
import { CoreEngine } from '../../app/engine';
import { AdvancedSearchQueryActionCreatorPayload } from './advanced-search-queries-actions';
export { AdvancedSearchQueryActionCreatorPayload };
/**
 * The advanced search query action creators.
 */
export interface AdvancedSearchQueryActionCreators {
    /**
     * Update the values of the advanced search queries.
     *
     * @param payload - The current state of the advanced search queries.
     * @returns A dispatchable action.
     */
    updateAdvancedSearchQueries(payload: AdvancedSearchQueryActionCreatorPayload): PayloadAction<AdvancedSearchQueryActionCreatorPayload>;
    /**
     * Registers the initial state of the advanced search queries.
     *
     * @param payload - The initial state of the advanced search queries.
     * @returns A dispatchable action.
     */
    registerAdvancedSearchQueries(payload: AdvancedSearchQueryActionCreatorPayload): PayloadAction<AdvancedSearchQueryActionCreatorPayload>;
}
/**
 * Loads the `advancedSearchQueries` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadAdvancedSearchQueryActions(engine: CoreEngine): AdvancedSearchQueryActionCreators;
