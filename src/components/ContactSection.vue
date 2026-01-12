<template>
  <section
    class="flex min-h-screen items-center justify-center bg-[#FAF7F4] px-6 py-16"
  >
    <div
      class="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-lg lg:grid-cols-2"
    >
      <!-- Image -->
      <div
        class="hidden bg-cover bg-center bg-no-repeat lg:block h-full"
        style="background-image: url('/contact-image.png')"
      ></div>

      <!-- Form -->
      <div class="p-8 sm:p-12">
        <h1
          class="mb-4 text-center font-grotesk text-3xl font-bold text-graphite sm:text-4xl"
        >
          Get in Touch
        </h1>

        <p class="mb-8 text-center text-sm text-gray-600">
          Have a project in mind? Reach out to us for a consultation or questions.
        </p>

        <form class="space-y-5">
          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Email
            </label>
            <input
              type="email"
              placeholder="john@email.com"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+353 00 000 0000"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Project Type
            </label>
            <select
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            >
              <option>Select a type</option>
              <option>Smart Microgrid</option>
              <option>Home & Farm Installation</option>
              <option>Energy Consultancy</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Location
            </label>
            <input
              type="text"
              placeholder="Galway, Ireland"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm font-semibold text-graphite">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              class="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/30"
            ></textarea>
          </div>

          <button
            type="button"
            class="mt-4 w-full rounded-xl bg-orange py-3 text-sm font-semibold
                   text-white transition hover:bg-orange/90"
          >
            Send Message
          </button>
        </form>

        <!-- Contact info -->
        <div class="mt-10 text-center text-sm text-gray-600">
          <p>
            Email:
            <a
              href="mailto:info@aethergrid.ie"
              class="font-semibold text-orange underline"
            >
              info@aethergrid.ie
            </a>
          </p>
          <p>
            Phone:
            <a
              href="tel:+353911234567"
              class="font-semibold text-orange underline"
            >
              +353 91 123 4567
            </a>
          </p>
          <p>Dockgate Building, Galway, Ireland</p>
        </div>
      </div>
    </div>
  </section>
</template>
