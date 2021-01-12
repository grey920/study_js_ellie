// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
 'use strict';
 console.log(age);// undefined

// 2. Variable (변수)
// let (added in ES6)

// Block scope
let globalName = 'global name'; // 어느 곳에서나 접근 가능하다.
                                // 어플리케이션이 실행되는 순간부터 끝날때까지 메모리에 탑재되기 때문에 최소한으로 사용한다.
{
    // 선언과 동시에 값 할당
    let name = 'grey'; // name이라는 변수가 가리키는 메모리 어딘가에 grey라는 값을 저장함.
    console.log(name);
    name = 'hello'; // 값 다시 할당
    console.log(name);
}
console.log(name);// block 안에 있는 값이 출력되지 않는다.
console.log(globalName);

// var -> 아직도 쓴다면 등 한 대 후두리챱챱!!
// 선언하기 전에 값을 할당할수도 있고, 그 전에 출력도 할 수 있다!!(which is 미친짓!!)
// var hoisting - 선언을 가장 위로 끌어올리는 것
// has no block scope - 블럭 안에서 선언해도 아무곳에서나 밖에서 출력이 가능하다 -> 선언하지도 않은 값이 할당되는 상황이 일어난다,,
console.log(age); //undefined '변수는 정의되었지만 값이 없다'
age = 4;
console.log(age); // 4
var age;

name = 4;
let name; // Cannot access 'name' before initialization