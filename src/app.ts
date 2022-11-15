
import { UIX } from "uix";
import { property } from "unyt_core";

@UIX.App
export class App {

	@property username = "xy" // this.meta.sender.toString()

	@UIX.Section 
	main = new UIX.Components.TextView({text:"Hi from Server", border_color:'var(--green)', border:5}, {margin:20})
	
	@UIX.Section("shop") 
	shop = new UIX.Components.TextView({text:"Hi from Server", border_color:'var(--green)', border:5}, {margin:20})
	
	@UIX.Section("more/abc") 
	more() {
		return new UIX.Components.TextView({text:"Hi from Server", border_color:'var(--green)', border:5}, {margin:20})
	}

}