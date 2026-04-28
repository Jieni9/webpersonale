<script>
    import Link from "$lib/components/Link.svelte";
</script>

<header class="safe-area">
    <div class="blur-target">
        <Link class="brand" title="CHROMESTHESIA" ref="/" />
    </div>

    <nav>
        <span class="blur-target">
            <Link class="nav-link" title="RESEARCH" ref="/" />
        </span>
        
        <span class="blur-target">
            <Link class="nav-link" title="ABOUT" ref="/" />
        </span>
    </nav>
</header>

<style>
    header {
        padding-block: var(--size-6);
        display: flex;
        gap: var(--size-8);
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    nav {
        display: flex;
        gap: var(--size-6);
        align-items: center;
    }

    .blur-target {
        display: inline-block;
        transition: filter 0.1s ease;
    }

    .blur-target:hover {
        filter: blur(1px);
    }

    :global(.brand) {
        font-family: "Helvetica", var(--font-primary);
        font-weight: 300;
        letter-spacing: -0.01em;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
    }

    :global(.nav-link) {
        font-family: var(--font-primary);
        font-weight: 300;
        font-size: clamp(0.875rem, 2.5vw, 1.2rem);
    }

    /* Tablet */
    @media (max-width: 768px) {
        header {
            gap: var(--size-5);
            padding-block: var(--size-5);
        }

        nav {
            gap: var(--size-4);
        }
    }

    /* Mobile */
    @media (max-width: 480px) {
        header {
            align-items: center;
            gap: var(--size-2);
            padding-block: var(--size-4);
            flex-wrap: nowrap;
        }

        :global(.brand) {
            flex-shrink: 0;
        }

        div.blur-target {
            flex-shrink: 0;
        }

        nav {
            display: flex;
            gap: var(--size-2);
            margin-top: 0;
            flex-shrink: 1;
        }
    }
</style>