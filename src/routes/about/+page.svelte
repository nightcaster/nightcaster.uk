<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>About Nightcaster | Photography by Dan Nightingale</title>
  <meta
    name="description"
    content="Learn about Dan Nightingale, the artist behind Nightcaster Photography. Specializing in long exposure, nightscapes, and light painting in the UK."
  />
</svelte:head>

<div class="relative overflow-hidden">
  <!-- Artist Portrait Background (Subtle) -->
  <div
    class="absolute inset-0 z-0 pointer-events-none opacity-25 lg:opacity-45 select-none"
    aria-hidden="true"
  >
    <img
      src="{base}/optimized/the-thinker-large.webp"
      alt=""
      class="w-full h-full object-cover scale-105"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"
    ></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="hidden md:block"></div>

      <div>
        <h1 class="text-3xl font-bold mb-6">About Me</h1>
        <p class="text-gray-300 mb-4 leading-relaxed">
          I am a website developer with a passion for photography, specifically
          light painting, nightscapes and more recently astrophotography.
        </p>
        <p class="text-gray-300 mb-4 leading-relaxed">
          To me, long-exposure night photography is a way to see the world in
          quite literally a different light. I'm always amazed when the shutter
          closes and I see the preview on the back of the camera just how much
          light there is in such an apparently dark place. Sadly not every
          photograph looks as good under the scrutiny of a screen in a lit room,
          but that feeling in the moment always makes it worth while.
        </p>
        <hr class="h-px my-8 opacity-20" />
        <p class="text-gray-300 mb-4 leading-relaxed">
          <a href="/light-painting">Light painting</a>
          involves the application of light to select areas of a scene whilst taking
          a long-exposure photograph. This affords incredible control over the final
          image, and no two light painted images are the same, even if taken straight
          after one another.
        </p>
        <p class="text-gray-300 mb-4 leading-relaxed">
          I regularly experiment with different ways of painting with light and
          build custom hardware to experiment with such as programmable LED
          strips and custom coloured torches. I find that the tools I use most
          often however are a couple of powerful LED flashlights and a flashgun.
        </p>
        <hr class="h-px my-8 opacity-20" />
        <p class="text-gray-300 mb-4 leading-relaxed">
          <a href="/nightscapes">Nightscapes</a>
          to me are not as simple as "landscape photographs taken at night", they
          can be any subject with any field of view and include natural and or artificial
          light, but they have not had any additional light painted into them by
          myself. They're basically a representation of what we could see if our
          eyes could gather enough light.
        </p>
        <p class="text-gray-300 mb-4 leading-relaxed">
          I'm fascinated by how much light there is that we cannot see.
        </p>
      </div>
    </div>
  </div>
</div>
