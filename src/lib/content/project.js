export default class Project {
	/**
	 * @param {number} year
	 * @returns {string}
	 */
	static yearToCategory(year) {
		/** @type {Record<number, string>} */
		const mapping = {
			2023: 'BLUE',
			2024: 'YELLOW',
			2025: 'RED'
		};
		return mapping[year] ?? String(year);
	}

	static async all() {
		const projects = await Promise.all(
			Object.entries(import.meta.glob("./projects/**/*.md")).map(async ([path, resolver]) => {
				/** @type {any} */
				const module = await resolver();
				const filename = path.split("/").pop();
				const slug = filename?.slice(0, -3) ?? "";
				return { slug, data: module?.metadata }
			})
		)

		return projects.sort((a, b) => {
			const yearA = a.data.year;
			const yearB = b.data.year;

			if (yearA > yearB) return -1;
			if (yearA < yearB) return 1;

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
		/** @type {Array<{ number: number; projects: any[] }>} */
		const result = [];

		for (const project of projects) {
			const year = project.data.year;
			const found = result.find(g => g.number === year);
			if (found) {
				found.projects.push(project);
			} else {
				result.push({ number: year, projects: [project] });
			}
		}

		return result;
	}
}
