export declare const randomID: (prepend?: string | undefined, length?: number) => string;
export declare function isArray<T>(value: T | T[]): value is T[];
export declare function isEmptyString(str: string): boolean;
export declare function removeDuplicates<T>(arr: T[], getIdentifier: (value: T, index: number) => string): T[];
