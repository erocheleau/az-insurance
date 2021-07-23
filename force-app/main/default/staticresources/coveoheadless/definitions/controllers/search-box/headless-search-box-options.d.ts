import { BooleanValue, NumberValue, Schema, StringValue, RecordValue } from '@coveo/bueno';
import { SuggestionHighlightingOptions } from '../../utils/highlight';
export interface SearchBoxOptions {
    /**
     * A unique identifier for the controller.
     * By default, a unique random identifier is generated.
     */
    id?: string;
    /**
     * Whether to interpret advanced [Coveo Cloud query syntax](https://docs.coveo.com/en/1814/searching-with-coveo/search-prefixes-and-operators) in the query.
     *
     * @defaultValue `false`
     */
    enableQuerySyntax?: boolean;
    /**
     * Specifies delimiters to highlight parts of a query suggestion that e.g match, do not match the query.
     */
    highlightOptions?: SuggestionHighlightingOptions;
    /**
     * The number of query suggestions to request from Coveo ML (e.g., `3`).
     *
     * Using the value `0` disables the query suggest feature.
     *
     * @defaultValue `5`
     */
    numberOfSuggestions?: number;
}
declare type DefaultSearchBoxOptions = Pick<SearchBoxOptions, 'enableQuerySyntax' | 'numberOfSuggestions'>;
export declare const defaultSearchBoxOptions: Required<DefaultSearchBoxOptions>;
export declare const searchBoxOptionDefinitions: {
    id: StringValue<string>;
    numberOfSuggestions: NumberValue;
    enableQuerySyntax: BooleanValue;
    highlightOptions: RecordValue;
};
export declare const searchBoxOptionsSchema: Schema<Required<SearchBoxOptions>>;
export {};
