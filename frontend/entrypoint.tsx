import { UIX } from "uix";
import { Datex, $$, transformAsync } from "unyt_core";

// import Calculator and the calculations history array from the backend endpoint
import { Calculator, calculations} from "../backend/calculator.ts";

// calculate the sum of a+b using the Calculator.sum method from the backend endpoint
const a = $$ (0);
const b = $$ (0);
const sum = await transformAsync([a,b], (a,b) => Calculator.sum(a,b));

// log when a new entry is added to the calculation array
Datex.Value.observe(calculations, calc => console.log("new calculations: " + calc))

// force light mode
UIX.Theme.setMode("light");

// calculator UI: inputs for a + b, sum display
export default 
<div id="main">
	{new UIX.Elements.FloatInput(a)}
	+
	{new UIX.Elements.FloatInput(b)}
	=
	<span>{sum}</span>
</div>
