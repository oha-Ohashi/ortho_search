export function string_to_xyarray(text: string, keys_in1row: string): number[][]{
	let res: number[][] = []
	text.split("").forEach((item) => {
		const xy = c_to_xy(item, keys_in1row)
		if(xy != null){
			res.push(xy)
		}
	})
	return res
}
function c_to_xy(item: string, keys_in1row: string): number[] | null{
	const c = item.toUpperCase()
	const index = keys_in1row.split("").indexOf(c)
	if(index > -1){
		return [index % 10, Math.floor(index / 10)]
	}else{
		return null
	}
}

export class NaiKeeper{
	layout: string[]
	nai: string[]
	constructor(config: string){
		let data: string[] = config.split("")
		data = data.filter(item => item !== "\n")
		this.layout = data
		this.nai = this.gen_nai()
	}
	gen_nai(): string[]{
		let nai: string[] 
			= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
		nai = nai.filter(
			item => this.layout.indexOf(item) == -1
		)
		return nai
	}
	mizuni_modosu(target: string[]): string{
		let tgt: string[] = target.map(x => x)
		let modoshi: string[] = []
		for(let i = 0; i < 30; i++){
			const c: string = this.layout[i]
			if(c != 'x'){
				modoshi.push(c)
			}else{
				let item: string | undefined = tgt.shift()
				if(typeof item === 'string'){
					modoshi.push(item)
				}
			}
		}
		return modoshi.join("")
	}
}