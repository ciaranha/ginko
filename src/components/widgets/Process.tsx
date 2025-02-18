import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const steps = [
    {
      title: 'Evaluate',
      description: 'We discuss your setup, project goals, and cost-saving opportunities.',
      icon: '👥' // We'll replace these with proper SVG icons
    },
    {
      title: 'Estimate',
      description: 'We provide a free savings report showing where you can save and how.',
      icon: '📈'
    },
    {
      title: 'Report',
      description: 'We provide a 12-month roadmap detailing what to do.',
      icon: '📋'
    },
    {
      title: 'Execute',
      description: 'Execute the roadmap yourself, or leave it to us and we\'ll do it for you.',
      icon: '⚡'
    }
  ];

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto">
          {/* Header */}
          <div class="text-center mb-16">
            <div class="inline-block px-3 py-1 bg-gray-200 font-mono font-medium rounded-full text-sm mb-4">
              HOW IT WORKS
            </div>
            <h2 class="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Our process
            </h2>
            <p class="text-gray-600 text-xl">
              Get savings analysis and recommendation reports to share with your stakeholders.
            </p>
          </div>

          {/* Process Steps */}
          <div class="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} class="flex flex-col items-center text-center">
                <div class="text-3xl mb-4 text-emerald-600">
                  {step.icon}
                </div>
                <h3 class="text-gray-900 font-medium text-lg mb-2">
                  {step.title}
                </h3>
                <p class="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div class="text-center mt-12">
            <a 
              href="#" 
              class="inline-block px-6 py-3 bg-white rounded-full text-gray-900 font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              Get a free savings report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}); 