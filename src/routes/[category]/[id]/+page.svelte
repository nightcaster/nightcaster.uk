<script>
  import { base } from "$app/paths";

  let { data } = $props();
  const { photo, category, orientation, width, height } = data;

  let isLoaded = $state(false);

  // Format category name for display
  const categoryDisplay = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const getOptimizedUrl = (filename, type) => {
    const baseName = filename.split(".").slice(0, -1).join(".");
    return `${base}/optimized/${baseName}-${type}.webp`;
  };
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
  <meta property="og:image" content={getOptimizedUrl(photo.filename, 'preview')} />
  <meta property="og:type" content="article" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12 md:py-24">
  <!-- Breadcrumbs / Back button -->
  <nav class="mb-8">
    <a
      href="{base}/{category}"
      class="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors group"
    >
      <svg
        class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to {categoryDisplay}
    </a>
  </nav>

  <div
    class={orientation === "portrait"
      ? "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      : "flex flex-col gap-12"}
  >
    <!-- Image Section -->
    <div
      class={orientation === "portrait"
        ? "lg:col-span-8 group relative overflow-hidden bg-gray-950 border border-white/5 shadow-2xl"
        : "w-full group relative overflow-hidden bg-gray-950 border border-white/5 shadow-2xl"}
      style="aspect-ratio: {width} / {height};"
    >
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
      />

      <!-- Subtle highlight on hover -->
      <div
        class="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      ></div>
    </div>

    <!-- Info Section -->
    <div
      class={orientation === "portrait"
        ? "lg:col-span-4 space-y-8 lg:sticky lg:top-32"
        : "w-full max-w-4xl space-y-8"}
    >
      <div>
        <h1
          class="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4"
        >
          {photo.title}
        </h1>
        <div class="h-1.5 w-20 bg-sky-600 rounded-full mb-6"></div>
      </div>

      {#if photo.description}
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          {photo.description}
        </p>
      {/if}

      <div class="space-y-6 pt-4">
        {#if photo.location}
          <div class="flex items-center text-gray-400">
            <svg
              class="w-6 h-6 mr-4 text-sky-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <span
                class="block text-xs uppercase tracking-widest text-gray-500 mb-1"
                >Location</span
              >
              <span class="text-white font-medium">{photo.location}</span>
            </div>
          </div>
        {/if}

        {#if photo.date}
          <div class="flex items-center text-gray-400">
            <svg
              class="w-6 h-6 mr-4 text-sky-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div>
              <span
                class="block text-xs uppercase tracking-widest text-gray-500 mb-1"
                >Captured</span
              >
              <span class="text-white font-medium">{photo.date}</span>
            </div>
          </div>
        {/if}

        <div class="flex items-center text-gray-400">
          <svg
            class="w-6 h-6 mr-4 text-sky-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div>
            <span
              class="block text-xs uppercase tracking-widest text-gray-500 mb-1"
              >Category</span
            >
            <span class="text-white font-medium">{categoryDisplay}</span>
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
