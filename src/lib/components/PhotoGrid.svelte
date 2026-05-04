<script>
  import { dev } from "$app/environment";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import PhotoCard from "./PhotoCard.svelte";

  let { photos = [], category = "" } = $props();

  // Reorderable items state
  let items = $state([...photos]);
  let isSaving = $state(false);
  let saveStatus = $state(""); // 'success', 'error', ''

  // Sync items if photos prop changes (e.g., initial load)
  $effect(() => {
    items = [...photos];
  });

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;
  }

  async function saveOrder() {
    if (isSaving) return;
    isSaving = true;
    saveStatus = "";

    try {
      const response = await fetch("/api/save-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, photos: items }),
      });

      if (!response.ok) throw new Error("Failed to save");

      saveStatus = "success";
      setTimeout(() => (saveStatus = ""), 3000);
    } catch (err) {
      console.error(err);
      saveStatus = "error";
    } finally {
      isSaving = false;
    }
  }
</script>

{#if dev}
  <div
    class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500"
  >
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
      <span class="text-xs font-bold uppercase tracking-widest text-sky-500"
        >Dev Mode</span
      >
    </div>

    <div class="w-px h-4 bg-white/10"></div>

    <button
      onclick={saveOrder}
      disabled={isSaving}
      class="flex items-center gap-2 text-sm font-medium text-white hover:text-sky-400 transition-colors disabled:opacity-50"
    >
      {#if isSaving}
        <span class="animate-spin text-lg">⏳</span>
        Saving...
      {:else if saveStatus === "success"}
        <span class="text-green-500">✅ Saved!</span>
      {:else if saveStatus === "error"}
        <span class="text-red-500">❌ Error</span>
      {:else}
        <span>Save New Order</span>
      {/if}
    </button>
  </div>
{/if}

<div
  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
  use:dndzone={{ items, flipDurationMs, dragDisabled: !dev }}
  onconsider={handleDndConsider}
  onfinalize={handleDndFinalize}
>
  {#each items as photo (photo.id)}
    <div animate:flip={{ duration: flipDurationMs }}>
      <PhotoCard {photo} {category} />
    </div>
  {/each}
</div>

<style>
  /* Ensure the drop zone has a minimum height to be usable */
  .grid {
    min-height: 200px;
  }

  /* Style for the ghost element during drag */
  :global(.dndzone-shadow) {
    opacity: 0.5;
    transform: scale(0.95);
  }
</style>
