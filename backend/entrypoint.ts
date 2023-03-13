import { $$, Datex } from "unyt_core";
import {getExampleScript} from "uix_std/datex/example_script.ts";
import { logger } from "unyt_core/datex_all.ts";

const scripts = eternal ?? $$(new Map<string,string>())

console.log("scripts",scripts, Datex.Pointer.getByValue(scripts)?.idString())

@endpoint export class SharedScripts {
  @property static get(id:string, lang = 'de', content?:string):Datex.Return<Datex.CompatValue<string>> {
		if (!scripts.has(id)) scripts.set(id, $$(content ?? getExampleScript(lang, id, datex.meta.sender)))
		return scripts.get(id);
	}

	@property static getNewId():Datex.Return<Datex.CompatValue<string>> {
		let id:string|undefined;
		while (!id || scripts.has(id)) {
			id = this.generateId()
		}
		return id;
	}

	private static generateId(length = 10) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

}