
//옛날 방식에서는 덮어씌어질 수 있음
var add = function (x , y , z){
	console.log("add(x , y, z)...")
}

function add(x , y){
	console.log("add(x , y)...")
}


add()