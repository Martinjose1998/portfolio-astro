<script>
    export let title;
    export let image;
    export let body;
    export let link;
</script>

<li class="link-card">
    <a href={link} target="_blank" class="wrapper">
        <img src={image} width="400" height="400" alt="">
        <span class="label"> Highlight </span>
        <div class="content">
            <h2> {title} </h2>
            <p> {body} </p>
        </div>
    </a>
</li>

<style>
    .link-card {
		list-style: none;
		display: flex;
		padding: 1px;
		max-width: 100%;
		width: 100%;
		background-color: #23262d;
		background-image: none;
		background-size: 400%;
		border-radius: 7px;
		background-position: 100%;
		transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        background-color: transparent;
        overflow: hidden;
	}
	.link-card > .wrapper {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		border-radius: 8px;
		color: white;
		background-color: #23262d;
        backdrop-filter: blur(3px);
		opacity: 1;
        position: relative;
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
        text-shadow: 1px 1px 10px rgba(0,0,0,0.6);
		transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	}
    .content {
        position: absolute;
        bottom: 25px;
        left: 0px;
        padding: 0 22px;
    }
    .label {
        position: absolute;
        top: 12px;
        left: 12px;
        background-color: var(--accent-light);
        border-radius: 25px;
        font-size: 12px;
        padding: 2px 6px;
    }
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
        font-size: 15px;
        text-shadow: 1px 1px 10px rgba(0,0,0,0.6);
	}
    img {
        width: 100%;
        object-fit: cover;
        object-position: top;
        filter: brightness(50%);
        transition: all .5s ease;
        height: 100%;
        max-height: 300px;
        transform: scale(1.05);
    }
    .link-card:hover img {
        transform: scale(1.1);
        filter: brightness(80%);
    }
</style>