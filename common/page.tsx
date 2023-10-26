import { UIX } from "uix";
import { datexVersion, denoVersion, uixVersion } from "../backend/data.ts";

export default 
	<main class="hello-container">
		<section>
			<h1>Welcome to UIX!</h1>
			<p>This page was rendered on the <b>{UIX.context}</b></p>
			<ul>
				<li><b>UIX version:</b> {uixVersion}</li>
				<li><b>DATEX version:</b> {datexVersion}</li>
				<li><b>Deno version:</b> {denoVersion}</li>
			</ul>
			<p>To get started, take a look at the <a href="https://docs.unyt.org/manual/uix/getting-started" target="_blank">UIX documentation</a></p>
		</section>
	</main>