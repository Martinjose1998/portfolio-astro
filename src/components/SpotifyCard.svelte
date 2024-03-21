<li class="link-card">
    <div class="wrapper">
        <h2> What I listen to 🎧 </h2>
        <ul class="gallery">
            <li>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/7Ln80lUS6He07XvHI8qqHH?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            </li>
            <li>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3AA28KZvwAUcZuOKwyblJQ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            </li>
            <li>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6zVFRTB0Y1whWyH7ZNmywf?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            </li>
            <li>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3ZGr7nQBXDU2WhyXgRVbt0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
            </li>
        </ul>
</li>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 20px;
        display: flex;
        flex-direction: row;
        margin-top: 14px;
        overflow-x: auto;
        flex-wrap: nowrap;
    }
    ul li {
        display: block;
        width: 100%;
    }
    ul li iframe {
        width: 100%;
        display: block;
    }
    ul li span {
        font-size: 16px;
    }
    .link-card {
		list-style: none;
		display: flex;
		padding: 1px;
		max-width: 100%;
		width: 100%;
		background-color: #23262ddb;
		background-image: none;
		background-size: 400%;
		border-radius: 7px;
		background-position: 100%;
		transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
	}
	.link-card > .wrapper {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: calc(1.5rem - 1px);
		border-radius: 8px;
		color: white;
		background-color: transparent;
        backdrop-filter: blur(7px);
		opacity: 1;
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
	}
    .gallery  {
    --d: 25s; /* duration */
    display: grid;
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg,#0000,#000 10% 90%,#0000);
    }
    .gallery:hover > li {
        animation-play-state: paused;
    }
    .gallery > li {
        padding: 0 5px;
        grid-area: 1/1;
        aspect-ratio: auto;
        object-fit: cover;
        animation: r var(--d) linear infinite;
    }
    .gallery > li:nth-child(2) {animation-delay: calc(1*var(--d)/-4)}
    .gallery > li:nth-child(3) {animation-delay: calc(2*var(--d)/-4)}
    .gallery > li:nth-child(4) {animation-delay: calc(3*var(--d)/-4)}

    @keyframes r {
        75%    {transform: translate(-300%)}
        75.01% {transform: translate( 100%)}
    }
</style>