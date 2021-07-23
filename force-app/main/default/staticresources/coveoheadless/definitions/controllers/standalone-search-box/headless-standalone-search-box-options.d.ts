import { Schema } from '@coveo/bueno';
import { SearchBoxOptions } from '../search-box/headless-search-box-options';
export interface StandaloneSearchBoxOptions extends SearchBoxOptions {
    /**
     * The default Url the user should be redirected to, when a query is submitted.
     * If a query pipeline redirect is triggered, it will redirect to that Url instead.
     */
    redirectionUrl: string;
}
export declare const standaloneSearchBoxSchema: Schema<Required<StandaloneSearchBoxOptions>>;
