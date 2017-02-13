# Coding Exercises
## Javascript

- [x] [Fibonacci Looped](./javascript/fibonacciSequence.js)
- [x] [Fibonacci Recursive](./javascript/fibonacciSequence.js)
- [x] [Reverse String by Letter](./javascript/reverseString.js)
- [x] [Reverse String by Space](./javascript/reverseString.js)
- [x] [Reverse String by Letter without Methods](./javascript/reverseString.js)
- [x] [Reverse String by Space without Methods](./javascript/reverseString.js)
- [x] [Is Prime Number](./javascript/isPrimeNumber.js)
- [x] [Is Integer](./javascript/isInteger.js)
- [x] [Find Average](./javascript/findAverage.js)
- [x] [Do Objects Equal](./javascript/compareObjects.js)
- [x] [List Objects Differences](./javascript/compareObjects.js)
- [x] [Is Compound Word](./javascript/compoundWords.js)
- [x] [List Compound Words](./javascript/compoundWords.js)
- [x] [For Each Function](./javascript/forEach.js)
- [ ] [Get Neighbors Coordinates](./javascript/neighbors.js)
- [ ] [Cat and Dog](./javascript/catAndDog.js)

### Tests

1. `npm install`
2. `npm run test`

#### Output

```
do objects equal
✓ doObjectsEqual({"a":1,"b":2,"c":3}, {"a":1,"b":1,"c":4}) => false
✓ doObjectsEqual({"a":1,"b":2,"c":3}, {"b":2,"a":1}) => false
✓ doObjectsEqual({"a":1,"b":2,"c":3}, {"a":1,"b":2,"c":3}) => true

list object differences
✓ listObjectDifferences({"a":1,"b":2,"c":3}, {"a":1,"b":1,"c":4}) => b,c
✓ listObjectDifferences({"a":1,"b":2,"c":3}, {"b":2,"a":1}) => c
✓ listObjectDifferences({"a":1,"b":2,"c":3}, {"a":1,"b":2,"c":3}) => 

is compound word
✓ isCompoundWord(shut) => false
✓ isCompoundWord(shutter) => false
✓ isCompoundWord(stock) => false
✓ isCompoundWord(shutterstock) => true
✓ isCompoundWord(snap) => false
✓ isCompoundWord(chat) => false
✓ isCompoundWord(snapchat) => true

return compound words
✓ returnCompoundWords(shut) => 
✓ returnCompoundWords(shutter) => 
✓ returnCompoundWords(stock) => 
✓ returnCompoundWords(shutterstock) => shut,shutter,stock
✓ returnCompoundWords(snap) => 
✓ returnCompoundWords(chat) => 
✓ returnCompoundWords(snapchat) => snap,chat

recursive fibonacci sequence
✓ recursiveFibonacci(1) => 1
✓ recursiveFibonacci(2) => 1
✓ recursiveFibonacci(3) => 2
✓ recursiveFibonacci(4) => 3
✓ recursiveFibonacci(5) => 5
✓ recursiveFibonacci(6) => 8
✓ recursiveFibonacci(7) => 13
✓ recursiveFibonacci(8) => 21
✓ recursiveFibonacci(9) => 34
✓ recursiveFibonacci(10) => 55

looped fibonacci sequence
✓ loopedFibonacci(1) => 1
✓ loopedFibonacci(2) => 1
✓ loopedFibonacci(3) => 2
✓ loopedFibonacci(4) => 3
✓ loopedFibonacci(5) => 5
✓ loopedFibonacci(6) => 8
✓ loopedFibonacci(7) => 13
✓ loopedFibonacci(8) => 21
✓ loopedFibonacci(9) => 34
✓ loopedFibonacci(10) => 55

find averages
✓ findAverage(1,2,3,4,5,6,7,8,10) => 5.111111111111111
✓ findAverage(1,2,3,4,5) => 3
✓ findAverage(1,1,1) => 1

for each function
✓ forEach(1) => 1
✓ forEach([object Object]) => [object Object]
✓ forEach(1,2) => 1,2
✓ forEach([object Object]) => [object Object]
✓ forEach() => 
✓ forEach(test) => test

is integer
✓ isInteger(NaN) => false
✓ isInteger(undefined) => false
✓ isInteger(3.1234) => false
✓ isInteger(2) => false
✓ isInteger(2.0) => false
✓ isInteger(1) => true

is prime number
✓ isPrimeNumber(1) => false
✓ isPrimeNumber(4) => false
✓ isPrimeNumber(3) => true
✓ isPrimeNumber(20) => false
✓ isPrimeNumber(199) => true

reverse string by letter
✓ reverseStringByLetters(.ecnetnes a si sihT) => This is a sentence.
✓ reverseStringByLetters(.ecnetnes rehtona si sihT) => This is another sentence.
✓ reverseStringByLetters(.ecnetnes rerehtona si sihT) => This is anotherer sentence.

reverse string by space
✓ reverseStringBySpace(sentence. a is This) => This is a sentence.
✓ reverseStringBySpace(sentence. another is This) => This is another sentence.
✓ reverseStringBySpace(sentence. anotherer is This) => This is anotherer sentence.

reverse string by letter without methods
✓ reverseStringByLettersWithoutMethods(.ecnetnes a si sihT) => This is a sentence.
✓ reverseStringByLettersWithoutMethods(.ecnetnes rehtona si sihT) => This is another sentence.
✓ reverseStringByLettersWithoutMethods(.ecnetnes rerehtona si sihT) => This is anotherer sentence.

reverse string by space without methods
✓ reverseStringBySpaceWithoutMethods(sentence. a is This) => This is a sentence.
✓ reverseStringBySpaceWithoutMethods(sentence. another is This) => This is another sentence.
✓ reverseStringBySpaceWithoutMethods(sentence. anotherer is This) => This is anotherer sentence.


72 passing (26ms)

```
