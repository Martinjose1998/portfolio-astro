<li class="link-card">
    <div class="wrapper">
        <h2>
            My Hobbies
        </h2>
        <ul>
            <li>
                <img src="https://cdn-icons-png.flaticon.com/512/10794/10794777.png" width="40" height="40" alt="">
                <span> Playing guitar since I was 9 </span>
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
        flex-direction: column;
        margin-top: 14px;
    }
    ul li {
        display: flex;
        gap: 8px;
        align-items: center;
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
</style>