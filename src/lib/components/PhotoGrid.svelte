<script>
  import PhotoCard from './PhotoCard.svelte';
  
  let { photos = [] } = $props();
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {#each photos as photo (photo.id)}
    <PhotoCard {photo} />
  {/each}
</div>
