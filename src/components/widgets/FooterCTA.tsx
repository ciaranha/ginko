import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto text-center">
          {/* Header */}
          <div class="inline-block px-3 py-1 bg-gray-200 font-mono font-medium rounded-full text-sm mb-8">
            GET STARTED
          </div>

          <h2 class="text-4xl md:text-5xl font-medium mb-4">
            <span class="text-gray-900">Book a 30-minute</span><br />
            <span class="text-gray-600">introduction call</span>
          </h2>

          <p class="text-gray-600 text-xl mb-12">
            Tell us your needs. Get a proposal. We'll bring in our experts.
          </p>

          {/* CTA Buttons */}
          <div class="flex justify-center gap-4">
            <a 
              href="#" 
              class="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Book a call
            </a>
            <a 
              href="#" 
              class="px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}); 