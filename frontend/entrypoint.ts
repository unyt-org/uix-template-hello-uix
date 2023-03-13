
import { $$, Datex } from "unyt_core";
import { UIX } from "uix";
import { DatexInterface } from "uix_std/datex/main.ts";

UIX.Theme.setMode("dark")
UIX.Routing.setPrefix(UIX.Routing.Prefix.PATH)

const dx_interface = await lazy_eternal ?? $$(new DatexInterface({enable_routes:true, local_interface:true, removable:false, border_radius:0, temporary:true, bg_color:undefined}));
export default dx_interface;


if ('launchQueue' in window) {
	// @ts-ignore
    window.launchQueue.setConsumer(async launchParams => {
		if (launchParams.files?.[0]) {
			const datex_file_data = await Datex.getDatexContentFromFileHandle(launchParams.files[0])
			dx_interface.editor?.setFileData(datex_file_data)
		}
    });
}