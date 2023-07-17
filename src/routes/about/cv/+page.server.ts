import { jobs, teaching, education, proofPoints } from "@content/about/cv";
import { references } from "@content/about/references";
import type { PageServerLoad } from "./$types";

export const csr = false;

const professionalExperiences = [jobs, teaching, education];

export const load: PageServerLoad = async () => {
	return { professionalExperiences, proofPoints, references };
};
