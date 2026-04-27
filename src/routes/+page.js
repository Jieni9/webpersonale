import Project from "$lib/content/project"

export const load = async () => {
	return { years: await Project.byYear() }
}
