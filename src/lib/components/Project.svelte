<script>
	import Icon from "./Icon.svelte";

	const { data } = $props();
</script>

{#if data.link}
	<a href={data.link} target="_blank">
		{@render card(data)}
	</a>
{:else}
	{@render card(data)}
{/if}

{#snippet card(project)}
	<article>
		<div class="thumbnail">
			{#if project.link}
				<div class="veil"></div>
			{/if}
			<img src={project.thumbnail} alt={project.title} />
		</div>

		<header>
			<hgroup>
				<h3>{project.title}</h3>
				{#if project.subtitle}
					<span>{project.subtitle}</span>
				{/if}
			</hgroup>

			{#if project.link}
				<div class="arrow">
					<Icon name="arrow-up-right" />
				</div>
			{/if}
		</header>
	</article>
{/snippet}

<style>
	article {
		display: flex;
        flex-direction: column;
        gap: var(--size-2);

		&:hover {
			.veil {
				opacity: 1;
			}

			.arrow {
				transform: translateY(0);
			}
		}
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 1/1;
		overflow: hidden;
		border-radius: var(--size-6);
		min-height: 0;

		.veil {
			position: absolute;
			inset: 0;
			background-color: var(--color-link);
			mix-blend-mode: soft-light;
			transition: opacity 0.75s var(--ease-out-quart);
			opacity: 0;
		}

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--size-4);
	}

	hgroup {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
		flex: 1;

		h3 {
			margin: 0;
		}

		span {
			color: var(--color-ink-secondary);
			font-size: var(--size-4);
		}
	}

	.arrow {
		transition: transform 0.75s var(--ease-out-quart);
		transform: translateY(100%);
		flex-shrink: 0;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		hgroup {
			gap: var(--size-2);
		}

		h3 {
			font-size: var(--size-5);
		}

		span {
			font-size: var(--size-3);
		}
	}

	@media (max-width: 480px) {
		article {
			gap: var(--size-1);
		}

		header {
			gap: var(--size-3);
		}

		h3 {
			font-size: var(--size-4);
		}

		span {
			font-size: var(--size-2);
		}

		.thumbnail {
			border-radius: var(--size-3);
		}
	}
</style>
