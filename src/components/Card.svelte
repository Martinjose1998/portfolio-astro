<li>
    <img class="bg-img" src="https://martinjose.me/images/desktop.jpeg" width="1200" height="800" loading="eager" alt="Hero Banner Image">
    <div class="content">
        <img class="me-img" src="https://martinjose.me/images/martinjose.jpg" width="150" height="150" alt="Image of me">
        <div class="introduction">
            <span>Hi! I'm Martin Jose 👋🏻</span><br>
            <p>
                I'm a software developer specialized in crafting Shopify and Shopify+ storefronts with seamless user experience.
            </p>
        </div>
    </div>
</li>

<style>
    img.bg-img {
        width: 100%;
        height: 100%;
        z-index: 1;
        filter: brightness(50%);
        display: none;
    }
    img.me-img {
        border-radius: 50%;
        border: solid 1px var(--accent-light);
        max-width: 90px;
        object-fit: cover;
        object-position: 0 30%;
        max-height: 90px;
        height: 100%;
        width: 100%;
        aspect-ratio: 1/1;
    }
    .content {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
    }
    li {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        background-color: #23262ddb;
        backdrop-filter: blur(6px);
        border-radius: 7px;
        overflow: hidden;
        position: relative;
        list-style-type: none;
        width: 100%;
        padding: 1rem 0;
        opacity: .9;
    }
    .introduction {
        line-height: 1.25;
    }
    span {
        left: 0;
        top: 0;
    }
    p {
        display: block;
        font-size: 16px;
        margin: .5rem 0;
    }
</style>