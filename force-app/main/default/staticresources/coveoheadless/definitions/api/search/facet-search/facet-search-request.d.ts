import { SpecificFacetSearchRequest } from './specific-facet-search/specific-facet-search-request';
import { CategoryFacetSearchRequest } from './category-facet-search/category-facet-search-request';
import { BaseParam } from '../../platform-service-params';
export declare type FacetSearchRequest = BaseParam & (SpecificFacetSearchRequest | CategoryFacetSearchRequest);
