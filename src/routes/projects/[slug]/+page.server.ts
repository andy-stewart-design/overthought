import projectData from "@content/projects.json";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { CaseStudy } from "$lib/types/projects";

export const load: PageServerLoad = ({ params }) => {
	const { slug } = params;
	const projects = projectData.entries as CaseStudy[];

	const [project] = projects.filter((p) => p.metadata.link?.href === slug);

	if (!project) {
		throw error(404, {
			message: "Project not found.",
		});
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
