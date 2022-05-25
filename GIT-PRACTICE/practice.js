// let name = "JUDY";
// let age = 21;

// const BLOODTYPE = "A";
 
// const message = `My name is ${name}`;

// typeof null; 
// null = 아무 값도 없다.
// prompt 

// const name = "JUDY";

// const a = "나는  ";
// const b = "   입니다.";

// prompt : 값을 입력 받을 때 사용한다.
// alert : 정보를 일방적으로 알려줄 때 사용한다.

// const name = prompt("이름을 입력하세요.");
// alert("환영합니다, " + name + "님");
// confirm : 무언가를 확인할 때

// const name = prompt("이름을 입력하세요.");
// alert(`환영합니다. ${name}님`);

// prompt : 여러 개의 인수를 가질 수 있다. 입력 받을 디폴트 값을 적을 수 있는데, 힌트나 무언가를 입력할 때 도움을 받을 수 있음.(소비자 입장에서)
// const name = prompt("예약일을 입력해주세요.", "2022-05-05");

// confirm : 무언가를 확인할 때
// const isAdult = confirm("당신은 성인입니까?");
// confirm과 alert의 차이점: 확인&취소 버튼 있고 / 확인 버튼만 있음

// const mathScore = prompt("수학 점수를 입력하세요.");
// const engScore = prompt("영어 점수를 입력하세요.");
// cosnt result = (mathScore + engScore) / 2;

// console.log 는 쉼표를 통해 여러가지 값을 보이게 할 수 있다.
// 명시적 형변환 
// 1. String : 괄호 안을 문자형으로 변환 (앞 글자는 항상 대문자로 써야함.)
// 2. Number : 괄호 안을 숫자형으로 변환 (Number(null) = 0, Number(undefined) = NaN) (Number(0)=false, Number('0')=True) / Number('') = false, Number(' ')=true)
// 3. Boolean : boolean형으로 변환 (False로 변형 = 숫자 0 / 빈 문자열" / null / undefined / NaN)

// console.log(
// String(3),
// String(true),
// String(false),
// String(null),
// String(undefined)
// )

// console.log(
//     Number("1234")
// )

// console.log(
//     Number(true), =====> 1
//     Number(false) =====> 0
// )

// 거듭제곱 = ** 두 개 쓸 것

// let num = 10;
// num = num + 5;

//  === : 일치 연산자 / == : 동등 연산자

// function showError() {
//     alert ('애러가 발생했습니다. 새로고침해주세요.');
// }

// showError();

// function sayHello(name - 'friend') {
//     let msg = `Hello, ${name}`;
//     console.log(msg);
// }

// sayHello();
// sayHello('World');

// let msg = "welcome";
// console.log(msg);

// function sayHello(name){
//     let msg = "Hello"
//     console.log(msg + " " + name);
// }

// sayHello('JUdy');
// console.log(msg);

// let name = 'Judy';

// function sayHello (name) {
//     console.log(name);
// }

// sayHello();
// sayHello('Jone');


// return를 적어주면, return 옆에 있는 값을 반환한다.
// function odd(num1, num2) {
//     return num1 + num2;
// }

// const result = odd(2,3);
// console.log(result);

// function Error() {
//     alert('에러가 발생했습니다');
//     return;
//     alert('이 코드는 절대 실행되지 않습니다.');
// }

// const result = Error();
// // console.log(result);

// let showError = function() {
//     console.log('error');
// }

// function showError() {
//     console.log("error");
// }