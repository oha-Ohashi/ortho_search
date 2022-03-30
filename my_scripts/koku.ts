export class Koku{
	i: number
	constructor(){
		this.i = 0
		setInterval(() => {
			this.i += 1
			//console.log(this.i)
		}, 100)
		
	}
	clickit(){
		this.i += 1
	}
}