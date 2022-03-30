export const validationLayout = (str: string): string => {
	const arr = str.split("")
	if(arr.length === 30){
		const unds = arr.filter(c => c ==="_")
		const xs = arr.filter(c => c ==="x")
		const Cs = arr.filter(c => c.match(/[A-Z]/))
		if(unds.length === 4){
			if(xs.length + Cs.length === 26){
				//console.log(Cs.length + ":" + new Set(Cs).size)
				if(Cs.length === new Set(Cs).size){
					return ""
				}else{
					return "Warning: Duplicate [A-Z] is not allowed."
				}
			}else{
				return "Warning: This area requires 26 \"x\" or [A-Z]"
			}
		}else{
			return "Warning: This area requires 4 \"_\"s. "
		}
	}else{
		return "Warning: This area requires 30 characters."
	}
}
export const validationText = (str: string): string => {
	if(str.length >= 10){
		if(str.indexOf("'") < 0 && str.indexOf('"') < 0){
			return ""
		}else{
			return "Warning: You can't use \" or \' ."
		}
	}else{
		return "Warning: This area requires 10 characters or more."
	}
}