<script>
    import CardSvelte from '../components/Card.svelte'
</script>

<header>
    <img class="hero-img" src="https://martinjose.me/images/desktop.jpeg" width="1200" height="800" loading="eager" alt="Hero Banner Image">
    <div class="card">
        <div class="card-inner">
            <CardSvelte />
        </div>
    </div>
</header>

<style>
    .card {
        position: absolute;
        top: 3rem;
        left: 0;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .card-inner {
        max-width: 800px;
        width: calc(100% - 2rem);
    }
    header {
        position: relative;
    }
    .hero-img {
        width: 100%;
        max-height: 800px;
        height: 100%;
        object-fit: cover;
        filter: brightness(45%);
        border-bottom: solid 2px white;
        object-position: center;
    }
    .me-img {
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 45%);
        border: solid 2px white;
        transition: transform .5s ease;
    }
</style>