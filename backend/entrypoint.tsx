import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix/uix.ts";

export const denoVersion = Deno.version.deno;
export const datexVersion = Datex.Runtime.VERSION;
export const uixVersion = UIX.version;