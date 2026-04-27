<script>
  import { base } from '$app/paths';
  let { photo, category } = $props();
</script>

<div class="group relative overflow-hidden rounded-xl bg-gray-900 border border-white/5 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]">
  <div class="aspect-square overflow-hidden bg-gray-950">
    <img 
      src="{base}/images/{photo.filename}" 
      alt={photo.title} 
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    /> 
  </div>
  
  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
    <h3 class="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      {photo.title}
    </h3>
    {#if photo.location || photo.date}
      <p class="text-gray-300 text-sm mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
        {photo.location}{photo.location && photo.date ? ' • ' : ''}{photo.date}
      </p>
    {/if}
    <div class="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
      <a 
        href="{base}/{category}/{photo.id}" 
        class="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-500 transition-colors"
      >
        View Details
      </a>
    </div>
  </div>
</div>
