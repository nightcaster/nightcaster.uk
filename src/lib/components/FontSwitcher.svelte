<script>
	let fonts = [
		{ name: 'Default (Raveo)', value: "'Raveo', system-ui, sans-serif" },
		{ name: 'Inter', value: "'Inter', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' },
		{ name: 'Outfit', value: "'Outfit', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' },
		{ name: 'Lexend', value: "'Lexend', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap' },
		{ name: 'DM Sans', value: "'DM Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap' },
		{ name: 'Manrope', value: "'Manrope', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap' },
		{ name: 'Montserrat', value: "'Montserrat', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap' },
		{ name: 'Bricolage Grotesque', value: "'Bricolage Grotesque', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap' },
		{ name: 'Plus Jakarta Sans', value: "'Plus Jakarta Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' }
	];

	let currentFont = $state(fonts[6]);
	let isOpen = $state(false);

	$effect(() => {
		document.documentElement.style.setProperty('--font-family', currentFont.value);
	});
</script>

<svelte:head>
	{#if currentFont.url}
		<link rel="stylesheet" href={currentFont.url} />
	{/if}
</svelte:head>

<div class="fixed bottom-6 left-6 z-[9999]">
	<div class="relative">
		{#if isOpen}
			<div
				class="absolute bottom-full mb-4 left-0 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
			>
				<div class="p-3 border-b border-white/10 bg-white/5">
					<span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Font</span>
				</div>
				<div class="py-2">
					{#each fonts as font}
						<button
							onclick={() => {
								currentFont = font;
								isOpen = false;
							}}
							class="w-full text-left px-4 py-3 text-sm transition-colors hover:bg-white/10 {currentFont.name ===
							font.name
								? 'text-sky-400 bg-sky-500/10'
								: 'text-gray-300'}"
							style="font-family: {font.value}"
						>
							{font.name}
						</button>
					{/each}
				</div>
			</div>
		{/if}

		<button
			onclick={() => (isOpen = !isOpen)}
			class="flex items-center space-x-3 px-4 py-3 bg-gray-900 border border-white/10 rounded-full shadow-lg hover:border-sky-500/50 transition-all group"
		>
			<div
				class="w-8 h-8 flex items-center justify-center bg-sky-500/20 rounded-full text-sky-400 group-hover:scale-110 transition-transform"
			>
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					/>
				</svg>
			</div>
			<div class="text-left pr-2">
				<div class="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
					Current Font
				</div>
				<div class="text-sm font-medium text-white truncate max-w-[120px]">{currentFont.name}</div>
			</div>
		</button>
	</div>
</div>
