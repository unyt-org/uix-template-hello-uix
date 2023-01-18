import { endpoint, property, Datex, $$} from "unyt_core";


/**
 * This calculator runs on the backend endpoint, but the class properties can be accessed via ES6 module imports on the frontend endpoint
 */

@endpoint export class Calculator {

	@property static sum (a:number, b:number): Datex.Return<number> {
		const sum = a + b;
		calculations.push(`${a} + ${b} = ${sum}`); // save calculation history
		return sum;
	}

}

/**
 * This DATEX Value can also be accessed via module imports
 */
export const calculations = $$<string[]> ([]);