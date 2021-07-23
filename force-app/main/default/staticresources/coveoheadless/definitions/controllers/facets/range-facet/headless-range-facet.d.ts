import { RangeFacetResponse, RangeFacetRequest } from '../../../features/facets/range-facets/generic/interfaces/range-facet';
import { RangeFacetSortCriterion } from '../../../features/facets/range-facets/generic/interfaces/request';
import { ConfigurationSection, SearchSection } from '../../../state/state-sections';
import { SearchEngine } from '../../../app/search-engine/search-engine';
export declare type RangeFacet = ReturnType<typeof buildRangeFacet>;
export declare type RangeFacetProps<T extends RangeFacetRequest> = {
    facetId: string;
    getRequest: () => T;
};
export declare function buildRangeFacet<T extends RangeFacetRequest, R extends RangeFacetResponse>(engine: SearchEngine<ConfigurationSection & SearchSection>, props: RangeFacetProps<T>): {
    isValueSelected: (selection: import("../../..").DateFacetValue | import("./numeric-facet/headless-numeric-facet").NumericFacetValue) => boolean;
    deselectAll(): void;
    sortBy(criterion: RangeFacetSortCriterion): void;
    isSortedBy(criterion: RangeFacetSortCriterion): boolean;
    state: {
        facetId: string;
        values: R["values"];
        sortCriterion: RangeFacetSortCriterion;
        hasActiveValues: boolean;
        isLoading: boolean;
    };
    subscribe(listener: () => void): import("redux").Unsubscribe;
};
interface AssertRangeFacetOptions {
    generateAutomaticRanges: boolean;
    currentValues?: unknown[];
}
export declare function assertRangeFacetOptions(options: AssertRangeFacetOptions, controllerName: 'buildNumericFacet' | 'buildDateFacet'): void;
export {};
