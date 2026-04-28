<script>
  import PhotoCard from "$lib/components/PhotoCard.svelte";
  import PhotoGrid from "$lib/components/PhotoGrid.svelte";

  const samplePhoto = {
    id: "styleguide-sample",
    title: "Enchanted Night Forest",
    filename: "landscapes/fishermans-forgotten-friend.jpg", // Using an existing one for reference, though it might not exist in optimized
    location: "Peak District, UK",
    date: "Dec 2024",
    description:
      "A demonstration of the PhotoCard component styles and hover effects.",
    meta_description: "Sample meta description",
  };

  const samplePhotos = [
    { ...samplePhoto, id: "1", title: "Atmospheric Mist" },
    { ...samplePhoto, id: "2", title: "Stellar Canopy" },
    { ...samplePhoto, id: "3", title: "Luminous Path" },
  ];

  const colors = [
    { name: "Black", hex: "#000000", class: "bg-black" },
    { name: "Gray 950", hex: "#0a0a0a", class: "bg-gray-950" },
    { name: "Gray 900", hex: "#111827", class: "bg-gray-900" },
    { name: "Gray 800", hex: "#1f2937", class: "bg-gray-800" },
    { name: "Sky 500", hex: "#0891b2", class: "bg-sky-500" },
    { name: "Sky 600", hex: "#0369a1", class: "bg-sky-600" },
  ];
</script>

<svelte:head>
  <title>Styleguide | NIGHTCASTER.UK</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12 space-y-24">
  <!-- Header -->
  <header class="border-b border-white/10 pb-8">
    <h1 class="text-5xl font-bold tracking-tighter mb-4">Styleguide</h1>
    <p class="text-gray-400 text-lg max-w-2xl">
      A central reference for the visual language and components of
      NIGHTCASTER.UK.
    </p>
  </header>

  <!-- Typography -->
  <section id="typography" class="space-y-8">
    <h2
      class="text-2xl font-bold text-sky-500 uppercase tracking-widest border-l-4 border-sky-500 pl-4"
    >
      Typography
    </h2>
    <div class="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-white/5">
      <div class="space-y-2">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Heading 1 / 5xl Bold
        </p>
        <h1 class="text-5xl font-bold tracking-tighter">
          Photography Portfolio
        </h1>
      </div>
      <div class="space-y-2">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Heading 2 / 3xl Bold
        </p>
        <h2 class="text-3xl font-bold tracking-tight">Capturing the Dark</h2>
      </div>
      <div class="space-y-2">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Heading 3 / xl Bold
        </p>
        <h3 class="text-xl font-bold">Featured Landscapes</h3>
      </div>
      <div class="space-y-2">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Body / Base
        </p>
        <p class="text-gray-300 leading-relaxed max-w-2xl">
          Exploring the hidden beauty of the night through long exposures and
          light painting. This portfolio showcases the transition between light
          and shadow.
        </p>
      </div>
      <div class="space-y-2">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Small / text-sm
        </p>
        <p class="text-gray-500 text-sm">Exif: ISO 100 • f/8 • 30s</p>
      </div>
    </div>
  </section>

  <!-- Colors -->
  <section id="colors" class="space-y-8">
    <h2
      class="text-2xl font-bold text-sky-500 uppercase tracking-widest border-l-4 border-sky-500 pl-4"
    >
      Colors
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {#each colors as color}
        <div class="group">
          <div
            class="h-24 rounded-xl border border-white/10 mb-3 {color.class} transition-transform group-hover:scale-105"
          ></div>
          <p class="text-sm font-bold">{color.name}</p>
          <p class="text-xs text-gray-500 font-mono">{color.hex}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Buttons & Interactive -->
  <section id="interactive" class="space-y-8">
    <h2
      class="text-2xl font-bold text-sky-500 uppercase tracking-widest border-l-4 border-sky-500 pl-4"
    >
      Interactive
    </h2>
    <div
      class="flex flex-wrap gap-6 p-8 bg-gray-900/50 rounded-2xl border border-white/5"
    >
      <div class="space-y-4">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Primary Button
        </p>
        <button
          class="px-6 py-3 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-500 transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
        >
          Explore Gallery
        </button>
      </div>
      <div class="space-y-4">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Secondary / Ghost
        </p>
        <button
          class="px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
        >
          Learn More
        </button>
      </div>
      <div class="space-y-4">
        <p class="text-xs text-gray-500 uppercase tracking-widest font-mono">
          Glass Container
        </p>
        <div class="glass p-6 rounded-xl text-sm max-w-xs">
          This container uses the .glass class for a frosted blur effect.
        </div>
      </div>
    </div>
  </section>

  <!-- Components -->
  <section id="components" class="space-y-12">
    <h2
      class="text-2xl font-bold text-sky-500 uppercase tracking-widest border-l-4 border-sky-500 pl-4"
    >
      Components
    </h2>

    <div class="space-y-8">
      <h3 class="text-xl font-bold">PhotoCard</h3>
      <div class="max-w-md">
        <PhotoCard photo={samplePhoto} category="landscapes" />
      </div>
    </div>

    <div class="space-y-8">
      <h3 class="text-xl font-bold">PhotoGrid</h3>
      <PhotoGrid photos={samplePhotos} category="landscapes" />
    </div>
  </section>

  <!-- Grid Layouts -->
  <section id="layouts" class="space-y-8 pb-20">
    <h2
      class="text-2xl font-bold text-sky-500 uppercase tracking-widest border-l-4 border-sky-500 pl-4"
    >
      Grid Layouts
    </h2>
    <div class="grid grid-cols-12 gap-4 h-48">
      <div
        class="col-span-12 md:col-span-8 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-8
      </div>
      <div
        class="col-span-12 md:col-span-4 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-4
      </div>
      <div
        class="col-span-6 md:col-span-3 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-3
      </div>
      <div
        class="col-span-6 md:col-span-3 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-3
      </div>
      <div
        class="col-span-6 md:col-span-3 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-3
      </div>
      <div
        class="col-span-6 md:col-span-3 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-xs font-mono"
      >
        col-span-3
      </div>
    </div>
  </section>
</div>
