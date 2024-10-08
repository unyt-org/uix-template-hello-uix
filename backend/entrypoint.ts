/**
 * Backend entrypoint:
 * This module provides a default export that defines the UI that is returned from the backend
 * when a page is visited
 */
import { provideRedirect } from "uix/providers/common.tsx";
import { type Entrypoint } from "uix/providers/entrypoints.ts";

export default {
	// show backend (hybrid) rendered page on /backend
	'/backend': import("common/page.tsx"), 
	
	// redirect / to /backend
	'/': provideRedirect("/backend")
} satisfies Entrypoint;