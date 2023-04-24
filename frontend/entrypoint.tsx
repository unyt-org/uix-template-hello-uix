import { UIX } from "uix";
import { Datex, always, transformAsync } from "unyt_core";
// import Calculator and the calculations history array from the backend endpoint
import { Calculator, calculationHistory} from "../backend/calculator.ts";

// force light mode
UIX.Theme.setMode("light");

// log when a new entry is added to the calculation array
Datex.Value.observe(calculationHistory, calc => console.log("new calculation: " + calc))

// calculate the sum of a+b using the Calculator.sum method from the backend endpoint
const a = $$ (0);
const b = $$ (0);
const sum = await always<number> `${Calculator.sum}(${a},${b})`;

// calculator UI: inputs for a + b, display sum calculated on backend
export default
	<div id="calculator">
		<div>
			<input type="number" value={0} valueOut={a}/> +
			<input type="number" value={0} valueOut={b}/> =
			<span>{sum}</span>
		</div>
	</div>
