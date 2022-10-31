<script>
	import { Router, Route } from "svelte-navigator";

	import Nav from "./components/Nav.svelte";

	import Home from "./home/Home.svelte";

	import Footer from "./components/Footer.svelte";

	import Project from "./project/Project.svelte";
	import About from "./about/About.svelte";
</script>

<main>
	<!-- ROUTER Component -->  
	<Router>
		<!-- NAV Component -->
		<Nav />

		<span>Site en développement</span>

			<Route path="/">
				<Home />
			</Route>
			<Route path="/projets">
				<Project />
			</Route>
			<Route path="/a-propos">
				<About />
			</Route>

		<Footer />
	</Router>
</main>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: $font-family;
	}

	:global(body) {
		background-color: $background-color;
		user-select: none;  
	}

	:global(section) {
		max-width: 600px;
		margin-left: auto;
    	margin-right: auto;
	}

	span {
		position: absolute;
		top: 60px;
		right: 0px;
		writing-mode: tb-rl;
		transform: rotate(-180deg);
		background-color: $blue;
		padding: 20px 5px;
		border-radius: 0 5px 5px  0;
		color: white;

		line-height: 150%;
		text-align: justify;
		white-space: nowrap;
		font-size: 10px;
	}
</style>