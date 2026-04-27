<script>
  import PhotoGrid from '$lib/components/PhotoGrid.svelte';
  import photos from '$lib/data/light-painting.json';
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <header class="mb-12">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Light Painting</h1>
    <p class="text-gray-400 max-w-2xl">
      Manipulating light in long exposure to create ethereal forms and vibrant patterns.
    </p>
  </header>

  <PhotoGrid {photos} />
</div>
