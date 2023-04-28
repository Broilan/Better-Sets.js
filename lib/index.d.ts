declare global {
    interface Set<T> {
        map<U>(callbackfn: (value: T, key: T, set: Set<T>) => U): Set<U>;
        filter(callbackfn: (value: T, key: T, set: Set<T>) => boolean): Set<T>;

    }
}

export {};
