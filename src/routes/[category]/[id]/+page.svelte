<script>
  import { base } from '$app/paths';
  
  let { data } = $props();
  const { photo, category } = data;
  
  // Format category name for display
  const categoryDisplay = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
</script>

<svelte:head>
  <title>{photo.title} | Nightcaster.uk</title>
  <meta name="description" content={photo.description || `Photography from ${categoryDisplay} collection.`} />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12 md:py-24">
  <!-- Breadcrumbs / Back button -->
  <nav class="mb-8">
    <a href="{base}/{category}" class="inline-flex items-center text-gray-400 hover:text-indigo-400 transition-colors group">
      <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Back to {categoryDisplay}
    </a>
  </nav>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <!-- Image Section -->
    <div class="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-gray-950 border border-white/5 shadow-2xl">
      <img 
        src="{base}/images/{photo.filename}" 
        alt={photo.title} 
        class="w-full h-auto object-contain max-h-[80vh] mx-auto"
      />
      
      <!-- Subtle highlight on hover -->
      <div class="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>

    <!-- Info Section -->
    <div class="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
      <div>
        <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
          {photo.title}
        </h1>
        <div class="h-1.5 w-20 bg-indigo-600 rounded-full mb-6"></div>
      </div>

      {#if photo.description}
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          {photo.description}
        </p>
      {/if}

      <div class="space-y-6 pt-4">
        {#if photo.location}
          <div class="flex items-center text-gray-400">
            <svg class="w-6 h-6 mr-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <span class="block text-xs uppercase tracking-widest text-gray-500 mb-1">Location</span>
              <span class="text-white font-medium">{photo.location}</span>
            </div>
          </div>
        {/if}

        {#if photo.date}
          <div class="flex items-center text-gray-400">
            <svg class="w-6 h-6 mr-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <span class="block text-xs uppercase tracking-widest text-gray-500 mb-1">Captured</span>
              <span class="text-white font-medium">{photo.date}</span>
            </div>
          </div>
        {/if}

        <div class="flex items-center text-gray-400">
          <svg class="w-6 h-6 mr-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <span class="block text-xs uppercase tracking-widest text-gray-500 mb-1">Category</span>
            <span class="text-white font-medium">{categoryDisplay}</span>
          </div>
        </div>
      </div>

      <div class="pt-10">
        <button class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all duration-300">
          Enquire About This Print
        </button>
      </div>
    </div>
  </div>
</div>
