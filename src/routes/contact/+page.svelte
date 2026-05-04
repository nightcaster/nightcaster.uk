<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Contact Nightcaster | Get in Touch</title>
  <meta
    name="description"
    content="Have questions about prints, collaborations, or night photography? Get in touch with Dan Nightingale at Nightcaster Photography."
  />
</svelte:head>

<div class="relative overflow-hidden min-h-[70vh] flex items-center">
  <!-- Artist Background -->
  <div
    class="absolute inset-0 z-0 pointer-events-none opacity-20 lg:opacity-40 select-none"
    aria-hidden="true"
  >
    <img
      src="{base}/optimized/the-eye-large.webp"
      alt=""
      class="w-full h-full object-cover object-center scale-105"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"
    ></div>
  </div>

  <div class="relative z-10 max-w-5xl mx-auto px-4 py-24 w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="text-left">
        <h1 class="text-4xl md:text-6xl font-bold mb-8">Get in Touch</h1>
        <p class="text-xl text-gray-300 mb-6 leading-relaxed">
          I'm always open to discussing new projects, creative opportunities, or
          any questions you might have about my photography.
        </p>
        <p class="text-gray-400 mb-8 leading-relaxed">
          The best way to reach me is through social media. You can find me on
          Instagram, where I'm most active, or via the other links below.
        </p>

        <div class="space-y-6">
          <div class="flex flex-col space-y-2">
            <span class="text-xs text-sky-500 uppercase tracking-widest font-bold">Email</span>
            <a
              href="mailto:dan@nightcaster.uk"
              class="text-2xl md:text-3xl text-white hover:text-sky-400 transition-colors duration-300 break-all"
            >
              dan@nightcaster.uk
            </a>
          </div>

          <div class="flex flex-col space-y-4">
            <span class="text-xs text-gray-500 uppercase tracking-widest font-bold">Social</span>
            <div class="flex flex-wrap gap-8 text-gray-400">
              <a
                href="https://instagram.com/nightcaster.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/nightcaster.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:block"></div>
    </div>
  </div>
</div>
