import { RecordValue } from '@coveo/bueno';
import { QuestionAnswerDocumentIdentifier } from '../../api/search/search/question-answering';
/**
 * Identifies the document from which the answer originate.
 */
export interface QuestionAnsweringDocumentIdActionCreatorPayload extends QuestionAnswerDocumentIdentifier {
}
export declare const documentIdentifierPayloadDefinition: () => RecordValue;
