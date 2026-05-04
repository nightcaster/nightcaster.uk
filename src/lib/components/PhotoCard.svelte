<script>
  import { base } from "$app/paths";
  let { photo, category } = $props();
  const getOptimizedUrl = (filename, type) => {
    const baseName = filename.split(".").slice(0, -1).join(".");
    return `${base}/optimized/${baseName}-${type}.webp`;
  };
  let isLoaded = $state(false);
</script>

<a
  href="{base}/{category}/{photo.id}"
  class="group block relative overflow-hidden bg-gray-900 border-4 border-white/5 transition-all duration-500 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(8,145,178,0.2)]"
>
  <div class="aspect-square overflow-hidden bg-gray-950 relative">
    {#if !isLoaded}
      <div class="absolute inset-0 bg-gray-800 animate-pulse"></div>
    {/if}
    <img
      src={getOptimizedUrl(photo.filename, "thumbnail")}
      alt={photo.title}
      class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 {isLoaded
        ? 'opacity-100'
        : 'opacity-0'}"
      loading="lazy"
      onload={() => (isLoaded = true)}
    />
  </div>

  <div
    class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
  >
    <h3
      class="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
    >
      {photo.title}
    </h3>
    {#if photo.location || photo.date}
      <p
        class="text-gray-300 text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
      >
        {photo.location}{photo.location && photo.date ? " • " : ""}{photo.date}
      </p>
    {/if}
    <!-- <div
      class="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
    >
      <span
        class="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded-full group-hover:bg-sky-500 transition-colors inline-block"
      >
        View Details
      </span>
    </div> -->
  </div>
</a>
