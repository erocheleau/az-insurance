import { SortCriterion } from './criteria';
/**
 * Parses a criterion expression and return a list of `SortCriterion`
 * @param expression Sort criterion expression
 *
 * The available sort criteria are:
 * - `relevancy`
 * - `date ascending`/`date descending`
 * - `qre`
 * - `field ascending`/`field descending`, where you must replace `field` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).
 *
 * You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"` ).
 */
export declare function parseCriterionExpression(expression: string): SortCriterion[];
