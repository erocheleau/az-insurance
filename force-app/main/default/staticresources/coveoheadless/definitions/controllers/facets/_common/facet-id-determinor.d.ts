import { SearchEngine } from '../../../app/search-engine/search-engine';
import { AllFacetSections } from '../../../features/facets/generic/interfaces/generic-facet-section';
interface FacetIdConfig {
    facetId?: string;
    field: string;
}
export declare function determineFacetId(engine: SearchEngine<Partial<AllFacetSections>>, config: FacetIdConfig): string;
export {};
