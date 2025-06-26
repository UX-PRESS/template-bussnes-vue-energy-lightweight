<template>
  <footer
    class="bg-[#2E3A47] text-[#FAF7F4] py-6 px-6 md:px-12 flex flex-wrap justify-between items-center gap-4"
>
    <!-- Logo + Tagline -->
    <div class="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0 min-w-[220px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-[#EE6F30] flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="9" stroke="#EE6F30" stroke-width="2" fill="none" />
        <line x1="7" y1="7" x2="17" y2="17" stroke="#EE6F30" stroke-width="2" />
        <line x1="17" y1="7" x2="7" y2="17" stroke="#EE6F30" stroke-width="2" />
      </svg>
      <div class="flex flex-col leading-tight">
        <span class="font-bold text-lg">AetherGrid</span>
        <span class="italic text-sm opacity-70 max-w-xs">Powering Possibility, Sustainably.</span>
      </div>
    </div>

    <!-- Navegação -->
    <nav class="flex flex-wrap justify-center md:justify-start gap-6 flex-grow min-w-[200px]">
      <router-link to="/" class="hover:text-[#EE6F30] transition whitespace-nowrap">Home</router-link>
      <router-link to="/about" class="hover:text-[#EE6F30] transition whitespace-nowrap">About</router-link>
      <router-link to="/solutions" class="hover:text-[#EE6F30] transition whitespace-nowrap">Solutions</router-link>
      <router-link to="/projects" class="hover:text-[#EE6F30] transition whitespace-nowrap">Projects</router-link>
      <router-link to="/contact" class="hover:text-[#EE6F30] transition whitespace-nowrap">Contact</router-link>
    </nav>

    <!-- Ícones sociais -->
    <div class="flex space-x-6 text-xl justify-center md:justify-end flex-shrink-0 min-w-[160px]">
      <a href="https://www.linkedin.com/company/aethergrid" target="_blank" aria-label="LinkedIn" class="hover:text-[#EE6F30] transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.99 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.49 11.28h-3v-5.5c0-1.31-1.69-1.21-1.69 0v5.5h-3v-10h3v1.28c1.39-2.58 6-2.78 6 2.46v6.26z"/>
        </svg>
      </a>
      <a href="https://twitter.com/aethergrid" target="_blank" aria-label="X (Twitter)" class="hover:text-[#EE6F30] transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M24 4.56c-.89.39-1.84.66-2.84.78 1.02-.61 1.8-1.57 2.17-2.71-.95.56-2.01.96-3.14 1.18-.9-.95-2.17-1.54-3.58-1.54-2.7 0-4.88 2.19-4.88 4.88 0 .38.04.75.12 1.1-4.06-.2-7.66-2.15-10.06-5.1-.42.72-.66 1.57-.66 2.48 0 1.71.87 3.22 2.19 4.11-.81 0-1.57-.25-2.23-.61v.06c0 2.4 1.7 4.4 3.95 4.85-.41.11-.85.17-1.3.17-.32 0-.62-.03-.92-.08.63 1.96 2.46 3.38 4.62 3.42-1.7 1.33-3.85 2.12-6.18 2.12-.4 0-.79-.02-1.17-.07 2.21 1.42 4.83 2.24 7.65 2.24 9.17 0 14.19-7.6 14.19-14.19 0-.22-.01-.44-.02-.65.97-.7 1.8-1.57 2.46-2.56z"/>
        </svg>
      </a>
      <a href="https://www.youtube.com/aethergrid" target="_blank" aria-label="YouTube" class="hover:text-[#EE6F30] transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M23.499 6.203c-.278-1.052-1.105-1.878-2.157-2.158-1.9-.511-9.523-.511-9.523-.511s-7.623 0-9.523.511c-1.052.28-1.88 1.106-2.157 2.158-.514 1.95-.514 6.032-.514 6.032s0 4.083.514 6.032c.278 1.053 1.105 1.879 2.157 2.158 1.9.511 9.523.511 9.523.511s7.623 0 9.523-.511c1.052-.279 1.879-1.105 2.157-2.158.514-1.95.514-6.032.514-6.032s0-4.083-.514-6.032zm-14.248 7.69v-6.785l6.027 3.39-6.027 3.395z"/>
        </svg>
      </a>
    </div>

    <!-- Texto final - ocupa toda largura em telas pequenas -->
    <p class="w-full text-center text-xs opacity-60 mt-4 md:mt-0 md:w-auto">
      Proudly building the future of rural Ireland.
    </p>
  </footer>
</template>
