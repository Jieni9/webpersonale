<script>
	import Filter from "$lib/components/Filter.svelte";
	import Project from "$lib/components/Project.svelte";

	const { data } = $props();

	// Default to 2025 so the filter is pre-selected on first load. If 2025 is not
	// present in the available years, the reactive initializer below will fall back
	// to the first available year from `data`.
	let currentYear = $state(2025);

	// Initialize currentYear reactively once data is available. This avoids accessing
	// `data.years[0]` when `data` is undefined during SSR or early renders, which
	// causes a runtime exception (500 Internal Server Error).
	// When `data` becomes available, initialize `currentYear` (only once).
	let _initCurrent = $derived.by(() => {
		if (!data?.years?.length) return null;

		const available = data.years.map((y) => y.number);

		// If currentYear is unset, pick the first available year. If currentYear
		// is set (we default it to 2025), but that year isn't available in the
		// dataset, fall back to the first available year.
		if (currentYear === undefined || currentYear === null) {
			currentYear = available[0];
		} else if (!available.includes(currentYear)) {
			currentYear = available[0];
		}

		return null;
	});

	// Compute projects defensively: return an empty array until data and currentYear exist.
	let projects = $derived.by(() => {
		if (!data?.years?.length) return [];

		const group = data.years.find((year) => year.number == currentYear);
		return group ? group.projects : [];
	});
</script>

<section class="safe-area hero">
	<h1>
		CHROMOSTHESIA is an experimental gallery where the boundary between audio and optics dissolves. Using a precise digital deconstruction protocol, extracting specific image regions through color range and brightness thresholds, I translated the emotional weight of music into its rawest visual form.
	</h1>
</section>

<nav class="safe-area filters">
	{#each data.years as year}
		<Filter bind:group={currentYear} value={year.number} />
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
	}

	.projects {
		padding-block: var(--size-7);

		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--size-5);
	}

	/* Responsive: switch projects grid to single column on narrow screens */
	@media (max-width: 768px) {
		.projects {
			grid-template-columns: 1fr;
			gap: var(--size-4);
			padding-block: var(--size-5);
		}

		.filters {
			gap: var(--size-3);
		}
	}

	@media (max-width: 480px) {
		.hero h1 {
			font-size: var(--size-5);
		}

		.filters {
			gap: var(--size-2);
		}
	}
</style>
