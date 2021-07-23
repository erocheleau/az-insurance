import { ReducersMapObject, StateFromReducersMapObject, Middleware, Reducer } from '@reduxjs/toolkit';
import { ThunkExtraArguments } from './thunk-extra-arguments';
interface ConfigureStoreOptions<Reducers extends ReducersMapObject> {
    reducer: Reducer;
    preloadedState?: StateFromReducersMapObject<Reducers>;
    middlewares?: Middleware[];
    thunkExtraArguments: ThunkExtraArguments;
    name: string;
}
export declare function configureStore<Reducers extends ReducersMapObject>({ reducer, preloadedState, middlewares, thunkExtraArguments, name, }: ConfigureStoreOptions<Reducers>): import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
export declare type Store = ReturnType<typeof configureStore>;
export {};
