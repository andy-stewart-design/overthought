import type { PageLoad } from "./$types";
import projectData from "@content/projects.json";

export const load: PageLoad = () => {
	const projects = projectData.entries;

	return {
		projects,
		meta: {
			title: "Andy Stewart | Design + Code",
			description:
				"I’m Andy Stewart, a designer working at the intersection of brand and technology. Currently slinging pixels at Turnstyle in Seattle, WA.",
		},
	};
};
