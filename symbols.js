
/**
 * Tablice, Map i Set umożliwiają zaimplementowanie iteratora
 */
const sampleArray = ['lorem', 'ipsum', 'dolor'];

console.log(typeof sampleArray[Symbol.iterator]); // function

const iterator = sampleArray[Symbol.iterator]();

console.log(iterator.next()); //{value: 'lorem', done: false}
console.log(iterator.next()); //{value: 'ipsum', done: false}
console.log(iterator.next()); //{value: 'dolor', done: false}

console.log(iterator.next()); //{value: undefined, done: true}



/**
 * Symbol.iterator w pętli
 */
var myArray = [1, 2, 3];
var _myArray = myArray[Symbol.iterator]();
while(var _iteration = _myArray.next()) {
    if (_iteration.done) { 
        break;
    }
    var value = _iteration.value;
    console.log(value);
}


/**
 * `for of` - jest wrapperem dla Symbol.iterator(a)
 */
var myArray = [1, 2, 3];
for(var value of myArray) {
    console.log(value);
}


/**
 * Symbol.asyncIterator
 * Metoda zwracająca domyślny asynchroniczny iterator dla obiektu (zwracający Promise). 
 */
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next()
.then(iterResult1 => {
    console.log(iterResult1); //{value: 'a', done: false}
    return asyncIterator.next();
})
.then(iterResult2 => {
    console.log(iterResult2); //{value: 'b', done: false}
    return asyncIterator.next();
})
.then(iterResult3 => {
    console.log(iterResult3); //{value: undefined, done: true}
});
