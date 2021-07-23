import { CategoryFacetValueRequest } from './interfaces/request';
import { CategoryFacetValue } from './interfaces/response';
declare type GenericCategoryFacetValue = CategoryFacetValueRequest | CategoryFacetValue;
declare type CategoryFacetValuePartition<T extends GenericCategoryFacetValue> = {
    parents: T[];
    values: T[];
};
export declare function partitionIntoParentsAndValues<T extends GenericCategoryFacetValue>(nestedValues: T[] | undefined): CategoryFacetValuePartition<T>;
export {};
