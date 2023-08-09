
// 선언적 함수. 메소드 처럼 어디에서나, 언제나 호출 가능하고 항상 먼저 만들어진다.
function main(){
	console.log("메인 함수 호출")
	
}
main();


// 익명 함수. 선언을 한 이후에만 호출 가능
let add = function(a,b){
	return a+b
}
console.log(add(1,5));


// 람다(lamda)식 함수. 화살표(=>)를 이용하고 익명 함수와 마찬가지로 선언 이후에만 호출 가능
let mul = (a , b) => a * b;
console.log(mul(10,20));


console.log(typeof main)
console.log(typeof add)
console.log(typeof mul)

console.log(main)
console.log(add)
console.log(mul)
