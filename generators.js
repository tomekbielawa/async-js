/**
 * Przykład 1
 */
function* gen() {
  yield 1;
  yield 3;
  yield 5;
}

let sampleGen = gen();

sampleGen.next(); // <- { value: 1, done: false }
sampleGen.next(); // <- { value: 3, done: false }
sampleGen.next(); // <- { value: 5, done: false }
sampleGen.next(); // <- { value: undefined, done: true}


/**
 * Przykład 2: Fibonacci
 */
function* fibonacci() {
  let previous = 0,
          current = 1;
    
  while (true) { // infinite loop
    yield current;
    
    const next = current + previous;
    
    previous = current;
    current = next;
  }
}

const sequence = fibonacci();

console.clear();
console.log(sequence.next()) // <- { value: 1, done: false }
console.log(sequence.next()) // <- { value: 1, done: false }
console.log(sequence.next()) // <- { value: 2, done: false }
console.log(sequence.next()) // <- { value: 3, done: false }
console.log(sequence.next()) // <- { value: 5, done: false }
console.log(sequence.next()) // <- { value: 8, done: false }
console.log(sequence.next()) // <- { value: 13, done: false }



/**
 * Przykład 3
 */
 function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

gen.next(); // undefined
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise



/**
 * Przykład 4
 */
function* fooBar() {
  const a = yield;
  const b = yield;
  yield a + b;
}
const fooBarGenerator = fooBar();

console.log( fooBarGenerator.next() ); // {value: undefined, done: false}
console.log( fooBarGenerator.next('foo') ); // {value: undefined, done: false}
console.log( fooBarGenerator.next('bar') ); // { value: 'fooBar', done: false}



/**
 * Przykład 5
 */
function* foo(x) {
    var y = 2 * (yield (x + 1)); // 2 * 12 = 24
    var z = yield (y / 3); // y = 24 -> 24 / 3 = 8
    return (x + y + z); // 5 + 24 + 13 = 42
}

var it = foo( 5 );

console.log( it.next( ) );      // { value: 6, done:false }
console.log( it.next( 12 ) );   // { value: 8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true } // true bo return



/**
 * Przykład 6
 */
function* getFunc() {
  yield* [1, 2];
  yield* "OK";
  yield* arguments;
}
var generator = getFunc(5, 6);

console.log(generator.next()); // 1
console.log(generator.next()); // 2
console.log(generator.next()); // O
console.log(generator.next()); // K
console.log(generator.next()); // 5
console.log(generator.next()); // 6
 
