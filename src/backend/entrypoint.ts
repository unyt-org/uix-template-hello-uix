
import { $$ } from "unyt_core";
import { UIX } from "uix";

// start provider for client endpoint
UIX.Provider.setClientRootDir(new URL('../frontend/', import.meta.url));
UIX.Provider.setClientEntrypoint('./entrypoint.ts')
UIX.Provider.goPublic();


export function hello(name:string) {
	console.log("hello " + name)
}