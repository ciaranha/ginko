import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const faqs = [
    {
      question: 'Why do this instead of hiring internally?',
      answer: 'Hiring a developer takes months, costs a lot, and offers no guarantee of savings.',
      defaultOpen: true
    },
    {
      question: 'What is the typical savings range?',
      answer: 'Our clients typically see savings between 30-70% on their cloud costs.',
      defaultOpen: false
    },
    {
      question: 'How does payment work?',
      answer: 'We charge a fixed fee for the optimization report and roadmap. Implementation can be done by your team or by us.',
      defaultOpen: false
    },
    {
      question: 'Will there be any downtime during optimization?',
      answer: 'No. Our optimization process is designed to work without any service interruption.',
      defaultOpen: false
    },
    {
      question: 'Is customer support included?',
      answer: 'Yes, we provide full support throughout the optimization process and implementation.',
      defaultOpen: false
    },
    {
      question: 'How do we communicate?',
      answer: 'We use your preferred communication channels - email, Slack, or scheduled video calls.',
      defaultOpen: false
    },
    {
      question: 'Can you optimize costs for any cloud provider?',
      answer: 'We specialize in AWS optimization but can provide guidance for other cloud providers.',
      defaultOpen: false
    }
  ];

  const openIndex = useSignal(0);

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-[1200px] mx-auto px-4">
        <div class="max-w-[856px] mx-auto">
          <div class="grid grid-cols-[300px_1fr] gap-8">
            <h2 class="text-4xl font-bold text-gray-900 sticky top-8">
              FAQs
            </h2>

            <div class="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.question}
                  class="bg-white rounded-2xl overflow-hidden border border-gray-100"
                >
                  <button
                    onClick$={() => openIndex.value = openIndex.value === index ? -1 : index}
                    class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span class="text-lg text-gray-900">{faq.question}</span>
                    <svg
                      class={`w-5 h-5 transform transition-transform ${
                        openIndex.value === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    class={`transition-all duration-200 ease-in-out ${
                      openIndex.value === index
                        ? 'max-h-40 px-6 pb-4 opacity-100'
                        : 'max-h-0 overflow-hidden opacity-0'
                    }`}
                  >
                    <p class="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 