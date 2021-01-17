// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);
console.log("grey's \n\tbook");

// 2. Numeric operation
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //postIncrement 3, counter 4
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators 할당하는 operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators 비교하는 operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. 🌟 Logical operators: ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2; // false

// || (or). 
// 하나라도 true라면 true이기 때문에 or은 처음에 true가 나오면 뒤에는 보지않고 "멈춘다"
// => 연산이 많고 무거운 함수같은 경우 마지못해 체크하도록 ⭐️제일 뒤에 배치한다!
console.log(`or: ${value1 || value2 || check()}`); // t || f || t => true

// && (and). 
// 모두 true여야 true이기 때문에 앞에 하나라도 false가 나오면 뒤에는 보지않고 멈춘다.
// => 연산이 많고 무거운 함수같은 경우 마지못해 체크하도록 ⭐️제일 뒤에 배치한다!
console.log(`and: ${value1 && value2 && check()}`); // value 2가 f이기 때문에 check()함수 호출x

// and는 간단하게 null 체크를 할 때에도 사용된다.
// nullableObject && nullableObject.something => nullableObject이 null이면 false라서 뒤의 nullableObject.something가 실행되지 않음.
// 즉 nullObject가 null이 아닐때에만 nullableObject의 something이라는 value를 불러올 수 있다.
// 코드로 풀어보자면,
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        // waste time
        console.log('🛠');
    }
    return true;
}

// ! (not). 값을 반대로 바꾸어준다.
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion(타입을 변경해서 검사한다)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === ⭐️ strict equality, no type conversion(타입변경을 하지 않는다) => 지향!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const grey1 = {name: 'grey'};
const grey2 = {name: 'grey'};
const grey3 = grey1; // 메모리에 똑같은 ref를 가지고 있다.
console.log(grey1 == grey2); // 메모리에 각각 다른 ref가 담겨있다 (ref는 각각 다른 object를 가리키고 있다)
console.log(grey1 === grey2); // 같은 타입이든 아니든 다른 ref를 가지므로 false!
console.log(grey1 === grey3); // 같은 ref를 가지므로 true

// equality - puzzler
console.log(0 == false);  //t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false);// f
console.log(null == undefined); // t (null과 undefined는 같다고 간주된다.)
console.log(null === undefined);// f


// 8. Conditioinal operators: if
// if, else if, else
const name = 'ㅇㄹ';
if (name === 'grey'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
// 간단할때에는 이렇게 쓰고, 너무 길면 if else나 switch를 사용한다.
console.log(name === 'grey' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Firefox';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do-while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// 블럭을 먼저 실행하고 싶다면 do-while, 조건이 맞을때에만 블럭을 실행하고 싶다면 while문 사용!

// for lop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration (지역변수 let i 사용)
    console.log(`inline variable for: ${i}`);
}

// nested loops
// Big O : O(n^2) => cpu에 좋지 않음. 되도록 지양.
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i ++) {
    if (i % 2 != 0){
        continue;
    }
    console.log(`Q1. i: ${i}`);
    // 더 좋은 방법
    // if( i % 2 === 0){
    //     console.log(`Q1. i: ${i}`);
    // }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if(i > 8){
        break;
    }
    console.log(`Q2. i: ${i}`);
}