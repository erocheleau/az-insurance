import { Reducer, AnyAction } from 'redux';
export declare const makeHistory: <State>(state?: State | undefined) => StateWithHistory<State>;
export interface StateWithHistory<State> {
    past: State[];
    present?: State;
    future: State[];
}
declare const undo: <State>(state: StateWithHistory<State>) => StateWithHistory<State>;
declare const redo: <State>(state: StateWithHistory<State>) => StateWithHistory<State>;
export declare const undoable: <State>(options: {
    reducer: Reducer<State, AnyAction>;
    actionTypes: {
        undo: string;
        redo: string;
        snapshot: string;
    };
}) => (state: StateWithHistory<State> | undefined, action: AnyAction) => StateWithHistory<State>;
export {};
