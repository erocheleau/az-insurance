import { FacetRangeMetadata } from 'coveo.analytics/src/searchPage/searchPageEvents';
import { SearchAppState } from '../../../../state/search-app-state';
import { RangeFacetSelectionPayload } from './range-facet-validate-payload';
export declare const getRangeFacetMetadata: (state: Partial<SearchAppState>, { facetId, selection }: RangeFacetSelectionPayload) => FacetRangeMetadata;
