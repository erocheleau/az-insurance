import { SchemaDefinition } from '@coveo/bueno';
import { AsyncThunkSearchOptions } from '../../api/search/search-api-client';
import { Result } from '../../api/search/search/result';
import { ConfigurationSection, FoldingSection } from '../../state/state-sections';
import { CollectionId } from './folding-state';
export interface RegisterFoldingActionCreatorPayload {
    /**
     * The name of the field on which to do the folding. The folded result list component will use the values of this field to resolve the collections of result items.
     *
     * @defaultValue `foldingcollection`
     */
    collectionField?: string;
    /**
     * The name of the field that determines whether a certain result is a top result containing other child results within a collection.
     *
     * @defaultValue `foldingparent`
     */
    parentField?: string;
    /**
     * The name of the field that uniquely identifies a result within a collection.
     *
     * @defaultValue `foldingchild`
     */
    childField?: string;
    /**
     * The number of child results to fold under the root collection element, before expansion.
     *
     * @defaultValue `2`
     */
    numberOfFoldedResults?: number;
}
export interface LoadCollectionFulfilledReturn {
    results: Result[];
    collectionId: CollectionId;
}
export declare const foldingOptionsSchemaDefinition: SchemaDefinition<Required<RegisterFoldingActionCreatorPayload>>;
export declare const registerFolding: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: RegisterFoldingActionCreatorPayload], RegisterFoldingActionCreatorPayload, "folding/register", never, never>;
export declare const loadCollection: import("@reduxjs/toolkit").AsyncThunk<LoadCollectionFulfilledReturn, string, AsyncThunkSearchOptions<ConfigurationSection & FoldingSection>>;
