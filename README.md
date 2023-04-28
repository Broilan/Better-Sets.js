```Javascript
Set.prototype.map();
--------------------------

#Type: map<U>(callbackfn: (value: T, key: T, set: Set<T>) => U): Set<U>;
#Notes: returns a new set with values based on the callback function;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

        testSet.map(value => value == "1" ? "one" : value);
        output ---> Set(10) {"one", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

    ----------------------- demo -----------------------
```       

```Javascript
Set.prototype.filter();
--------------------------

#Type: filter(callbackfn: (value: T, key: T, set: Set<T>) => boolean): Set<T>;
#Notes: returns a new set with values based on the callback function;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

        testSet.filter(value => value !== "1");
        output ---> Set(9) {"2", "3", "4", "5", "6", "7", "8", "9", "10"}

    ----------------------- demo -----------------------
```      

```Javascript
Set.prototype.reduce();
--------------------------

#Type: reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: any): U;
#Notes: returns an integer, object, array, or some other specified data with value(s) based on the callback function;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

        testSet.reduce((acc, val) => acc += parseInt(val), 0);
        output ---> 55

    ----------------------- demo -----------------------
```     

```Javascript
Set.prototype.intersection();
--------------------------

#Type: intersection(set: Set<T>): Set<T>;
#Notes: returns a set with only values held by both sets;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}
       testSet2 === set(5) {"1", "2", "3", "4", "5"} 

        testSet.intersection(testSet2);
        output ---> set(5) {"1", "2", "3", "4", "5"}

    ----------------------- demo -----------------------
```  

```Javascript
Set.prototype.concat();
--------------------------

#Type: concat(set: Set<T>): Set<T>;
#Notes: concatenates two sets into one;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}
       testSet2 === set(5) {"1", "2", "3", "4", "5"} 

        testSet.concat(testSet2);
        output ---> Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

    ----------------------- demo -----------------------
```  

```Javascript
Set.prototype.isSubset();
--------------------------

#Type: isSubset(set: Set<T>): boolean;
#Notes: returns a boolean based on whether or not the set the method is chained onto is a subset of the argument set;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}
       testSet2 === set(5) {"1", "2", "3", "4", "5"} 

        testSet.isSubset(testSet2);
        output ---> false

        testSet2.isSubset(testSet);
        output ---> true

    ----------------------- demo -----------------------
```  
