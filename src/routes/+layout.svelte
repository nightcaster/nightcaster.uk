<script>
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	
	<main class="flex-grow">
		{@render children()}
	</main>

	<footer class="bg-black border-t border-white/5 py-12 mt-20">
		<div class="max-w-7xl mx-auto px-4 text-center">
			<p class="text-gray-500 text-sm">
				© {new Date().getFullYear()} All images © Dan Nightingale. Unauthorised distribution or use of any images is strictly prohibited.
			</p>
		</div>
	</footer>
</div>
