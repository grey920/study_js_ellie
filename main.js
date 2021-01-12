// 순수 바닐라 자바스크립트를 쓸 때에는 use strict를 선언한다
// 이유: js는 아주 유연하기 때문에 선언되지 않은 변수에 값을 할당하는 등 
//      비상식적인 행동이 가능하기 때문에 이를 막아줄 수 있는 'use strict'를 선언한다
 'use strict';

console.log('hello world');

let a; // let a;를 주석처리하면 'a is not defined'라는 에러 메시지 발생
a = 6;