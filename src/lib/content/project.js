export default class Project {
	static async all() {
		const projects = await Promise.all(
			Object.entries(import.meta.glob("./projects/**/*.md")).map(async ([path, resolver]) => {
				const { metadata: data } = await resolver()
				const slug = path.split("/").pop().slice(0, -3)
				return { slug, data }
			})
		)

		return projects.sort((a, b) => {
			const yearA = a.data.year;
			const yearB = b.data.year;

			// Primary sort: year (desc)
			if (yearA > yearB) return -1;
			if (yearA < yearB) return 1;

			// If same year, allow an explicit numeric `order` in frontmatter to
			// control placement (lower numbers come first). If `order` is missing
			// for one or both items, treat missing as Infinity so explicit orders
			// come before unspecified ones.
			const orderA = typeof a.data.order === 'number' ? a.data.order : Infinity;
			const orderB = typeof b.data.order === 'number' ? b.data.order : Infinity;

			if (orderA < orderB) return -1;
			if (orderA > orderB) return 1;

			// Fallback: alphabetical by title
			const titleA = a.data.title.toUpperCase();
			const titleB = b.data.title.toUpperCase();

			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;

			return 0;
		})
	}

	static async byYear() {
		const projects = await this.all();
		const result = [];

		for (const project of projects) {
			const year = project.data.year;
			let group = result.find(g => g.number === year);
			if (!group) {
				group = { number: year, projects: [] };
				result.push(group);
			}
			group.projects.push(project);
		}

		return result;
	}
}
