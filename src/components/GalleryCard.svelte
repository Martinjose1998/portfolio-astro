<li class="link-card">
        <img width="400" height="400" src="https://martinjose.me/images/coffee.jpg" alt="">
        <div class="content">
            <p> My photo gallery (coming soon) </p>
        </div>
</li>

<style>
    .content {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }
    li.link-card {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        background-color: #23262d;
        backdrop-filter: blur(6px);
        border-radius: 7px;
        overflow: hidden;
        position: relative;
        list-style-type: none;
        width: 100%;
        cursor: pointer;
    }
    p {
        display: block;
        font-size: 16px;
        margin: .5rem 0;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
        filter: brightness(60%);
        transition: filter .5s ease;
    }
    li.link-card:hover img {
        filter: brightness(85%);
    }
</style>