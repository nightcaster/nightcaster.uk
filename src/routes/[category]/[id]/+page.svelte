<script>
  import { base } from "$app/paths";

  let { data } = $props();

  let isLoaded = $state(false);
  let isMissing = $state(false);

  const photo = $derived(data.photo);
  const category = $derived(data.category);
  const orientation = $derived(data.orientation);
  const width = $derived(data.width);
  const height = $derived(data.height);

  // Format category name for display
  const categoryDisplay = $derived(
    category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  );

  const getOptimizedUrl = (filename, type) => {
    const baseName = filename.split(".").slice(0, -1).join(".");
    return `${base}/optimized/${baseName}-${type}.webp`;
  };

  $effect(() => {
    // Reset state when navigating to a new photo
    if (photo.id) {
      isLoaded = false;
      isMissing = false;
    }
  });
</script>

<svelte:head>
  <title>{photo.title} | Nightcaster.uk</title>
  <meta
    name="description"
    content={photo.meta_description ||
      photo.description ||
      `Photography from ${categoryDisplay} collection.`}
  />
  <meta property="og:title" content="{photo.title} | Nightcaster.uk" />
  <meta
    property="og:description"
    content={photo.meta_description ||
      photo.description ||
      `Photography from ${categoryDisplay} collection.`}
  />
  <meta
    property="og:image"
    content={getOptimizedUrl(photo.filename, "preview")}
  />
  <meta property="og:type" content="article" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-6 md:py-8">
  <div
    class={orientation === "portrait"
      ? "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      : "flex flex-col gap-12"}
  >
    <!-- Image Section -->
    <div
      class={orientation === "portrait"
        ? "lg:col-span-8 group relative overflow-hidden bg-gray-950 border-8 border-white/5 shadow-2xl"
        : "w-full group relative overflow-hidden bg-gray-950 border-8 border-white/5 shadow-2xl"}
      style="aspect-ratio: {width ||
        (orientation === 'portrait' ? 2 / 3 : 3 / 2)} / {height || 1};"
    >
      {#if isMissing}
        <div
          class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 border-2 border-dashed border-gray-800 rounded-lg"
        >
          <svg
            class="w-20 h-20 text-gray-700 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p class="text-gray-500 font-medium">Image Missing</p>
          <code
            class="mt-2 px-3 py-1 bg-black/50 text-sky-500 text-xs rounded border border-white/5"
            >static/images/{photo.filename}</code
          >
        </div>
      {:else}
        {#if !isLoaded}
          <div
            class="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center"
          >
            <svg
              class="w-12 h-12 text-white/10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        {/if}

        <img
          src={getOptimizedUrl(photo.filename, "preview")}
          srcset="{getOptimizedUrl(
            photo.filename,
            'preview',
          )} 1200w, {getOptimizedUrl(photo.filename, 'large')} 2000w"
          sizes={orientation === "portrait"
            ? "(max-width: 1024px) 100vw, 800px"
            : "100vw"}
          alt={photo.title}
          class="w-full h-full object-cover transition-opacity duration-700 {isLoaded
            ? 'opacity-100'
            : 'opacity-0'}"
          onload={() => (isLoaded = true)}
          onerror={() => (isMissing = true)}
        />
      {/if}
    </div>

    <!-- Info Section -->
    <div
      class={orientation === "portrait"
        ? "lg:col-span-4 space-y-8 lg:sticky lg:top-32"
        : "w-full max-w-4xl space-y-8"}
    >
      <div>
        <h1 class="text-4xl tracking-tighter text-white mb-4">
          {photo.title}
        </h1>
        <div class="h-1.5 w-20 bg-sky-600 rounded-full mb-6"></div>
      </div>

      {#if photo.description}
        <p class="text-lg text-gray-300 leading-relaxed font-light">
          {photo.description}
        </p>
      {/if}

      <div class="space-y-6 pt-4">
        <div class="flex items-center text-gray-400">
          <div>
            <span
              class="block text-xs uppercase tracking-widest text-gray-500 mb-1"
              >Category</span
            >
            <a 
              href="{base}/{category}" 
              class="text-white font-medium hover:text-sky-400 transition-colors duration-300"
            >
              {categoryDisplay}
            </a>
          </div>
        </div>
      </div>

      {#if photo.exif && Object.keys(photo.exif).length > 0}
        <div class="pt-8 border-t border-white/10">
          <h3 class="text-sm uppercase tracking-widest text-gray-500 mb-6">
            Technical Details
          </h3>
          <div class="grid grid-cols-2 gap-y-6 gap-x-4">
            {#if photo.exif.shutter_speed}
              <div>
                <span class="block text-xs text-gray-500 mb-1">Shutter</span>
                <span class="text-white font-medium"
                  >{photo.exif.shutter_speed}</span
                >
              </div>
            {/if}
            {#if photo.exif.aperture}
              <div>
                <span class="block text-xs text-gray-500 mb-1">Aperture</span>
                <span class="text-white font-medium">{photo.exif.aperture}</span
                >
              </div>
            {/if}
            {#if photo.exif.iso}
              <div>
                <span class="block text-xs text-gray-500 mb-1">ISO</span>
                <span class="text-white font-medium">{photo.exif.iso}</span>
              </div>
            {/if}
            {#if photo.exif.focal_length}
              <div>
                <span class="block text-xs text-gray-500 mb-1"
                  >Focal Length</span
                >
                <span class="text-white font-medium"
                  >{photo.exif.focal_length}</span
                >
              </div>
            {/if}
            {#if photo.exif.lens}
              <div class="col-span-2">
                <span class="block text-xs text-gray-500 mb-1">Lens</span>
                <span class="text-white font-medium capitalize"
                  >{photo.exif.lens}</span
                >
              </div>
            {/if}
            {#if photo.exif.camera}
              <div class="col-span-2">
                <span class="block text-xs text-gray-500 mb-1">Camera</span>
                <span class="text-white font-medium capitalize"
                  >{photo.exif.camera}</span
                >
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
