<script>
  import PhotoGrid from '$lib/components/PhotoGrid.svelte';
  import photos from '$lib/data/landscapes.json';
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
  <header class="mb-12">
    <h1 class="text-4xl md:text-6xl font-bold mb-4">Landscapes</h1>
    <p class="text-gray-400 max-w-2xl">
      Documenting the raw beauty and dramatic light of the natural world.
    </p>
  </header>

  <PhotoGrid {photos} />
</div>
