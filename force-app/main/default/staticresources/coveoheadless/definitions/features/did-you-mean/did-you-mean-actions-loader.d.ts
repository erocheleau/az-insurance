import { PayloadAction } from '@reduxjs/toolkit';
import { SearchEngine } from '../../app/search-engine/search-engine';
/**
 * The DidYouMean action creators.
 */
export interface DidYouMeanActionCreators {
    /**
     * Applies a did-you-mean correction.
     *
     * @param correction - The target correction (e.g., "corrected string").
     * @returns A dispatchable action.
     */
    applyDidYouMeanCorrection(correction: string): PayloadAction<string>;
    /**
     * Disables did-you-mean.
     *
     * @returns A dispatchable action.
     */
    disableDidYouMean(): PayloadAction;
    /**
     * Enables did-you-mean.
     *
     * @returns A dispatchable action.
     */
    enableDidYouMean(): PayloadAction;
}
/**
 * Loads the `debug` reducer and returns possible action creators.
 *
 * @param engine - The headless engine.
 * @returns An object holding the action creators.
 */
export declare function loadDidYouMeanActions(engine: SearchEngine): DidYouMeanActionCreators;
