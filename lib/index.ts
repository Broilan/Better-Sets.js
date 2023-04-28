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

Set.prototype.reduce = function<T, U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: any): U {
    let result = initialValue;
    let index = 0;
    this.forEach((value, _, set) => {
        result = callbackfn(result, value, index, Array.from(set));
        index++;
    });
    return result;
};

Set.prototype.intersection = function<T>(set: Set<T>): Set<T> {
    let newSet = new Set<T>();
    this.forEach(val => set.has(val) && newSet.add(val));
    return newSet;
  }; 
        
Set.prototype.concat = function<T>(set: Set<T>): Set<T> {
    let newSet = new Set<T>();
    this.forEach(val => newSet.add(val));
    set.forEach(val => newSet.add(val));
    return newSet;
  };

Set.prototype.isSubset = function<T>(set: Set<T>): boolean {
    for(const n of this) if(!set.has(n)) return false;  
    return true;
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

let testSet2 = new Set<any>("1");
testSet2.add("2");
testSet2.add("3");
testSet2.add("4");
testSet2.add("5");


testSet;

let x = testSet.isSubset(testSet2);
    
x;