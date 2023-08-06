import type { PageLoad } from "./$types";
import projectData from "@content/projects.json";
import recoData from "@content/recommendations.json";

export const load: PageLoad = () => {
	const projects = projectData.entries;
	const recos = recoData.entries;

	return {
		projects,
		recos,
		meta: {
			title: "Andy Stewart | Design + Code",
			description:
				"I’m Andy Stewart, a designer working at the intersection of brand and technology. Currently slinging pixels at Turnstyle in Seattle, WA.",
		},
	};
};
