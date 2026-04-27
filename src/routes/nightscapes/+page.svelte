<script>
  import PhotoGrid from '$lib/components/PhotoGrid.svelte';
  import photos from '$lib/data/nightscapes.json';
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <header class="mb-12">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Nightscapes</h1>
    <p class="text-gray-400 max-w-2xl">
      Capturing the celestial beauty of the night sky and its interaction with the landscape.
    </p>
  </header>

  <PhotoGrid {photos} />
</div>
