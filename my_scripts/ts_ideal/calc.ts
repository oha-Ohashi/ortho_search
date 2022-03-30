export class Calculation{
	costs: {position: number, movement: number}
	xy_array: number[][]
	n_alternate: number
	cost_sum: number
	constructor(xy_array: number[][]){
		this.costs = {
			position: 0,
			movement: 0
		}
		this.xy_array = xy_array
		this.n_alternate = 0
		this.create_cost()
		this.cost_sum = this.costs.position + this.costs.movement
	}

	create_cost(): void{
		this.xy_array.reduce((prev, curr):number[] => {
			//console.log(prev, curr)
			// Position cost
			this.costs.position += 10 * this.position_penalty(curr)
			// Movement cost
			if(this.at_left_hand(curr) == this.at_left_hand(prev)){
				let movement: number = 0
				const distance: {x: number, y: number} 
					= this.distance_2Darray(curr, prev)
				movement += distance.x *6
				movement += distance.y *6
				// double time it
				if(this.which_fing(curr) == this.which_fing(prev)){
					movement *= 2
				}

				this.costs.movement += movement
			}else{
				this.n_alternate += 1
			}

			return curr
		}, this.xy_array[0])
	}

	positon_cost = [
        [1.5, 1.3, 1.0, 1.0, 1.5,   1.5, 1.0, 1.0, 1.3, 1.5],
        [0.5, 0.3, 0.1, 0.0, 0.5,   0.5, 0.0, 0.1, 0.3, 0.5],
        [2.0, 1.8, 1.2, 1.0, 1.5,   1.5, 1.0, 1.2, 1.8, 2.0],
    ]
	position_penalty(xy: number[]): number{
		return this.positon_cost[xy[1]] [xy[0]]
	}
	at_left_hand(xy: number[]){
		if(xy[0] <= 4){
			return true
		}else{
			return false
		}
	}
	distance_2Darray(xy_a: number[], xy_b: number[]){
		const res: {x: number, y: number} = {
			x: Math.abs(xy_a[0] - xy_b[0]),
			y: Math.abs(xy_a[1] - xy_b[1])
		}
		return res
	}
	finger_list = [
        [1,2,3,4,4, 5,5,6,7,8],
        [1,2,3,4,4, 5,5,6,7,8],
        [1,2,3,4,4, 5,5,6,7,8]
    ]
	which_fing(xy: number[]): number{
		return this.finger_list[xy[1]][xy[0]]
	}
}