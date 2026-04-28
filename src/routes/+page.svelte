<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";

	const { data } = $props();

	let currentCategory = $state('BLUE');

	let _initCurrent = $derived.by(() => {
		if (!data?.years?.length) return null;

		const available = data.years.map((y) => y.category);

		if (currentCategory === undefined || currentCategory === null) {
			currentCategory = available[0];
		} else if (!available.includes(currentCategory)) {
			currentCategory = available[0];
		}

		return null;
	});


	let projects = $derived.by(() => {
		if (!data?.years?.length) return [];

		const group = data.years.find((year) => year.category === currentCategory);
		return group ? group.projects : [];
	});
</script>

<section class="safe-area hero">
	<h1>
		Chromosthesia is an experimental gallery where the boundary between audio and optics dissolves. Using a precise digital deconstruction protocol, extracting specific image regions through color range and brightness thresholds, I translated the emotional weight of music into its rawest visual form.
	</h1>
</section>

<nav class="safe-area filters">
	{#each data.years as year}
		<Filter bind:group={currentCategory} value={year.category} label={year.category} />
	{/each}
</nav>

<section class="safe-area projects">
	{#each projects as project}
		<Project data={project.data} />
	{/each}
</section>

<style>
	.hero {
		padding-block: var(--size-11);

		h1 {
			/* fluid font-size: min size, responsive vw, max token */
			font-size: clamp(1.6rem, 4.5vw, var(--size-6));
			max-width: 43ch;
		}
	}

	.filters {
		display: flex;
		align-items: center;
		gap: var(--size-5);
		flex-wrap: wrap;
	}

	.projects {
		padding-block: var(--size-7);

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-5);
	}

	/* Tablet: 2-column to 1-column transition */
	@media (max-width: 1024px) {
		.projects {
			gap: var(--size-4);
		}
	}

	/* Mobile: switch projects grid to single column */
	@media (max-width: 768px) {
		.hero {
			padding-block: var(--size-8);
		}

		.hero h1 {
			font-size: clamp(1.2rem, 5vw, var(--size-5));
		}

		.projects {
			grid-template-columns: 1fr;
			gap: var(--size-4);
			padding-block: var(--size-5);
		}

		.filters {
			gap: var(--size-3);
			padding-block: var(--size-3);
		}
	}

	/* Small mobile */
	@media (max-width: 480px) {
		.hero {
			padding-block: var(--size-6);
		}

		.hero h1 {
			font-size: var(--size-4);
		}

		.projects {
			gap: var(--size-3);
			padding-block: var(--size-4);
		}

		.filters {
			gap: var(--size-2);
			padding-block: var(--size-2);
		}
	}
</style>
