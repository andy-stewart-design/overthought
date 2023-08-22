import projectData from "@content/projects.json";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { CaseStudy } from "$lib/types/projects";

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;
	console.log(params);

	const projects = projectData.entries;

	const [project] = projects.filter((p) => p.metadata.link?.internal === `/projects/${slug}`);

	if (!project) {
		const fallbackProjects = projects
			.filter((p) => {
				if (p.metadata.client === "GLY") return true;
				if (p.metadata.client === "Vulcan Real Estate") return true;
				if (p.metadata.client === "Carbon Direct") return true;
			})
			.map((p) => p.metadata);

		// throw error(404, {
		// 	message: "Project not found.",
		// 	projects: fallbackProjects,
		// });
	}

	const { content, metadata } = project;

	if (!content) {
		throw error(404, {
			message: "There was an error loading that project.",
		});
	}

	return {
		client: metadata.client,
		...content,
	};
};
