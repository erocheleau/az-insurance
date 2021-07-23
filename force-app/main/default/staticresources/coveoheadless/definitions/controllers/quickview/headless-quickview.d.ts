import { Result } from '../../api/search/search/result';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { Controller } from '../controller/headless-controller';
export interface QuickviewProps {
    /**
     * The options for the `Quickview` controller.
     */
    options: QuickviewOptions;
}
export interface QuickviewOptions {
    /**
     * The result to retrieve a quickview for.
     */
    result: Result;
    /**
     * The maximum preview size to retrieve, in bytes. By default, the full preview is retrieved.
     */
    maximumPreviewSize?: number;
}
export interface Quickview extends Controller {
    /**
     * Retrieves the preview content for the configured result.
     */
    fetchResultContent(): void;
    /**
     * The state for the `Quickview` controller.
     */
    state: QuickviewState;
}
export interface QuickviewState {
    /**
     * The result preview HTML content.
     *
     * @default ""
     */
    content: string;
    /**
     * `true` if the configured result has a preview, and `false` otherwise.
     */
    resultHasPreview: boolean;
    /**
     * `true` if content is being fetched, and `false` otherwise.
     */
    isLoading: boolean;
}
/**
 * Creates a `Quickview` controller instance.
 *
 * @param engine - The headless engine.
 * @param props - The configurable `Quickview` properties.
 * @returns A `Quickview` controller instance.
 */
export declare function buildQuickview(engine: SearchEngine, props: QuickviewProps): Quickview;
