<script>
	import Icon from "./Icon.svelte";

	const { data: project } = $props();
</script>

{#if project.link}
	<a href={project.link} target="_blank">
		{@render card(project)}
	</a>
{:else}
	{@render card(project)}
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
        max-width: 520px; 
        margin-inline: auto;
		padding: var(--size-3);

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
			width: 100%;
			height: 100%;
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
		align-items: center;
		gap: var(--size-4);

		overflow: clip;
	}

	hgroup {
		display: flex;
		align-items: center;
		gap: var(--size-2);

		span {
			color: var(--color-ink-secondary);
		}
	}

	.arrow {
		transition: transform 0.75s var(--ease-out-quart);
		transform: translateY(100%);
	}
</style>
