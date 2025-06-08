<template>
  <section class="bg-[#FAF7F4] py-16 px-6 min-h-screen flex flex-col items-center">
    <div class="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
      <h1 class="text-4xl font-bold mb-6 text-center text-[var(--slate)]">Get in Touch</h1>
      <p class="mb-8 text-center text-[var(--taupe)]">
        Have a project in mind? Reach out to us for a consultation or questions.
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="fullName" class="block mb-1 font-semibold text-[var(--slate)]">Full Name</label>
          <input
            id="fullName"
            v-model="form.fullName"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          />
        </div>

        <div>
          <label for="email" class="block mb-1 font-semibold text-[var(--slate)]">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          />
        </div>

        <div>
          <label for="phone" class="block mb-1 font-semibold text-[var(--slate)]">Phone</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          />
        </div>

        <div>
          <label for="projectType" class="block mb-1 font-semibold text-[var(--slate)]">Project Type</label>
          <select
            id="projectType"
            v-model="form.projectType"
            required
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          >
            <option disabled value="">Select a type</option>
            <option>Smart Microgrid</option>
            <option>Home & Farm Installation</option>
            <option>Energy Consultancy</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label for="location" class="block mb-1 font-semibold text-[var(--slate)]">Location</label>
          <input
            id="location"
            v-model="form.location"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          />
        </div>

        <div>
          <label for="message" class="block mb-1 font-semibold text-[var(--slate)]">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#EE6F30]"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-[#EE6F30] text-white py-3 rounded-xl font-semibold hover:bg-[#cf5f27] transition"
          :disabled="loading"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <p v-if="successMessage" class="mt-6 text-green-600 text-center font-semibold">
        {{ successMessage }}
      </p>
      <p v-if="errorMessage" class="mt-6 text-red-600 text-center font-semibold">
        {{ errorMessage }}
      </p>
    </div>

    <div class="mt-12 max-w-3xl text-center text-[var(--slate)]">
      <h2 class="text-2xl font-semibold mb-2">Contact Details</h2>
      <p>Email: <a href="mailto:info@aethergrid.ie" class="text-[#EE6F30] underline">info@aethergrid.ie</a></p>
      <p>Phone: <a href="tel:+353911234567" class="text-[#EE6F30] underline">+353 91 123 4567</a></p>
      <p>Address: Dockgate Building, Galway, Ireland</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  message: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

function handleSubmit() {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  // Simulação de envio - substituir pela integração real
  setTimeout(() => {
    loading.value = false;
    successMessage.value = 'Thank you for contacting us! We will get back to you soon.';
    form.value = {
      fullName: '',
      email: '',
      phone: '',
      projectType: '',
      location: '',
      message: '',
    };
  }, 1500);
}
</script>
