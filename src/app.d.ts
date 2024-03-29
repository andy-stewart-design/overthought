import { CaseStudyMetadata } from "./lib/types/projects";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Error {
			projects?: CaseStudyMetadata[];
		}
		interface Locals {
			theme: string;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
