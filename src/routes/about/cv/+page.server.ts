import { jobs, teaching, education, proofPoints } from '@content/about/cv';
import type { PageServerLoadEvent } from './$types';

export const csr = false;

const professionalExperiences = [jobs, teaching, education];

export const load = async ({}: PageServerLoadEvent) => {
	return { professionalExperiences, proofPoints };
};
