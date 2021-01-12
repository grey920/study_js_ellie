// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
 'use strict';

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