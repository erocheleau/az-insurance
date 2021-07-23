import { Controller } from '../controller/headless-controller';
import { SearchBoxOptions } from './headless-search-box-options';
import { SuggestionHighlightingOptions, Delimiters } from '../../utils/highlight';
import { SearchEngine } from '../../app/search-engine/search-engine';
export { SearchBoxOptions, SuggestionHighlightingOptions, Delimiters };
export interface SearchBoxProps {
    options?: SearchBoxOptions;
}
/**
 * The `SearchBox` headless controller offers a high-level interface for designing a common search box UI controller.
 */
export interface SearchBox extends Controller {
    /**
     * Updates the search box text value and shows the suggestions for that value.
     *
     * @param value - The string value to update the search box with.
     */
    updateText(value: string): void;
    /**
     * Clears the search box text and the suggestions.
     */
    clear(): void;
    /**
     * Shows the suggestions for the current search box value.
     */
    showSuggestions(): void;
    /**
     * Selects a suggestion and calls `submit`.
     *
     * @param value - The string value of the suggestion to select
     */
    selectSuggestion(value: string): void;
    /**
     * Deselects all facets and triggers a search query.
     */
    submit(): void;
    /**
     * The state of the `SearchBox` controller.
     */
    state: SearchBoxState;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `SearchBox` controller.
 */
export interface SearchBoxState {
    /**
     * The current query in the search box.
     */
    value: string;
    /**
     * The query suggestions for the search box query.
     */
    suggestions: Suggestion[];
    /**
     * Determines if a search is in progress.
     */
    isLoading: boolean;
}
export interface Suggestion {
    /**
     * The suggestion after applying any `highlightOptions`.
     */
    highlightedValue: string;
    /**
     * The suggestion text.
     */
    rawValue: string;
}
/**
 * Creates a `SearchBox` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `SearchBox` properties.
 * @returns A `SearchBox` controller instance.
 */
export declare function buildSearchBox(engine: SearchEngine, props?: SearchBoxProps): SearchBox;
