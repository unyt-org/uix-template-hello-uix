import { UIX, C, HTML } from "uix";
import { Datex, $$, transformAsync, transform } from "unyt_core";

// import Calculator and the calculations history array from the backend endpoint
import { Calculator, calculations} from "../backend/calculator.ts";


// calculate the sum of a+b using the Calculator.sum method from the backend endpoint
const a = $$ (0);
const b = $$ (0);
const sum = await transformAsync([a,b], (a,b) => Calculator.sum(a,b));

// log when a new entry is added to the calculation array
Datex.Value.observe(calculations, calc => console.log("new calculations: " + calc))


// UI for setting a and b and displaying the sum
export default HTML `
<div style='width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--bg_default)'>${[
	new UIX.Elements.FloatInput(a),
	"+",
	new UIX.Elements.FloatInput(b),
	"=",
	new UIX.Elements.FloatInput(sum, {number_color: transform([sum], sum => sum < 0 ? C`red` : C`green`)}),
]}</div>`
