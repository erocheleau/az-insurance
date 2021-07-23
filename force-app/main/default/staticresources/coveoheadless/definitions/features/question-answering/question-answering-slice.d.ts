import { QuestionAnswerDocumentIdentifier } from '../../api/search/search/question-answering';
import { QuestionAnsweringRelatedQuestionState } from './question-answering-state';
export declare const findRelatedQuestionIdx: (relatedQuestions: QuestionAnsweringRelatedQuestionState[], identifier: QuestionAnswerDocumentIdentifier) => number;
export declare const questionAnsweringReducer: import("redux").Reducer<import("./question-answering-state").QuestionAnsweringState, import("redux").AnyAction>;
