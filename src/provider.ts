
import { UIX } from "uix";
import { Datex } from "unyt_core";
import { App } from "./app.ts";

await Datex.Supranet.connect();

UIX.Provider.use(()=>new UIX.Components.GridGroup({rows:[1,1], columns:[1,2], border_color:'var(--blue)'}, {margin:20}, [
	new UIX.Components.TextView({text:"Hi from Server", border_color:'var(--green)', border:5}, {margin:20}),
	new UIX.Components.TextView({text:"Hi from Server 2", border_color:'var(--red)', border:5}, {margin:20, gx:1})
]))
// UIX.Provider.use(App);


UIX.Provider.setRootDir(new URL("./public/", import.meta.url));
UIX.Provider.setImportMap(new URL("./importmap.json", import.meta.url))
UIX.Provider.useFile('./main.js')

UIX.Provider.goPublic();

// UIX.Provider.useFile('./public/main.js')

// UIX.Provider.use(App);
// or UIX.init(App)

// const bubbleSort = (await get('./unyt_core/dx_data/bubblesort.dx')).get("bubbleSort");
// @endpoint_default @scope class example {
// 	@expose static bubbleSort = bubbleSort
// 	@expose static array = [6,5,4,3,2,1,0]
// }

// @namespace("Math") class Math {
        
// 	@expose @meta(2) static sum(x:number,y:number, meta:datex_meta) {
// 		x = Number(x);
// 		y = Number(y);
// 		console.log("meta:", meta);
// 		return x+y;
// 	}

// 	@expose static product(x:number|bigint,y:number|bigint) {
// 		x = Number(x);
// 		y = Number(y);
// 		return x*y;
// 	}

// 	@expose static quotient(x:number|bigint,y:number|bigint) {
// 		x = Number(x);
// 		y = Number(y);
// 		return x/y;
// 	}

// 	@expose static sqrt(x:number) {
// 		x = Number(x);
// 		return globalThis.Math.sqrt(x);
// 	}

// }