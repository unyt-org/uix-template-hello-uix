import { datexVersion, denoVersion, uixVersion } from "../backend/entrypoint.tsx";

export default 
	<div>
		Hello UIX
		<ul>
			<li>UIX version: {uixVersion}</li>
			<li>DATEX version: {datexVersion}</li>
			<li>Deno version: {denoVersion}</li>
		</ul>
	</div>