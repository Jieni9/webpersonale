<footer class="safe-area">
    @yeehjieni
</footer>

<style>
    footer {
        padding-block: var(--size-5) var(--size-4); 
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(0.875rem, 2.5vw, 1.2rem);
        text-align: center;
    }

    @media (max-width: 768px) {
        footer {
            padding-block: var(--size-4) var(--size-3);
        }
    }

    @media (max-width: 480px) {
        footer {
            padding-block: var(--size-3) var(--size-2);
            font-size: var(--size-4);
        }
    }
</style>
