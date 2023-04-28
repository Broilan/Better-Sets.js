declare global {
    interface Set<T> {
        map<U>(callbackfn: (value: T, key: T, set: Set<T>) => U): Set<U>;
        filter(callbackfn: (value: T, key: T, set: Set<T>) => boolean): Set<T>;
        reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: any): U;
        intersection(set: Set<T>): Set<T>;
        concat(set: Set<T>): Set<T>;
        isSubset(set: Set<T>): boolean;

    }
}

export {};
