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
        gap: var(--size-3); /* Spazio tra immagine e testi */
        text-decoration: none;
        color: inherit;
        width: 100%;

        &:hover {
            .veil {
                opacity: 1;
            }

            .arrow {
                transform: translate(0, 0);
            }
        }
    }

    .thumbnail {
        position: relative;
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: var(--size-6);
        background-color: var(--color-surface-2); /* Fallback colore */
        
        /* Assicura che l'immagine non si deformi */
        min-height: 0;

        .veil {
            position: absolute;
            inset: 0;
            background-color: var(--color-link);
            mix-blend-mode: soft-light;
            transition: opacity 0.75s var(--ease-out-quart);
            opacity: 0;
            z-index: 1;
        }

        img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.75s var(--ease-out-quart);
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Allineamento icone in alto */
        gap: var(--size-4);
        overflow: hidden; /* Taglia l'uscita della freccia */
    }

    hgroup {
        display: flex;
        flex-direction: column;
        gap: 0; /* Spazio gestito dai font */
        flex: 1;

        h3 {
            margin: 0;
            font-size: var(--size-5);
            font-weight: 500;
            line-height: 1.2;
        }

        span {
            color: var(--color-ink-secondary);
            font-size: var(--size-4);
            font-weight: 300;
            margin-top: var(--size-1);
        }
    }

    .arrow {
        transition: transform 0.6s var(--ease-out-quart);
        transform: translate(-100%, 100%); /* Parte da fuori (basso-sinistra) */
        flex-shrink: 0;
        padding-top: 2px; /* Allineamento ottico con il testo */
    }

    /* --- RESPONSIVE --- */

    @media (max-width: 768px) {
        h3 {
            font-size: var(--size-4);
        }

        span {
            font-size: var(--size-3);
        }
        
        .thumbnail {
            border-radius: var(--size-5);
        }
    }

    @media (max-width: 480px) {
        article {
            gap: var(--size-2);
        }

        header {
            gap: var(--size-2);
        }

        h3 {
            font-size: 1.1rem; /* Dimensione fissa più leggibile su mobile */
        }

        span {
            font-size: 1rem;
            opacity: 0.8;
        }
    }
</style>