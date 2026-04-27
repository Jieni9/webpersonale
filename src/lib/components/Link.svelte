<script>
	import Icon from "$lib/components/Icon.svelte";

	const {
		ref,
		title = null,
		children = null,
		leadingIcon = null,
		trailingIcon = null,
		class: className = "",
	} = $props();

	// other attributes (e.g. id, target, rel) are available in $$restProps automatically
</script>

<a href={ref} class={className}>
	{#if children}
		{@render children()}
	{:else}
		{#if leadingIcon}
			<Icon name={leadingIcon} />
		{/if}

		{title}

		{#if trailingIcon}
			<Icon name={trailingIcon} />
		{/if}
	{/if}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: var(--size-1);

		transition: color 0.75s var(--ease-out-quart);

		&:hover {
			color: var(--color-link);
		}
	}
</style>
