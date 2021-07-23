import { Controller } from '../controller/headless-controller';
import { SearchEngine } from '../../app/search-engine/search-engine';
import { QuestionAnswerDocumentIdentifier } from '../../api/search/search/question-answering';
export { QuestionAnswerDocumentIdentifier } from '../../api/search/search/question-answering';
/**
 * The `SmartSnippetQuestionsList` controller allows to manage additional queries for which a SmartSnippet model can provide relevant excerpts.
 */
export interface SmartSnippetQuestionsList extends Controller {
    /**
     * The state of the SmartSnippetQuestionsList controller.
     * */
    state: SmartSnippetQuestionsListState;
    /**
     * Expand the specified snippet suggestion.
     *
     * @param identifier - The identifier of a document used to create the smart snippet.
     */
    expand(identifier: QuestionAnswerDocumentIdentifier): void;
    /**
     * Collapse the specified snippet suggestion.
     *
     * @param identifier - The identifier of a document used to create the smart snippet.
     */
    collapse(identifier: QuestionAnswerDocumentIdentifier): void;
}
/**
 * A scoped and simplified part of the headless state that is relevant to the `SmartSnippetQuestionsList` controller.
 */
export interface SmartSnippetQuestionsListState {
    /**
     * The related questions for the current query
     */
    questions: SmartSnippetRelatedQuestion[];
}
/**
 * The related questions for a given smart snippet.
 */
export interface SmartSnippetRelatedQuestion {
    /**
     * The question related to the smart snippet.
     */
    question: string;
    /**
     * The answer, or snippet, related to the question.
     *
     * This can contain HTML markup, depending on the source of the answer.
     */
    answer: string;
    /**
     * The index identifier for the document that provided the answer.
     */
    documentId: QuestionAnswerDocumentIdentifier;
    /**
     * Determines if the snippet is currently expanded.
     */
    expanded: boolean;
}
/**
 * Creates a `SmartSnippetQuestionsList` controller instance.
 *
 * @param engine - The headless engine.
 * @returns A `SmartSnippetQuestionsList` controller instance.
 * */
export declare function buildSmartSnippetQuestionsList(engine: SearchEngine): SmartSnippetQuestionsList;
