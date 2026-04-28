<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Light Painting', path: '/light-painting' },
    { name: 'Nightscapes', path: '/nightscapes' },
    { name: 'Landscapes', path: '/landscapes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  let isOpen = $state(false);
</script>

<nav class="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <a href="{base}/" class="text-2xl font-bold tracking-tighter text-white hover:text-sky-400 transition-colors">
          NIGHTCASTER<span class="text-sky-500">.UK</span>
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          {#each links as link}
            <a
              href="{base}{link.path}"
              class="px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-white {page.url.pathname === (base + link.path) || (link.path !== '/' && page.url.pathname.startsWith(base + link.path)) ? 'text-white border-b-2 border-sky-500' : 'text-gray-400'}"
            >
              {link.name}
            </a>
          {/each}
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex">
        <button
          onclick={() => isOpen = !isOpen}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
        >
          <span class="sr-only">Open main menu</span>
          {#if !isOpen}
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {:else}
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div class="md:hidden bg-black border-b border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each links as link}
          <a
            href="{base}{link.path}"
            onclick={() => isOpen = false}
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 {page.url.pathname === (base + link.path) ? 'text-white bg-gray-900' : ''}"
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
