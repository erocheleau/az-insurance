import { QuestionAnsweringDocumentIdActionCreatorPayload } from './question-answering-document-id';
/**
 * Expand a smart snippet.
 */
export declare const expandSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/expand">;
/**
 * Collapse a smart snippet.
 */
export declare const collapseSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/collapse">;
/**
 * Like, or thumbs up, a smart snippet.
 */
export declare const likeSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/like">;
/**
 * Dislike, or thumbs down, a smart snippet.
 */
export declare const dislikeSmartSnippet: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"smartSnippet/dislike">;
/**
 * Expand a related question.
 */
export declare const expandSmartSnippetRelatedQuestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: QuestionAnsweringDocumentIdActionCreatorPayload], unknown, "smartSnippet/related/expand", never, never>;
/**
 * Collapse a related question.
 */
export declare const collapseSmartSnippetRelatedQuestion: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[payload: QuestionAnsweringDocumentIdActionCreatorPayload], unknown, "smartSnippet/related/collapse", never, never>;
