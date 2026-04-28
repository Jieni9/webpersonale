import Project from "$lib/content/project"

export const load = async () => {
	const years = await Project.byYear();
	return {
		years: years.map(year => ({
			...year,
			category: Project.yearToCategory(year.number)
		}))
	}
}
