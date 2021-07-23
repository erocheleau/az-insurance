import { FacetSearchOptions } from '../../../../features/facets/facet-search-set/facet-search-request-options';
import { CategoryFacetSearchResult } from '../../../../api/search/facet-search/category-facet-search/category-facet-search-response';
import { CategoryFacetSearchSection, ConfigurationSection } from '../../../../state/state-sections';
import { SearchEngine } from '../../../../app/search-engine/search-engine';
export interface CategoryFacetSearchProps {
    options: FacetSearchOptions;
}
export declare type CategoryFacetSearch = ReturnType<typeof buildCategoryFacetSearch>;
export declare function buildCategoryFacetSearch(engine: SearchEngine<CategoryFacetSearchSection & ConfigurationSection>, props: CategoryFacetSearchProps): {
    select(value: CategoryFacetSearchResult): void;
    state: {
        values: CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    } | {
        values: CategoryFacetSearchResult[];
        isLoading: boolean;
        query: string;
        moreValuesAvailable: boolean;
    };
    updateText(text: string): void;
    showMoreResults(): void;
    search(): void;
    clear(): void;
};
