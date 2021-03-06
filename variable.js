// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
 'use strict';
 console.log(age);// undefined

// 2. Variable (변수), rw(read/write) - 메모리에 값을 읽고 쓰는 것이 가능하다.
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
//console.log(name);// block 안에 있는 값이 출력되지 않는다.
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
//let name; // Cannot access 'name' before initialization


// 3.  Constant: 한 번 할당하면 값이 절대 바뀌지 않는 값, r(read only) - 읽기만 가능하고 값을 변경시킬 수 없다.
// 따라서, js에서는 값이 계속 바뀌어야 할 좋은 이유가 없다면 왠만해선 const로 작성하는 것이 좋은 습관이다.
// 즉, js에서는 변수 선언시
//  Mutable 타입은(변수) let, Immutable 타입은(상수) const 사용
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// 변경이 불가능한 "Immutable data types": primitive types, frozen objects (i.e. object.freeze())
// 변경이 가능한 "Mutable data types": all objects by default are mutable in JS
// favor immutable data type always for a few reasons:(웬만하면 한 번 할당되면 다시는 변경되지 않는 값을 사용해라)
//  - security
//  - thread safety: 다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경할 수 있기 때문
//  - reduce human mistakes


// primitive 타입인지 object 타입인지에 따라 메모리에 값이 다른 방식으로 저장된다.
// primitive - 메모리에 값이 바로 저장
// object - 너무 커서 메모리에 한번에 저장x, 실제 오브젝트를 가리키는 reference가 메모리에 저장된다.
// 4. Variable types(primitive type / object type)
// primitive, single item(더이상 나눠질 수 x): number, string, boolean, null, undefined, symbol
// object, box container(primitive을 묶어서 한 박스로 관리)
// function, first-calss function
//first-calss function: function도 다른 데이터 타입처럼 변수에 할당도 가능하고, 함수의 인자나 리턴값으로도 전달이 가능하다.

const count = 17;// Integer
const size = 17.1;// decimal number
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// 연산할 때 항상 나누려는 값이 문자인지, 0인지 체크해야 한다

// bigInt (fairly new, dont' use it yet) - 크롬과 파이어폭스만 지원
const bigInt = 1234567890123456789012345678901234567890n;// over(-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string) - 백틱과 $ 기호 사용
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;// false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null; // null로 값이 명확하게 할당된 상태.
console.log(console.log(`value: ${nothing}, type: ${typeof nothing}`));

// undefined
let x; // 선언만 되고 값은 지정되지 않은 상태
console.log(`value: ${x}, type: ${typeof x}`);

// symbol: create unique identifiers for objects
//          고유한 식별자가 필요하거나 우선순위를 주고싶을 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');//id라는 동일한 string이어도 다른 Symbol이다.
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');// string이 같을때 같은 Symbol을 만들고 싶다면 Symbol.for을 사용
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);//.description으로 항상 string으로 변환해서 써야 한다

// object, real-life object, data structure
const grey = {name: 'grey', age:30}; // grey는 const이기 떄문에 다른 object로 변경이 안된다.
                                    // 하지만 grey object 안에 있는 변수는 변경 가능하다.
grey.age=29;

// 5. Dynamic typing: dynamically typed language
// js는 선언할때 타입을 정하지 않고, 런타임때(프로그램이 동작할 때) 할당된 값에 따라서 타입이 정해진다
let text = 'hello';
console.log(text.charAt(0));// h
console.log(`value: ${text}, type: ${typeof text}`); // type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);// number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);// 75 string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);// 4 number
//console.log(text.charAt(0)); // text.charAt is not a function Error!!
