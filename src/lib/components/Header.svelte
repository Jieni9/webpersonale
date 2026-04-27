<script>
	import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
	<Link class="brand" title="CHROMESTHESIA" ref="/" />

	<nav>
		<Link class="nav-link" title="About" ref="/" />
		<Link class="nav-link" title="@yeehjieni" ref="/" />
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
		font-family: "Open Sans Condensed", var(--font-primary);
		font-weight: 800; /* ExtraBold */
		letter-spacing: -0.01em;
		font-size: 2rem;
	}

	:global(.nav-link) {
		font-family: var(--font-primary);
		font-weight: 600; /* Semibold */
		font-size: 1.5rem;
	}
</style>
