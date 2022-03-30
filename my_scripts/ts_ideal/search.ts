import * as io from "./io";
import * as ev from "./evaluate";
import type { Calculation } from "./calc";
class Random {
	x: number
	y: number
	z: number
	w: number
	constructor(seed = 88675123) {
		this.x = 123456789;
		this.y = 362436069;
		this.z = 521288629;
		this.w = seed;
	}
	
	// XorShift
	next() {
		const t = this.x ^ (this.x << 11);
		this.x = this.y;
		this.y = this.z;
		this.z = this.w;
		return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
	}
	
	// min 以上 max 以下の乱数を生成する
	nextInt(min: number, max: number) {
		const r = Math.abs(this.next());
		return min + (r % (max + 1 - min));
	}
}
const random = new Random(1);

export class Search{
	nk: io.NaiKeeper
	text: string
	result: string
	calc: Calculation
	constructor(config: string, text: string){
		this.nk = new io.NaiKeeper(config)
		this.text = text
		this.result = this.nk.mizuni_modosu(this.nk.nai)
		this.calc = ev.evaluate(this.result, this.text)
	}
	doit(): void{
		const n_roop: number = 2000
		let abc: string[] = this.nk.nai
		let e_max: number = ev.evaluate(
			this.nk.mizuni_modosu(abc), this.text
		).cost_sum
		for(let i = 0; i < n_roop; i++){
			const new_abc: string[] = swap(abc)
			const new_e: number = ev.evaluate(
				this.nk.mizuni_modosu(new_abc), this.text
			).cost_sum
			if(new_e < e_max){
				abc = new_abc
				e_max = new_e
				this.result = this.nk.mizuni_modosu(abc)
				this.calc = ev.evaluate(this.result, this.text)
			}
		}
	}
	show(): void{
		console.log(this.result)
		console.log(ev.keys3x10(this.result))
		console.log(ev.evaluate(this.result, this.text).cost_sum)
	}
}

function swap(arg: string[]){
	let arr:string[] = arg.map(x => x)
	let i: number = random.nextInt(0, arr.length-1)
	let j: number = random.nextInt(0, arr.length-1)
	const tmp: string = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
	return arr
}

/*
if(require.main === module) {
	for(let i = 0; i < 10; i++){
		const s = new Search(
			"xxxx__xxxxxxKxxxxxxxxHJL__xxxx",
			"it is a fine dayIt was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with hkonaida roan roan kun ni a xtu ta toki 、 maruzen no mise de 一 niti ni mannenhitu ga nani honi u reru daro u to tazu ne tara 、 roan kun ha oo i toki ha hyakumoto kurai de ru sou da to kota e ta 。 otto sore de ha 一 hon no mannenhitu ga dono kurai naga ku tuka eru daro u to ki i tara 、 konaida yokohama no mono de 、 pen ha mada ka nari da ga 、 ziku zi kuga he xtu ta kara ziku take dake kae kae te kure kure to i xtu te mo xtu te ki ta no ga aru ga 、 konohito ha 十三 nen mae ni 一 hon ka xtu ta giri de 、 sono 一 hon wo kyou made ta e zu siyou si te i ta no da to iu kara 、 kore kore ga maa itiban naga i rei rasii to hana si ta 。 si te mi ru to hutuu no baai de ha ikura zankoku ni tuka xtu te mo taitei 六七 nen no hosyou ha tu ke rareru no ga 、 ippan no mannenhitu no unmei rasii 。 一 hon de otto hodo sorehodo naga ku tuka eru mono ga hi ni hyakumoto mo de ru to i e ba mannenhitu wo zyuyou suru hito no hani ha hizyou na ikioi wo omonmi moxtu te hiro gari tutu aru to mi te mo manzara manzara kentoutiga"
		)
		s.doit()
		s.show()
	}
}
*/

