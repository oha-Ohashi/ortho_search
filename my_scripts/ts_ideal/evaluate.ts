import * as io from "./io";
import * as calc from "./calc";

export function disp_eval(keys: string, text: string): void{
	console.log(keys3x10(keys))
	const calc_obj = evaluate(keys, text)
	console.log("alternates: ", calc_obj.n_alternate)
	console.log("costs:", calc_obj.costs)
	console.log("cost:", calc_obj.cost_sum)
	console.log("------------------------------")
	//const calc =
}

export function keys3x10(keys: string): string{
	let l: string[] = keys.split("")
	const sth: [number, string][] = [[5, ' '],[16, ' '],[27, ' '],[11, '\n'],[23, '\n']]
	sth.forEach((item) => {
		l.splice(item[0], 0, item[1])
		//console.log(item)
	})
	return l.join("")
}

export function evaluate(keys: string, text: string): calc.Calculation{
	//console.log(text.length)
	const xy_array = io.string_to_xyarray(text, keys)
	//console.log(xy_array)
	const calc_obj = new calc.Calculation(xy_array)
	return calc_obj
}

/*
if(require.main === module) {
	let text: string = 'it is a fine day'
	text += "It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form? His limbs were in proportion, and I had selected his features as beautiful. Beautiful! Great God! His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with h"
	text += "konaida roan roan kun ni a xtu ta toki 、 maruzen no mise de 一 niti ni mannenhitu ga nani honi u reru daro u to tazu ne tara 、 roan kun ha oo i toki ha hyakumoto kurai de ru sou da to kota e ta 。 otto sore de ha 一 hon no mannenhitu ga dono kurai naga ku tuka eru daro u to ki i tara 、 konaida yokohama no mono de 、 pen ha mada ka nari da ga 、 ziku zi kuga he xtu ta kara ziku take dake kae kae te kure kure to i xtu te mo xtu te ki ta no ga aru ga 、 konohito ha 十三 nen mae ni 一 hon ka xtu ta giri de 、 sono 一 hon wo kyou made ta e zu siyou si te i ta no da to iu kara 、 kore kore ga maa itiban naga i rei rasii to hana si ta 。 si te mi ru to hutuu no baai de ha ikura zankoku ni tuka xtu te mo taitei 六七 nen no hosyou ha tu ke rareru no ga 、 ippan no mannenhitu no unmei rasii 。 一 hon de otto hodo sorehodo naga ku tuka eru mono ga hi ni hyakumoto mo de ru to i e ba mannenhitu wo zyuyou suru hito no hani ha hizyou na ikioi wo omonmi moxtu te hiro gari tutu aru to mi te mo manzara manzara kentoutiga"
	console.log("Layout: ABCDE")
	disp_eval("ABCDEFGHIJKLMNOPQRSTUVWXYZ____", text)
	console.log("Layout: QWERTY")
	disp_eval("QWERTYUIOPASDFGHJKL_ZXCVBNM___", text)
	console.log("Layout: Dvorak")
	disp_eval("___PYFGCRLAOEUIDHTNS_QJKXBMWVZ", text)
	console.log("Layout: Colemak-DH")
	disp_eval("QWFPBJLUY_ARSTGMNEIOZXCDVKH___", text)
	console.log("Layout: Eucalyn")
	disp_eval("QW___MRDYPAOEIUGTKSNZXCVFBHJL_", text)
	console.log("Layout: Ohashi rev1")
	disp_eval("_WBF_MRDYPAOEUIGTKNSZXCV__HJLQ", text)
	console.log("Layout: Ohashi rev2")
	disp_eval("_GMK_QCWP_DNHTRIEAOUVFLSZ_YBXJ", text)
}
*/