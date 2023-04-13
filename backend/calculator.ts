
import "unyt_core";

/**
 * This calculator runs on the backend endpoint, but the class properties can be accessed via ES6 module imports on the frontend endpoint
 */

export class Calculator {

	static async sum (a:number, b:number) {
		const sum = a + b;
		calculations.push(`${a} + ${b} = ${sum}`); // save calculation history
		return await sum;
	}

}


/**
 * This array can also be accessed via module imports
 */
export const calculations:string[] = $$ ([]);