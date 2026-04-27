<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link class="brand" title="CHROMESTHESIA" ref="/" />

	<nav>
		<Link class="nav-link" title="RESEARCH" ref="/" />
		<Link class="nav-link" title="ABOUT" ref="/" />
	</nav>
</header>

<style>
	header {
		padding-block: var(--size-6);

		display: flex;
		gap: var(--size-8);
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap; /* allow logo/nav to wrap on small screens */
	}

	nav {
		display: flex;
		gap: var(--size-6);
		align-items: center;
	}

	/* Responsive header: stack brand above nav on small screens */
	@media (max-width: 480px) {
		header {
			align-items: flex-start;
		}

		:global(.brand) {
			width: 100%;
			font-size: var(--size-6);
		}

		nav {
			width: 100%;
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-2);
		}
	}

	/* Typography variants for header links */
	:global(.brand) {
		font-family: "Helvetica", var(--font-primary);
		font-weight: 300; /* Light */
		letter-spacing: -0.01em;
		font-size: 2rem;
	}

	:global(.nav-link) {
		font-family: var(--font-primary);
		font-weight: 300; /* Light */
		font-size: 1.5rem;
	}
</style>
