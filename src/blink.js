import Alpha from "./util/Alpha.js"
import VT100 from "./util/VT100.js"

class Blink extends Alpha{
	isShow = true
	
	run(){
		if(this.isShow)
			this.show();
		else
			this.hide();
		
		this.isShow = !this.isShow;
	}
}


VT100.clearScreen();


for (let i = 0; i<10; i++){
	let blink = new Blink();
	setInterval(() => blink.run(), parseInt(Math.random()*500+10));	
}

let alpha = new Alpha();