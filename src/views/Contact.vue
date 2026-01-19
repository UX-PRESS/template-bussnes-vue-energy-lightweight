<template>
  <!-- Wrapper cobre o offset do header -->
  <div class="bg-[#FAF7F4] pt-28">
    <section class="text-slate-800 px-6 pb-24">
      <!-- Header -->
      <div class="max-w-6xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Contact AetherGrid
        </h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
          Whether you’re planning a renewable project, exploring off-grid solutions,
          or simply have a question — our team is ready to help.
        </p>
      </div>

      <!-- Content Grid -->
      <div class="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-semibold mb-3">
              Get in touch
            </h2>
            <p class="text-slate-600 leading-relaxed">
              We work closely with homeowners, farmers, community groups, and public
              organizations across Ireland to deliver clean, resilient energy
              infrastructure.
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <p class="font-semibold">Email</p>
              <a
                href="mailto:info@aethergrid.ie"
                class="text-blue-700 hover:underline"
              >
                info@aethergrid.ie
              </a>
            </div>

            <div>
              <p class="font-semibold">Phone</p>
              <a
                href="tel:+353911234567"
                class="text-blue-700 hover:underline"
              >
                +353 91 123 4567
              </a>
            </div>

            <div>
              <p class="font-semibold">Address</p>
              <p class="text-slate-600">
                Dockgate Building<br />
                Galway, Ireland
              </p>
            </div>
          </div>

          <!-- Visual / Image -->
          <div class="hidden md:block">
            <img
              src="/contact-image.png"
              alt="Renewable energy infrastructure in rural Ireland"
              class="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <!-- Contact Form (visual only) -->
        <div class="bg-white rounded-2xl p-8 md:p-10 shadow-md">
          <h2 class="text-2xl font-semibold mb-6">
            Send us a message
          </h2>

          <form class="space-y-5">
            <div>
              <label class="block text-sm font-semibold mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1">
                Project type
              </label>
              <select
                class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Select a project type</option>
                <option>Smart Microgrid</option>
                <option>Home & Farm Installation</option>
                <option>Energy Consultancy</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project"
                class="w-full rounded-lg border border-slate-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <button
              type="button"
              disabled
              class="w-full rounded-xl bg-blue-700 text-white py-3 font-semibold opacity-60 cursor-not-allowed"
            >
              Send message (coming soon)
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
