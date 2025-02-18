import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const benefits = [
    'No upfront costs',
    'Pay when you get real savings',
    '100% money back guarantee'
  ];

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto">
          <div class="bg-white rounded-[32px] p-16 text-center shadow-sm">
            {/* Header */}
            <div class="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-8">
              PRICING
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="text-gray-500">Get a full optimization</span><br />
              <span class="text-gray-500">report for </span>
              <span class="text-gray-900">$5,699</span>
            </h2>

            <p class="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
              Get a step-by-step 12-month optimization roadmap. We will provide projections for future utilization, KPIs, and savings to track ROI.
            </p>

            {/* CTA Button */}
            <a 
              href="#" 
              class="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-medium mb-12 hover:bg-gray-800 transition-colors"
            >
              Get started
            </a>

            {/* Benefits */}
            <div class="flex justify-center gap-12 text-gray-600">
              {benefits.map((benefit) => (
                <div key={benefit} class="flex items-center gap-2">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    class="text-gray-600"
                  >
                    <path 
                      d="M20 6L9 17L4 12" 
                      stroke="currentColor" 
                      stroke-width="2" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 