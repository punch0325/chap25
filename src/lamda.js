

// add 변수에 람다식 문법을 이용하여 함수를 대입하는 것
let add = (a , b) => {
	return a + b;	
}
console.log("add 함수 = "+add(10,20));



let print = v => console.log(v)   // 매개변수가 하나 밖에 없으면 괄호 생략 가능
print("람다식 함수 출력");



let add2 = (a , b) => a+b; // add 함수의 축약 버전, 한줄은 중괄호와 return 생략이 가능하다. 
console.log("add2 함수 = "+add2(10,20))


let hello = () => console.log("안녕하세요!") // 매개변수가 아예 없다면 오히려 괄호는 생략할 수 없다.
hello();



function pow(a , b  = 2){
	return a ** b    // a의 b제곱
}
console.log(pow(10,3))
console.log(pow(10))  // a에만 매개값을 넘겨주었지만 b가 2라는 값을 갖고 있었기 때문에(= 디폴트 파라미터) 10의 2제곱이 계산 되어 리턴된다.



function sum(){
	console.log(arguments)
}

function sum2(...args){ // 가변 매개변수
	console.log(args)
}

sum(1)
sum(1,2,3)

sum2(1)
sum2(1,2,3)