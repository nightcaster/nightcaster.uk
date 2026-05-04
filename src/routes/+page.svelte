<svelte:head>
  <title
    >Nightcaster Photography | Light Painting, Nightscapes & Landscapes</title
  >
  <meta
    name="description"
    content="Exploring the intersection of light and shadow through long exposure, nightscapes, and light painting photography by Dan Nightingale."
  />
  <meta
    property="og:title"
    content="Nightcaster Photography | Light Painting, Nightscapes & Landscapes"
  />
  <meta
    property="og:description"
    content="Exploring the intersection of light and shadow through long exposure, nightscapes, and light painting photography by Dan Nightingale."
  />
  <meta property="og:type" content="website" />
</svelte:head>

<section
  class="relative h-[80vh] flex items-center justify-center overflow-hidden"
>
  <div
    class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"
  ></div>

  <!-- Background Pattern/Image -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-sky-500/10 to-transparent"
  ></div>

  <div class="relative z-20 text-center px-4">
    <h1 class="text-5xl font-bold tracking-tighter text-white mb-6 uppercase">
      Exploring the <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 inline-block pr-1"
        >Darkness</span
      >
    </h1>
    <p
      class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
    >
      Exploring the intersection of light and shadow through long exposure,
      nightscapes, and light painting.
    </p>
  </div>
</section>

<section class="max-w-7xl mx-auto px-4 py-24">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <a
      href="/light-painting"
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/5"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
      ></div>
      <div class="absolute bottom-8 left-8 z-20">
        <h2 class="text-3xl font-bold text-white mb-2">Light Painting</h2>
        <p
          class="text-gray-400 text-sm group-hover:text-sky-400 transition-colors"
        >
          View Gallery &rarr;
        </p>
      </div>
    </a>
    <a
      href="/nightscapes"
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/5"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
      ></div>
      <div class="absolute bottom-8 left-8 z-20">
        <h2 class="text-3xl font-bold text-white mb-2">Nightscapes</h2>
        <p
          class="text-gray-400 text-sm group-hover:text-sky-400 transition-colors"
        >
          View Gallery &rarr;
        </p>
      </div>
    </a>
    <a
      href="/landscapes"
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/5"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"
      ></div>
      <div class="absolute bottom-8 left-8 z-20">
        <h2 class="text-3xl font-bold text-white mb-2">Landscapes</h2>
        <p
          class="text-gray-400 text-sm group-hover:text-sky-400 transition-colors"
        >
          View Gallery &rarr;
        </p>
      </div>
    </a>
  </div>
</section>
