import { ReducersMapObject, Reducer } from '@reduxjs/toolkit';
export interface ReducerManager {
    combinedReducer: Reducer;
    add: (newReducers: ReducersMapObject) => void;
}
export declare function createReducerManager(initialReducers: ReducersMapObject): ReducerManager;
