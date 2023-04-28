```Javascript
Set.prototype.map();
--------------------------

#Type: map<U>(callbackfn: (value: T, key: T, set: Set<T>) => U): Set<U>;
#Notes: returns a new set with values based on the callback function;
#Mutates: false;

    ----------------------- demo -----------------------

       testSet === Set(10) {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"}

        testSet.map(value => value == "1" ? "one" : value)
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

        testSet.filter(value => value !== "1")
        output ---> Set(9) {"2", "3", "4", "5", "6", "7", "8", "9", "10"}

    ----------------------- demo -----------------------
```      
