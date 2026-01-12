<template>
  <footer class="bg-[#2E3A47] px-6 py-10 text-[#FAF7F4] md:px-12">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between"
    >
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-9 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="7" y1="7" x2="17" y2="17" />
          <line x1="17" y1="7" x2="7" y2="17" />
        </svg>

        <div class="leading-tight">
          <p class="text-lg font-bold">AetherGrid</p>
          <p class="max-w-xs text-sm italic opacity-70">
            Powering Possibility, Sustainably.
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <nav
        class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium"
      >
        <router-link
          to="/"
          class="transition hover:text-orange"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          class="transition hover:text-orange"
        >
          About
        </router-link>
        <router-link
          to="/solutions"
          class="transition hover:text-orange"
        >
          Solutions
        </router-link>
        <router-link
          to="/projects"
          class="transition hover:text-orange"
        >
          Projects
        </router-link>
        <router-link
          to="/contact"
          class="transition hover:text-orange"
        >
          Contact
        </router-link>
      </nav>

      <!-- Social -->
      <div class="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/company/aethergrid"
          target="_blank"
          aria-label="LinkedIn"
          class="transition hover:text-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.99 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.49 11.28h-3v-5.5c0-1.31-1.69-1.21-1.69 0v5.5h-3v-10h3v1.28c1.39-2.58 6-2.78 6 2.46v6.26z"
            />
          </svg>
        </a>

        <a
          href="https://twitter.com/aethergrid"
          target="_blank"
          aria-label="X (Twitter)"
          class="transition hover:text-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 4.56c-.89.39-1.84.66-2.84.78 1.02-.61 1.8-1.57 2.17-2.71-.95.56-2.01.96-3.14 1.18-.9-.95-2.17-1.54-3.58-1.54-2.7 0-4.88 2.19-4.88 4.88 0 .38.04.75.12 1.1-4.06-.2-7.66-2.15-10.06-5.1-.42.72-.66 1.57-.66 2.48 0 1.71.87 3.22 2.19 4.11-.81 0-1.57-.25-2.23-.61v.06c0 2.4 1.7 4.4 3.95 4.85-.41.11-.85.17-1.3.17-.32 0-.62-.03-.92-.08.63 1.96 2.46 3.38 4.62 3.42-1.7 1.33-3.85 2.12-6.18 2.12-.4 0-.79-.02-1.17-.07 2.21 1.42 4.83 2.24 7.65 2.24 9.17 0 14.19-7.6 14.19-14.19 0-.22-.01-.44-.02-.65.97-.7 1.8-1.57 2.46-2.56z"
            />
          </svg>
        </a>

        <a
          href="https://www.youtube.com/aethergrid"
          target="_blank"
          aria-label="YouTube"
          class="transition hover:text-orange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.499 6.203c-.278-1.052-1.105-1.878-2.157-2.158-1.9-.511-9.523-.511-9.523-.511s-7.623 0-9.523.511c-1.052.28-1.88 1.106-2.157 2.158-.514 1.95-.514 6.032-.514 6.032s0 4.083.514 6.032c.278 1.053 1.105 1.879 2.157 2.158 1.9.511 9.523.511 9.523.511s7.623 0 9.523-.511c1.052-.279 1.879-1.105 2.157-2.158.514-1.95.514-6.032.514-6.032s0-4.083-.514-6.032zm-14.248 7.69v-6.785l6.027 3.39-6.027 3.395z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Bottom note -->
    <p class="mt-8 text-center text-xs opacity-60">
      Proudly building the future of rural Ireland.
    </p>
  </footer>
</template>
