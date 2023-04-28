/// <reference path="./index.d.ts" />


Set.prototype.map = function<T, U>(callbackfn: (value: T, key: T, set: Set<T>) => U): Set<U> {
    let newSet = new Set<U>();
    this.forEach((value, key, set) => {
        newSet.add(callbackfn(value, key, set));
    });
    return newSet;
};

Set.prototype.filter = function<T>(callbackfn: (value: T, key: T, set: Set<T>) => boolean): Set<T> {
    let newSet = new Set<T>();
    this.forEach((value, key, set) => {
        if (callbackfn(value, key, set)) {
            newSet.add(value);
        }
    });
    return newSet;
};



 


let testSet = new Set<any>("1");
testSet.add("2");
testSet.add("3");
testSet.add("4");
testSet.add("5");
testSet.add("6");
testSet.add("7");
testSet.add("8");
testSet.add("9");
testSet.add("10");

testSet;

let x = testSet.filter(value => value !== "1");
//output ---> Set(10) {"one", "2", "3", "4", "5", "6", "7", "8", "9", "10"}
x;